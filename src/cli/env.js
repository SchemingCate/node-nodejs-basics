const parseEnv = () => {
    const env = process.env;
    let output = '';

    for (const name in env) {
        if (!name.startsWith('RSS_')) continue;
        if (output) output += '; ';
        output += `${name}=${env[name]}`;
    };

    console.log(output);
};

parseEnv();