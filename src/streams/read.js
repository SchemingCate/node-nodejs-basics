import path from 'node:path';
import fs from 'node:fs';

const read = async () => {
    const filePath = path.join(import.meta.dirname, 'files/fileToRead.txt');

    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk + '\n');
    });
};

await read();