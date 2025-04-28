import path from 'node:path';
import { createGunzip} from 'node:zlib';
import fs from 'node:fs';
import { pipeline } from 'node:stream';

const decompress = async () => {
        const filePath = path.join(import.meta.dirname, 'files/archive.gz');
        const destinationPath = path.join(import.meta.dirname, 'files/fileToCompress.txt');
    
        const unzip = createGunzip();
        const readStream = fs.createReadStream(filePath);
        const writeStream = fs.createWriteStream(destinationPath);
    
        pipeline(
            readStream,
            unzip,
            writeStream,
            (err) => {
                if (err) {
                    console.error(err);
                }
            }
        )
};

await decompress();