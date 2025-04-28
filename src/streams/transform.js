import { Transform, pipeline } from 'node:stream';

const transform = async () => {
    const transStream = new Transform({
        transform(chunk, _, callback) {
            const chunkReversed = chunk
                .toString()
                .trim()
                .split('')
                .reverse()
                .join('');

            callback(null, chunkReversed + '\n');
        }
    })

    pipeline(
        process.stdin,
        transStream,
        process.stdout,
        err => {
            console.error(err);
        }
    );
};

await transform();