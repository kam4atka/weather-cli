import {getObjectOfArgs} from './helpers/args.js';
import {printError, printHelp, printSuccess} from './services/logger.js';
import {saveKeyValue} from './services/storage.js';
import {MESSAGES} from './const.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError(MESSAGES.TOKEN_ERROR);
    return;
  }

  try {
    await saveKeyValue('token', token);
    printSuccess(MESSAGES.TOKEN_SUCCESS);
  } catch (err) {
    printError(err.message);
  }
}

const initCLI = () => {
  const args = getObjectOfArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.t) {
    return saveToken(args.t);
  }
};

export {initCLI};
