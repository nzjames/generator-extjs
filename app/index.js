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
                name: 'title',
                message: 'How would you like to call your project?',
                default: 'App'
            }
        ];

        this.prompt(prompts, function (props) {
            this.data = props;

            done();
        }.bind(this));
    },

    app: function () {
        this.mkdir('app');
        this.copy('_package.json', 'package.json');
        this.copy('_bower.json', 'bower.json');

        this.copy('editorconfig', '.editorconfig');
        this.copy('jshintrc', '.jshintrc');

        this.template('index.html', 'index.html');
    }
});

module.exports = ExtjsGenerator;
