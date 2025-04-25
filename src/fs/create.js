import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';

const create = async () => {
    const path = './files/fresh.txt';

    if (existsSync(path)) throw new Error('FS operation failed');

    const content = 'I am fresh and young';
    writeFile(path, content);
};

await create();