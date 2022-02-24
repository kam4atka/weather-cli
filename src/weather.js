import {getObjectOfArgs} from './helpers/args.js';
import {printError, printHelp, printSuccess} from './services/logger.js';
import {saveKeyValue} from './services/storage.js';
import {MESSAGES, ENTRIES, HTTP_CODE} from './const.js';
import {getWeather} from './services/api.js';

const saveToken = async (token) => {
  if (!token.length) {
    printError(MESSAGES.TOKEN_ERROR);
    return;
  }

  try {
    await saveKeyValue(ENTRIES.TOKEN, token);
    printSuccess(MESSAGES.TOKEN_SUCCESS);
  } catch (err) {
    printError(err.message);
  }
}

const getForcast = async () => {
  try {
    const weather = await getWeather('moscow')

    return weather;
  } catch (err) {
    if (!err.response.status) {
      return;
    }

    switch (err.response.status) {
      case HTTP_CODE.UNAUTHORIZED:
        printError(MESSAGES.HTTP_UNAUTHORIZED);
        break;
      case HTTP_CODE.NOT_FOUND:
        printError(MESSAGES.HTTP_NOT_FOUND);
        break;
      default:
        printError(err.message);
        break;
    }
  }
};

const initCLI = () => {
  const args = getObjectOfArgs(process.argv);

  if (args.h) {
    printHelp();
  }
  if (args.t) {
    return saveToken(args.t);
  }
  if (args.s) {
    return saveToken(args.t);
  }

  const weather = getForcast();

  console.log(weather);
};

export {initCLI};
