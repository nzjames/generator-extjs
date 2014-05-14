'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');


var ExtjsGenerator = yeoman.generators.Base.extend({
    init: function () {
        this.pkg = require('../package.json');

        this.on('end', function () {
            if (!this.options['skip-install']) {
                this.installDependencies();
            }
        });
    },

    askFor: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous ExtJS generator!'));

        var prompts = [
            {
                type: 'input',
                name: 'appName',
                message: 'How would you like to call your project?',
                default: 'MyApp'
            }
        ];

        this.prompt(prompts, function (props) {
            this.data = props;
            done();
        }.bind(this));
    },

    app: function () {
        this.template('_package.json', 'package.json');
        this.template('_bower.json', 'bower.json');
        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');
        this.copy('gitignore', '.gitignore');
        this.copy('Gruntfile.js', 'Gruntfile.js');
    },

    projectFiles: function(){
        this.template('src/index.html', 'src/index.html');
        this.template('src/app.js', 'src/app.js');
        this.template('src/app/view/Login.js', 'src/app/view/Login.js');
        this.template('src/app/controller/Login.js', 'src/app/controller/Login.js');
    }
});

module.exports = ExtjsGenerator;
