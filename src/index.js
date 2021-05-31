import path from 'path';
import fs from 'fs';
import parse from './parsers.js';
import makeDiff from './diff.js';
import format from './formatters/stylish.js';

const getFileData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), '__fixtures__', filepath);
  const data = fs.readFileSync(absolutePath);
  const extention = path.extname(filepath);
  return parse(data, extention);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);
  const diff = makeDiff(data1, data2);
  return format(diff);
};

export default genDiff;
