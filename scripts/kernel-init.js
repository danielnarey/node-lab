'use strict';

const path = require('path');
const execa = require('execa');
const fs = require('fs-extra');

// These are paths to assets in the ijavascript npm package (v5.0.20);
// they may need to be updated if filenames change in future versions
const pathToExecutable = '../node_modules/.bin/ijskernel';
const pathToLogo32px = '../node_modules/ijavascript/images/nodejs/js-green-32x32.png';
const pathToLogo64px = '../node_modules/ijavascript/images/nodejs/js-green-64x64.png';

(async () => {
  try {
    const execFile = path.resolve(__dirname, pathToExecutable);
    const execFileExists = await fs.pathExists(execFile);

    if (!execFileExists) {
      throw new Error(`IJavascript kernel executable '${execFile}' does not exist. Try running "npm install ijavascript".`);
    }

    // Get the path to this project's virtual environment
    const { stdout } = await execa('pipenv', ['--venv']);
    const writeDir = path.resolve(stdout, './share/jupyter/kernels/ijavascript');
    const writeFile = path.resolve(writeDir, './kernel.json');

    const jsonOut = {
      argv: [
        execFile,
        '--hide-undefined',
        '{connection_file}',
        '--protocol=5.0'
      ],
      display_name: 'Node.js',
      language: 'JavaScript',
    };

    await fs.ensureDir(writeDir);

    await fs.writeJSON(
      writeFile,
      jsonOut,
      { spaces: 2 },
    );

    console.log(`Success! Created a data file containing the IJavascript kernel's executable path at '${writeFile}'`);

    const imageFile32px = path.resolve(__dirname, pathToLogo32px);
    const imageFile64px = path.resolve(__dirname, pathToLogo64px);
    const imageFile32pxExists = await fs.pathExists(imageFile32px);
    const imageFile64pxExists = await fs.pathExists(imageFile64px);

    if (!imageFile32pxExists) {
      console.warn(`Could not copy the image file '${imageFile32px}' because it doesn't exist.`);
    } else {
      await fs.copy(imageFile32px, path.resolve(writeDir, './logo-32x32.png'));
    }

    if (!imageFile64pxExists) {
      console.warn(`Could not copy the image file '${imageFile64px}' because it doesn't exist.`);
    } else {
      await fs.copy(imageFile64px, path.resolve(writeDir, './logo-64x64.png'));
    }
  } catch (err) {
    console.error(err);
  }
})();
