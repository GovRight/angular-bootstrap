var inquirer = require('inquirer');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

console.log('\x1b[32mWelcome to the GovRight project wizard!\x1b[0m\n');
console.log('Please enter required data:');

exec('git config user.name && git config user.email && git config --get remote.origin.url', function (error, stdout, stderr) {
  var gitInfo = stdout.trim().split('\n');
  var questions = [
    {
      name: 'name',
      message: 'Project name (e.g., My awesome angular project):',
      type: 'input'
    },
    {
      name: 'description',
      message: 'Project description (a sentence or two, 140 characters max):',
      type: 'input',
      validate: function (str) {
        return str.length <= 140 || 'The "description" is too long, the limit is 140 characters';
      }
    },
    {
      name: 'port',
      message: 'Backend application port (a number between 3000 and 9999):',
      type: 'input'
    },
    {
      name: 'tests',
      message: 'Would you like to have a testing framework in your app?',
      type: 'confirm'
    }
  ];

  inquirer.prompt(questions).then(function (answers) {
    var packageJson = JSON.parse(fs.readFileSync('./install/package.json').toString());
    var bowerJson = JSON.parse(fs.readFileSync('./bower.json').toString());
    var readmeMd = fs.readFileSync('./install/README.md').toString();
    answers.name = answers.name.trim();
    answers.port = parseInt(answers.port);

    packageJson.name = slugify(answers.name);
    packageJson.description = answers.description;
    packageJson.contributors.push({
      name: gitInfo[0],
      email: gitInfo[1]
    });
    packageJson.repository.url = gitInfo[2];
    if (answers.port) {
      packageJson.config.port = answers.port;
    }

    bowerJson.name = slugify(answers.name);
    bowerJson.description = answers.description;
    bowerJson.authors.push(gitInfo[0] + ' <' + gitInfo[1] + '>');

    readmeMd = readmeMd.replace('{{projectName}}', answers.name)
      .replace('{{projectDescription}}', answers.description)
      .replace('{{appPort}}', answers.port);

    if (!~process.argv.indexOf('--dry-run')) {
      if(answers.tests) {
        fs.mkdirSync('./test');
        packageJson.scripts.test = 'karma start ./test/karma.conf.js --single-run';
        packageJson.scripts['test:watch'] = 'karma start ./test/karma.conf.js';
        bowerJson.dependencies['angular-mocks'] = '1.5.0';
        readmeMd += '\n' +
          '## Testing\n' +
          '\n' +
          'Testing-related stuff is located in the `./test` folder:\n' +
          '\n' +
          '* `./test/fixtures` - json fixtures, handled by [https://www.npmjs.com/package/karma-json-fixtures-preprocessor](karma-json-fixtures-preprocessor module)\n' +
          '* `./test/mocks` - put your mocked components here\n' +
          '* `./test/specs` - put your actual unit tests here\n' +
          '\n' +
          '```bash\n' +
          '# Run unit tests once\n' +
          'npm test\n' +
          '\n' +
          '# Or make it automatically run on every code change\n' +
          'npm run test:watch\n' +
          '```\n' +
          '\n' +
          'Read about unit testing of Angular apps in (https://docs.angularjs.org/guide/unit-testing)[the official guide].\n' +
          '\n';
      }
      fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf8');
      fs.writeFileSync('./bower.json', JSON.stringify(bowerJson, null, 2), 'utf8');
      fs.writeFileSync('./README.md', readmeMd, 'utf8');
    } else {
      console.log(answers, gitInfo);
    }

    console.log('\n\x1b[32mProject setup is done. Installing project dependencies...\x1b[0m\n');
  });
});

function slugify(str) {
  return str.trim()
    .replace(/[^a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase();
}
