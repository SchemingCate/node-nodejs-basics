import path from 'node:path';
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const create = async () => {
    const url = path.join(import.meta.dirname, 'files/fresh.txt');

    if (existsSync(url)) throw new Error('FS operation failed');

    const content = 'I am fresh and young';
    writeFile(url, content);
};

await create();