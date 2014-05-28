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

    welcome: function(){
        // Have Yeoman greet the user.
        this.log(yosay('Welcome to the marvelous ExtJS generator!'));
    },

    askForApplicationName: function () {
        var done = this.async();
        this.data || (this.data = {});

        this.prompt([{
            type: 'input',
            name: 'appName',
            message: 'How would you like to call your project?',
            default: 'MyApp'
        }], function (props) {
            this.data.appName = props.appName;
            done();
        }.bind(this));
    },

    askForExtJsVersion: function(){
        var done = this.async();
        this.options || (this.options = {});

        this.prompt([{
            type: 'confirm',
            name: 'extJS5',
            message: 'Would you like to use ExtJS 5?',
            default: true
        }], function(props){
            this.options.extJS5 = props.extJS5;
            done();
        }.bind(this));
    },

    app: function () {
        this.template('_package.json', 'package.json');
        this.copy('Gruntfile.js', 'Gruntfile.js');
    },

    projectFiles: function(){
        this.template('src/index.html', 'src/index.html');
        this.template('src/app.js', 'src/app.js');
        this.template('src/locale/en.js', 'src/locale/en.js');
        this.template('src/tests/login/login.js', 'src/tests/login/login.js');
        this.template('src/siesta/index.html', 'src/siesta/index.html');
        this.template('src/siesta/index.js', 'src/siesta/index.js');

        if (this.options.extJS5) {
            this.template('src/app/view/LoginModel.js', 'src/app/view/LoginModel.js');
            this.template('src/app/view/LoginController.js', 'src/app/view/LoginController.js');
            this.template('src/app/view/LoginMVVM.js', 'src/app/view/Login.js');
        } else {
            this.template('src/app/controller/Login.js', 'src/app/controller/Login.js');
            this.template('src/app/view/LoginMVC.js', 'src/app/view/Login.js');
        }
    }
});

module.exports = ExtjsGenerator;
