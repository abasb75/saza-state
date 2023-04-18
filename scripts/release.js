const fs = require('fs');
const fse = require('fs-extra');
const {exec, execSync} = require('child_process');

const inquirer = require('inquirer'); /** ask question in cmd : use inquirer 8 or older version */ 

const releaseDirectory = './release';
const assetDirectory = './assets';
const srcDirectory = './src';

/** remove older version of release */
if(fs.existsSync(releaseDirectory)){
    console.log('older release removed')
    fs.rmSync(releaseDirectory, { recursive: true, force: true });
}

/* create new release directory */
fs.mkdirSync(releaseDirectory);

/* copy package.json to release dir */
fs.copyFileSync(`${assetDirectory}/package.json`,`${releaseDirectory}/package.json`);


const questions = [
  {
    type: 'input',
    name: 'app_version',
    message: "Enter App Version :",
  },
];

/* copy readme to release directory */
fs.copyFileSync(`./README.md`,`${releaseDirectory}/README.md`);

/* copy src to release */
//fse.copySync(srcDirectory,releaseDirectory);

execSync(`rollup ${srcDirectory}/index.js --file ${releaseDirectory}/index.js --format esm`, {stdio: 'inherit'});
execSync(`rollup ${srcDirectory}/props/index.js --file ${releaseDirectory}/props/index.js --format esm`, {stdio: 'inherit'});


/* setting up app version in package.json */
inquirer.prompt(questions).then(answers => {
    fs.readFile(`${releaseDirectory}/package.json`, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        var result = data.replace(/__APP_VERSION__/g, answers.app_version);
      
        fs.writeFile(`${releaseDirectory}/package.json`, result, 'utf8', function (err) {
           if (err) return console.log(err);
        });
    });





});




