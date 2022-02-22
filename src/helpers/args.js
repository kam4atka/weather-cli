const getObjectOfArgs = (args) => {
  const [_executer, _file, ...restOfArgs] = args;

  const objectOfArgs = {};

  restOfArgs.forEach((arg, index, array) => {
    if (arg.charAt(0) === '-') {
      if (index === array.length -1) {
        objectOfArgs[arg.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== '-') {
        objectOfArgs[arg.substring(1)] = array[index + 1];
      } else {
        objectOfArgs[arg.substring(1)] = true;
      }
    }
  });

  return objectOfArgs;
};

export {getObjectOfArgs};
