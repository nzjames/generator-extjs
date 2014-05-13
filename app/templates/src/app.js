Ext.application({
    name: '<%= data.appName %>',
    appFolder: 'app',

    controllers: [
        'Login'
    ],

    launch: function(){
        Ext.create('<%= data.appName %>.view.Login').show();
    }
});