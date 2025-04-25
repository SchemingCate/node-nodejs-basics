import { writeFile } from 'node:fs/promises';

const create = async () => {
    const path = './files/fresh.txt';
    const content = 'I am fresh and young'

    writeFile(path, content);
};

await create();