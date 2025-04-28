import path from 'node:path';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';

const list = async () => {
    const folderPath = path.join(import.meta.dirname, 'files');

    if (!existsSync(folderPath)) throw new Error('FS operation failed');

    readdir(folderPath, { recursive: true })
        .then((filesArr) => {
            console.log(filesArr);
        });
};

await list();