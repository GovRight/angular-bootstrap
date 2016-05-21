var inquirer = require('inquirer');
var exec = require('child_process').exec;
var fs = require('fs');

console.log('\x1b[32mWelcome to the GovRight project wizard!\x1b[0m\n');
console.log('Please enter inquired data:');

exec('git config user.name && git config user.email && git config --get remote.origin.url', function(error, stdout, stderr) {
  var gitInfo = stdout.trim().split('\n');
  var questions = [
    {
      name: 'name',
      message: 'Project name (e.g., My awesome angular project!):',
      type: 'input'
    },
    {
      name: 'description',
      message: 'Project description (a sentence or two, 140 characters max):',
      type: 'input',
      validate: function(str) {
        return str.length <= 140 || 'The "description" is too long, the limit is 140 characters';
      }
    },
    {
      name: 'port',
      message: 'Backend application port (a number from 3000 to 9999):',
      type: 'input'
    }
  ];

  inquirer.prompt(questions).then(function (answers) {
    var packageJson =  JSON.parse(fs.readFileSync('./sample/package.json').toString());
    var bowerJson = JSON.parse(fs.readFileSync('./bower.json').toString());
    var readmeMd =  fs.readFileSync('./sample/README.md').toString();
    answers.name = answers.name.trim();
    answers.port = parseInt(answers.port);

    packageJson.name = slugify(answers.name);
    packageJson.description = answers.description;
    packageJson.contributors.push({
     name: gitInfo[0],
     email: gitInfo[1]
    });
    packageJson.repository.url = gitInfo[2];
    if(answers.port) {
      packageJson.config.port = answers.port;
    }

    bowerJson.name = slugify(answers.name);
    bowerJson.description = answers.description;
    bowerJson.authors.push(gitInfo[0] + ' <' + gitInfo[1] + '>');

    readmeMd = readmeMd.replace('{{projectName}}', answers.name)
       .replace('{{projectDescription}}', answers.description)
       .replace('{{appPort}}', answers.port);

    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2), 'utf8');
    fs.writeFileSync('./bower.json', JSON.stringify(bowerJson, null, 2), 'utf8');
    fs.writeFileSync('./README.md', readmeMd, 'utf8');

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
