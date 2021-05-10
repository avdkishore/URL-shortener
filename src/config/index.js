import fs from 'fs';

const env = process.env.NODE_ENV || 'development';

let config = {};

/*
  Base configurations
 */
fs.readdirSync(__dirname)
  .filter(f => !f.includes('index.js') && !f.includes('env'))
  .forEach(filename => {
    config = {
      ...config,
      [filename.split('.')[0]]: require(`./${filename}`).default
    }
  });

/*
  Environment configuration overrides
 */
const envDir = `${__dirname}/env`;
const isEnvExisting = fs.existsSync(envDir);

if (isEnvExisting) {
  fs.readdirSync(envDir).forEach(filename => {
    const basename = filename.split('.')[0];

    if (env === basename) {
      config = {
        ...config,
        ...require(`./env/${filename}`).default
      }
    }
  });
}

export default config;