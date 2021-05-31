import _ from 'lodash';

const stringify = (value) => {
  if (_.isPlainObject(value)) {
    return '[complex value]';
  }

  return typeof value === 'string' ? `'${value}'` : value;
};

const renderPlain = (diff) => {
  const iter = (tree, path) => tree.flatMap((node) => {
    const {
      name, value, newValue, status, children,
    } = node;

    const outputValue = stringify(value);
    const outputNewValue = stringify(newValue);
    const currentPath = [...path, name];
    const currentPathStr = currentPath.join('.');

    switch (status) {
      case 'nested':
        return iter(children, currentPath);
      case 'added':
        return `Property '${currentPathStr}' was added with value: ${outputValue}`;
      case 'removed':
        return `Property '${currentPathStr}' was removed`;
      case 'updated':
        return `Property '${currentPathStr}' was updated. From ${outputValue} to ${outputNewValue}`;
      default:
        return [];
    }
  });

  return iter(diff, []).join('\n');
};

export default renderPlain;
