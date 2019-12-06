import { prepareUrls } from 'react-dev-utils/WebpackDevServerUtils';
import chalk from 'react-dev-utils/chalk';

const protocol = process.env.HTTPS === 'true' ? 'https' : 'http';
const HOST = process.env.HOST || '0.0.0.0';

export const handleDevEnv = (port) => {
  const urls = prepareUrls(protocol, HOST, port);

  if (urls.lanUrlForTerminal) {
    console.log(
      `\n  ${chalk.bold('Local:')}            ${urls.localUrlForTerminal}`,
    );

    console.log(
      `  ${chalk.bold('On Your Network:')}  ${urls.lanUrlForTerminal}\n`,
    );
  } else {
    console.log(`${urls.localUrlForTerminal}`);
  }

  // openBrowser((urls.localUrlForBrowser));
};
