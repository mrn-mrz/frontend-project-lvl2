import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '../__fixtures__', filename);

const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf8');

test.each([
  ['.json'],
  ['.yml'],
])('gendiff with each formats', (ext) => {
  const path1 = getFixturePath(`file1${ext}`);
  const path2 = getFixturePath(`file2${ext}`);
  const result = genDiff(path1, path2);
  expect(result).toBe(expected);
});
