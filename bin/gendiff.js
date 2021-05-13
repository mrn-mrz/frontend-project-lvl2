#!/usr/bin/env node
import { Command } from '../node_modules/commander/esm.mjs';

const program = new Command();
program
  .version('1.0.0', '-V, --version')
  .description('Compares two configuration files and shows a difference.')

console.log(program.parse())
