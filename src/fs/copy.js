import path from 'node:path';
import { existsSync } from 'node:fs';
import { cp } from 'node:fs/promises';

const copy = async () => {
    const sourceFolderPath = path.join(import.meta.dirname, 'files');
    const copyFolderPath = path.join(import.meta.dirname, 'files_copy');

    if (!existsSync(sourceFolderPath) || existsSync(copyFolderPath)) throw new Error('FS operation failed');

    cp(sourceFolderPath, copyFolderPath, { recursive: true });
};

await copy();
