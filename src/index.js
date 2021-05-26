import _ from 'lodash';
import path from 'path';
import fs from 'fs';
import parse from './parsers.js';

const getFileData = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), '__fixtures__', filepath);
  // console.log(absolutePath);
  const data = fs.readFileSync(absolutePath);
  const format = path.extname(filepath);
  return parse(data, format);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = getFileData(filepath1);
  const data2 = getFileData(filepath2);
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const diff = keys.reduce((acc, key) => {
    if (!_.has(data1, key)) {
      acc.push(`+ ${key}: ${data2[key]}`);
    } else
    if (!_.has(data2, key)) {
      acc.push(`- ${key}: ${data1[key]}`);
    } else
    if (data1[key] !== data2[key]) {
      acc.push(`- ${key}: ${data1[key]}`);
      acc.push(`+ ${key}: ${data2[key]}`);
    } else {
      acc.push(`  ${key}: ${data1[key]}`);
    }
    return acc;
  }, []).join('\n  ');
  return `{\n  ${diff}\n}`;
};

export default genDiff;
