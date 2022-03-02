import axios from 'axios';
import {getKeyValue} from './storage.js';
import {
  WEATHER_SERVER_URL,
  ENTRIES,
  MESSAGES,
  CONFIG_API_PARAMS,
  CONFIG_API_VALUE
} from '../const.js';

const getWeather = async (city) => {
  const token = process.env.TOKEN ?? await getKeyValue(ENTRIES.TOKEN);

  if (!token) {
    throw new Error(MESSAGES.TOKEN_ERROR);
  }

  const {data} = await axios.get(WEATHER_SERVER_URL, {
    params: {
      [CONFIG_API_PARAMS.CITY]: city,
      [CONFIG_API_PARAMS.TOKEN]: token,
      [CONFIG_API_PARAMS.LANG]: CONFIG_API_VALUE.LANG,
      [CONFIG_API_PARAMS.UNITS]: CONFIG_API_VALUE.UNITS
    }
  });

  return data;

  // * An alternative option using the https library.
  // * You need add  next line before:
  // * import https from 'https';

  // const url = new URL(WEATHER_SERVER_URL);
  // url.searchParams.append(CONFIG_API_PARAMS.CITY, city);
  // url.searchParams.append(CONFIG_API_PARAMS.TOKEN, token);
  // url.searchParams.append(CONFIG_API_PARAMS.LANG, CONFIG_API_VALUE.LANG);
  // url.searchParams.append(CONFIG_API_PARAMS.UNITS, CONFIG_API_VALUE.UNITS);

  // https.get(url, (response) => {
  //   let result = '';

  //   response.on('data', (chunk) => {
  //     result += chunk;
  //   });

  //   response.on('end', () => {
  //     console.log(result);
  //   });
  // });
};

export {getWeather};
