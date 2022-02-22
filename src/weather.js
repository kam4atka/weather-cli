import {getObjectOfArgs} from './helpers/args.js';
import {printHelp} from './services/logger.js';

const initCLI = () => {
  const args = getObjectOfArgs(process.argv);

  if (args.h) {
    printHelp();
  }
};

export {initCLI};
