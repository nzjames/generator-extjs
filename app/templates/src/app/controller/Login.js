Ext.define('<%= data.appName %>.controller.Login', {
    extend: 'Ext.app.Controller',

    init: function(){
        this.control({
            'button#login-btn': {
                click: this.onLoginBtnClick
            },
            'button#login-cancel-btn': {
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