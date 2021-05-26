#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0.0', '-V, --version')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2));
  });

program.parse();
