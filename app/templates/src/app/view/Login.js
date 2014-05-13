Ext.define('<%= data.appName %>.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',
    title: 'Login',
    bodyPadding: 10,
    defaults: {
        xtype: 'textfield'
    },
    items: [
        {
            id: 'login-loginField',
            fieldLabel: 'login'
        },
        {
            id: 'login-passwordField',
            inputType: 'password',
            fieldLabel: 'password'
        }
    ],
    bbar: [
        '->',
        {
            id: 'login-cancelButton',
            text: 'cancel'
        },
        {
            id: 'login-loginButton',
            text: 'login'
        }
    ]
});