import path from 'node:path';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';

const read = async () => {
    const filePath = path.join(import.meta.dirname, 'files/fileToRead.txt');

    if (!existsSync(filePath)) throw new Error('FS operation failed');

    readFile(filePath, { encoding: 'utf8'})
        .then((content) => {
            console.log(content);
        });
};

await read();