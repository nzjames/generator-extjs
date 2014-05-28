Ext.define('<%= data.appName %>.controller.Login', {
    extend: 'Ext.app.Controller',

    refs: [
        {ref: 'loginWindow', selector: 'login'}
    ],

    init: function(){
        this.control({
            'login button#login': {
                click: this.onLoginBtnClick
            },
            'login button#cancel': {
                click: this.onCancelBtnClick
            }
        });
    },

    onLoginBtnClick: function(){
        Ext.Msg.alert('Login', 'Login success!');
    },

    onCancelBtnClick: function(){
        var loginWindow = this.getLoginWindow(),
            form = loginWindow.down('form').getForm();

        form.reset();
    }
});