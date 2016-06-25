var inquirer = require('inquirer');
var exec = require('child_process').exec;
var path = require('path');
var fs = require('fs');

console.log('\x1b[32mWelcome to the GovRight project wizard!\x1b[0m\n');
console.log('Please enter required data:');

exec('git config --get remote.origin.url', function (error, stdout) {
  var questions = [
    {
      name: 'contributorName',
      message: 'Your name:',
      type: 'input'
    },
    {
      name: 'contributorEmail',
      message: 'Your email:',
      type: 'input'
    },
    {
      name: 'name',
      message: 'Project name (e.g., Corruption reporting tool):',
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

  var gitInfo = stdout.trim().split('\n');
  if(!gitInfo[0]) {
    questions.unshift({
      name: 'repo',
      message: 'Project repository url (e.g. github or bitbucket link):',
      type: 'input'
    });
  }

  inquirer.prompt(questions).then(function (answers) {
    var packageJson = JSON.parse(fs.readFileSync('./install/package.json').toString());
    var bowerJson = JSON.parse(fs.readFileSync('./bower.json').toString());
    var readmeMd = fs.readFileSync('./install/README.md').toString();
    answers.port = parseInt(answers.port);
    ['name', 'repo', 'contributorName', 'contributorEmail'].forEach(function(k) {
      if(answers[k]) {
        answers[k] = answers[k].trim();
      }
    });
    var contributorName = answers.contributorName || '';
    var contributorEmail = answers.contributorEmail || '';
    var gitUrl = answers.repo || gitInfo[0] || '';

    packageJson.name = slugify(answers.name);
    packageJson.description = answers.description;
    packageJson.contributors.push({
      name: contributorName,
      email: contributorEmail
    });
    packageJson.repository.url = gitUrl;
    if (answers.port) {
      packageJson.config.port = answers.port;
    }

    bowerJson.name = slugify(answers.name);
    bowerJson.description = answers.description;
    bowerJson.authors.push(contributorName + ' <' + contributorEmail + '>');

    readmeMd = readmeMd.replace('{{projectName}}', answers.name)
      .replace('{{projectDescription}}', answers.description)
      .replace('{{appPort}}', answers.port);

    if(answers.tests) {
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

    if (!~process.argv.indexOf('--dry-run')) {
      if(answers.tests) {
        fs.mkdirSync('./test');
      }
      fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf8');
      fs.writeFileSync('./bower.json', JSON.stringify(bowerJson, null, 2), 'utf8');
      fs.writeFileSync('./README.md', readmeMd, 'utf8');
    } else {
      console.log(gitInfo, gitUrl);
      console.log(answers);
      console.log(packageJson);
      console.log(bowerJson);
      console.log('\n\nREADME.md\n', readmeMd);
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
