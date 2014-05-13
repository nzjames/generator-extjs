Ext.define('<%= data.appName %>.controller.Login', {
    extend: 'Ext.app.Controller',

    init: function(){
        this.control({
            'button#login-loginButton': {
                click: this.onLoginButtonClick
            },
            'button#login-cancelButton': {
                click: this.onCancelButtonClick
            }
        });
    },

    onLoginButtonClick: function(){
        console.log('login');
    },

    onCancelButtonClick: function(){
        console.log('cancel');
    }
});