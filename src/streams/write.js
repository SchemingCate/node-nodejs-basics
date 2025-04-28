import path from 'node:path';
import fs from 'node:fs';

const write = async () => {
    const filePath = path.join(import.meta.dirname, 'files/fileToWrite.txt');

    const writeStream = fs.createWriteStream(filePath);

    process.stdout.on('data', (data) => {
        writeStream.write(data);
        process.exit();
    });
};

await write();