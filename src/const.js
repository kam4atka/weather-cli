export const NAME_FILE = 'weather-data.json';

export const ENTRIES = {
  TOKEN: 'token',
  CITY: 'city'
};

export const MESSAGES = {
  TOKEN_SUCCESS: 'Токен сохранен',
  TOKEN_ERROR: 'Не задан ключ API. Воспользуйтесь ключем -h, чтобы узнать подробнее как добавить ключ API',
  CITY_SUCCESS: 'Город сохранен',
  CITY_ERROR: 'Не задан город. Воспользуйтесь ключем -h, чтобы узнать подробнее как добавить город',
  HTTP_UNAUTHORIZED: 'Доступ запрещен. Проверьте наличие и корректность ключа API',
  HTTP_NOT_FOUND: 'Сервер не найшел данные соответствующие введенным параметрам'
};

export const WEATHER_SERVER_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const CONFIG_API_PARAMS = {
  CITY: 'q',
  TOKEN: 'appid',
  LANG: 'lang',
  UNITS: 'units'
};

export const CONFIG_API_VALUE = {
  LANG: 'ru',
  UNITS: 'metric'
};

export const HTTP_CODE = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404
};
