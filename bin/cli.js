#!/usr/bin/env node

const process = require('process');
const program = require('commander');
const version = require('../package.json').version;
const eslint = require("eslint");
const render = require('../src/render');
const output = require('../src/output');
const nodePath = require('path');
const fs = require('fs');

program
    .version(version)
    .usage('[options] <src...>')
    .option('-f, --path <path>', 'base directory for resolving paths')
    .option('-c, --config <path>', '.eslintrc path')
    .option('-o, --output <path>', 'path for report html')
    .parse(process.argv);

// if (!program.args.length && !program.stdin) {
//     console.log(program.helpInformation());
//     process.exit(1);
// }

if (program.debug) {
    process.env.DEBUG = '*';
}

if (!program.color) {
    process.env.DEBUG_COLORS = false;
}

const isFileExsit = (path) => {
    try {
        fs.statSync(path);
        return true;
    }
    catch(err) {
        return false;
    }
};

new Promise((/* resolve, reject */) => {
    const path = program.path || './app/biz/';
    let eslintConfig = program.config || './.eslintrc';
    if(!isFileExsit(eslintConfig)) {
        eslintConfig = nodePath.resolve(require.main.filename, '../../.eslintrc');
    }

    const outputPath = program.output || './report.html';
    // eslint
    const CLIEngine = eslint.CLIEngine;
    const cli = new CLIEngine({
        envs: ['browser', 'mocha'],
        configFile: eslintConfig
    });
    const report = cli.executeOnFiles([path]);
    render(report, outputPath);
})
.catch((err) => {
    output.error(err);
    process.exit(1);
});
