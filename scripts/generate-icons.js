import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';

function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) {
    crc = table[(crc ^ buf[i]) & 0xFF] ^ (crc >>> 8);
  }
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function makeChunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function createPng(size, primaryColor, secondaryColor) {
  const width = size;
  const height = size;
  
  // Create scanlines: each row has 1 filter byte (0) + size * 4 (RGBA)
  const rowLen = 1 + width * 4;
  const rawData = Buffer.alloc(height * rowLen);

  const cx = width / 2;
  const cy = height / 2;
  const radius = width * 0.42;

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowLen;
    rawData[rowOffset] = 0; // Filter type: None

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * 4;
      const dx = x - cx;
      const dy = y - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Background rounded square or circle
      if (dist <= radius) {
        // Gradient from top-left to bottom-right
        const factor = (x + y) / (width * 2);
        const r = Math.round(15 + factor * 20); // Deep navy to rich indigo
        const g = Math.round(23 + factor * 40);
        const b = Math.round(42 + factor * 80);
        
        // Inner glowing ring/pin mark
        const innerDist = Math.sqrt(dx * dx + (dy + size * 0.05) ** 2);
        if (innerDist < size * 0.22 && innerDist > size * 0.14) {
          // Emerald green ring (WhatsApp & Maps theme)
          rawData[pxOffset] = 37;
          rawData[pxOffset + 1] = 211;
          rawData[pxOffset + 2] = 102;
          rawData[pxOffset + 3] = 255;
        } else if (innerDist <= size * 0.12) {
          // Cyan core dot
          rawData[pxOffset] = 56;
          rawData[pxOffset + 1] = 189;
          rawData[pxOffset + 2] = 248;
          rawData[pxOffset + 3] = 255;
        } else {
          rawData[pxOffset] = r;
          rawData[pxOffset + 1] = g;
          rawData[pxOffset + 2] = b;
          rawData[pxOffset + 3] = 255;
        }
      } else {
        // Transparent border around icon
        rawData[pxOffset] = 0;
        rawData[pxOffset + 1] = 0;
        rawData[pxOffset + 2] = 0;
        rawData[pxOffset + 3] = 0;
      }
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // Deflate
  ihdr[11] = 0; // Filter
  ihdr[12] = 0; // No interlace

  const idatData = zlib.deflateSync(rawData);

  const pngSig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', idatData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([pngSig, ihdrChunk, idatChunk, iendChunk]);
}

const outDir = path.resolve('public');
fs.writeFileSync(path.join(outDir, 'pwa-192x192.png'), createPng(192));
fs.writeFileSync(path.join(outDir, 'pwa-512x512.png'), createPng(512));
console.log('Successfully generated PWA icons in public/ directory!');

