const parseArgs = () => {
    const args = process.argv.slice(2);
    let output = '';
    
    for (let i = 0; i < args.length; i += 2) {
        if (i != 0) output += ', '
        output += `${args[i].replace('--', '')} is ${args[i+1]}`;
    };

    console.log(output);
};

parseArgs();