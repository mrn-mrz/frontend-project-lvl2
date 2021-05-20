import { test, expect } from '@jest/globals';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.resolve(__dirname, '..', '__fixtures__', filename);

const path1 = getFixturePath('file1.json');
const path2 = getFixturePath('file2.json');

const expected = fs.readFileSync(getFixturePath('expected.txt'), 'utf8');
const result = genDiff(path1, path2);

test('genDiff', () => {
  expect(result).toBe(expected);
});
