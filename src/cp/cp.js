import path from 'node:path';
import { fork } from  'node:child_process';

const spawnChildProcess = async (args) => {
    const filePath = path.join(import.meta.dirname, 'files/script.js');

    fork(filePath, args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', 'someArgument3']);
