import chalk from 'chalk';
import dedent from 'dedent-js';

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

export {
  printError,
  printSuccess,
  printHelp
};
