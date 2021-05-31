import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__', filename);

test.each([
  ['.json'],
  ['.yml'],
])('gendiff with different formats', (ext) => {
  const path1 = getFixturePath(`file1${ext}`);
  const path2 = getFixturePath(`file2${ext}`);
  const result = genDiff(path1, path2);
  const expected = fs.readFileSync(getFixturePath('stylish.txt'), 'utf8');
  expect(result).toBe(expected);
});

test.each([
  ['.json'],
  ['.yml'],
])('gendiff with plain formatters', (ext) => {
  const path1 = getFixturePath(`file1${ext}`);
  const path2 = getFixturePath(`file2${ext}`);
  const result = genDiff(path1, path2, 'plain');
  const expected = fs.readFileSync(getFixturePath('plain.txt'), 'utf8');
  expect(result).toBe(expected);
});
