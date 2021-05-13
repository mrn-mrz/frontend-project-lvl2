#!/usr/bin/env node
import { Command } from '../node_modules/commander/esm.mjs';

const program = new Command();
program
  .version('1.0.0', '-V, --version')
  .arguments('<filepath1> <filepath2>')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type>',  'output format')

console.log(program.parse())
