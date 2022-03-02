import chalk from 'chalk';
import dedent from 'dedent-js';

const getIcon = (icon) => {
	switch (icon.slice(0, -1)) {
		case '01':
			return '🌞';
		case '02':
			return '🌤️';
		case '03':
			return '🌥️';
		case '04':
			return '🌥️';
		case '09':
			return '🌧️';
		case '10':
			return '🌦️';
		case '11':
			return '🌩️';
		case '13':
			return '🌨️';
		case '50':
			return '🌫️';
	}
};

const printError = (err) =>
  console.log(`${chalk.bgRed('ERROR')} ${err}`);

const printSuccess = (msg) =>
  console.log(`${chalk.bgGreen('SUCCESS')} ${msg}`);

const printHelp = () =>
  console.log(
    dedent`
      ${chalk.bgCyan('HELP')}
      Параметры:
      Без параметров - вывод погоды;
      -s [CITY] - установка города;
      -t [API_KEY] - сохранение токена;
      -h - вывод помощи.
    `
  );

const printWeather = (res) => {
  console.log(
    dedent`
      Погода в городе ${chalk.bgCyanBright(res.name)}:

      ${getIcon(res.weather[0].icon)}  ${res.weather[0].description}
      Температура: ${res.main.temp} (ощущается как ${res.main.feels_like})
      Влажность: ${res.main.humidity}%
      Скорость ветра: ${res.wind.speed}
    `
  );
};

export {
  printError,
  printSuccess,
  printHelp,
  printWeather
};
