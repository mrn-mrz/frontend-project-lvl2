import _ from 'lodash';

const getIndent = (depth, str = ' ', spacesCount = 4) => str.repeat(depth * spacesCount - 2);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return value;
  }

  const keys = Object.keys(value);
  const indent = getIndent(depth);
  const braceIndent = getIndent(depth - 1);

  const innerPart = keys.map((key) => {
    const currentValue = value[key];
    if (_.isPlainObject(currentValue)) {
      return `${indent}  ${key}: ${stringify(currentValue, depth + 1)}`;
    }
    return `${indent}  ${key}: ${currentValue}`;
  });
  return `{\n${innerPart.join('\n')}\n${braceIndent}  }`;
};

const stylishFormatter = (diff) => {
  const iter = (depth, node) => node.flatMap((child) => {
    const {
      name, value, status, newValue, children,
    } = child;
    const indent = getIndent(depth);
    const nextLevelDepth = depth + 1;

    switch (status) {
      case 'nested':
        return `${indent}  ${name}: {\n${iter(nextLevelDepth, children)}\n${indent}  }`.split(',');
      case 'updated':
        return `${indent}- ${name}: ${stringify(value, nextLevelDepth)}\n${indent}+ ${name}: ${stringify(newValue, nextLevelDepth)}`;
      case 'added':
        return `${indent}+ ${name}: ${stringify(value, nextLevelDepth)}`;
      case 'removed':
        return `${indent}- ${name}: ${stringify(value, nextLevelDepth)}`;
      case 'unchanged':
        return `${indent}  ${name}: ${value}`;
      default:
        throw new Error('Unexpected condition. Please check the input data.');
    }
  });

  const startDepth = 1;
  const innerPart = iter(startDepth, diff);
  return `{\n${innerPart.join('\n')}\n}`;
};

export default stylishFormatter;
