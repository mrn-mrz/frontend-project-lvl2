import { test, expect } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const pathToFile = (filename) => path.join(path.resolve(), '__fixtures__', filename);
const getData = (filename) => fs.readFileSync(pathToFile(filename), 'utf-8');

const stylish = getData('stylish.txt');
const plain = getData('plain.txt');
const json = getData('json.txt');

test.each([
  ['.json'],
  ['.yml'],
])('gendiff with each formats', (ext) => {
  const first = pathToFile(`file1${ext}`);
  const second = pathToFile(`file2${ext}`);
  expect(genDiff(first, second)).toEqual(stylish);
  expect(genDiff(first, second, 'plain')).toEqual(plain);
  expect(genDiff(first, second, 'json')).toEqual(json);
});
