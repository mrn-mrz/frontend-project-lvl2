import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const keys = _.sortBy(_.union(keys1, keys2));

  const difference = keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (!_.has(data2, key)) {
      return { name: key, value: value1, status: 'removed' };
    }
    if (!_.has(data1, key)) {
      return { name: key, value: value2, status: 'added' };
    }
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return { name: key, status: 'nested', children: buildDiff(value1, value2) };
    }
    if (value1 !== value2) {
      return {
        name: key, value: value1, status: 'updated', newValue: value2,
      };
    }
    return { name: key, value: value1, status: 'unchanged' };
  }, []);

  return difference;
};

export default buildDiff;
