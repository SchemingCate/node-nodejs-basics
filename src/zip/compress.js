import path from 'node:path';
import { createGzip } from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream';

const compress = async () => {
    const filePath = path.join(import.meta.dirname, 'files/fileToCompress.txt');
    const destinationPath = path.join(import.meta.dirname, 'files/archive.gz');

    const gzip = createGzip();
    const readStream = fs.createReadStream(filePath);
    const writeStream = fs.createWriteStream(destinationPath);

    pipeline(
        readStream,
        gzip,
        writeStream,
        (err) => {
            if (err) {
                console.error(err);
            }
        }
    )
};

await compress();