import path from 'node:path';
import { existsSync } from 'node:fs';
import { rm } from 'node:fs/promises';

const remove = async () => {
    const filePath = path.join(import.meta.dirname, 'files/fileToRemove.txt');

    if (!existsSync(filePath)) throw new Error('FS operation failed');

    rm(filePath);
};

await remove();