import path from 'node:path';
import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    const filePath = path.join(import.meta.dirname, '/files/fileToCalculateHashFor.txt');

    const hash = createHash('sha256');
    const readStream = createReadStream(filePath);

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        console.log(`---\nCalculated SHA256 hash for fileToCalculateHashFor.txt:\n\n${hash.digest('hex')}\n---`);
    });
};

await calculateHash();