import path from 'node:path';
import { existsSync } from 'node:fs';
import { rename as renameFile} from 'node:fs/promises';

const rename = async () => {
    const wrongFilenamePath = path.join(import.meta.dirname, 'files/wrongFilename.txt');
    const properFilenamePath = path.join(import.meta.dirname, 'files/properFilename.md');

    if(!existsSync(wrongFilenamePath) || existsSync(properFilenamePath)) throw new Error('FS operation failed');

    renameFile(wrongFilenamePath, properFilenamePath);
};

await rename();