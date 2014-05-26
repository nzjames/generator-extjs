Ext.define('<%= data.appName %>.controller.Login', {
    extend: 'Ext.app.Controller',

    init: function(){
        this.control({
            'login button#login': {
                click: this.onLoginBtnClick
            },
            'login button#cancel': {
                click: this.onLoginCancelBtnClick
            }
        });
    },

    onLoginBtnClick: function(){
        console.log('login');
    },

    onLoginCancelBtnClick: function(){
        console.log('cancel');
    }
});