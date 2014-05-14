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
            id: 'login-field',
            fieldLabel: 'login'
        },
        {
            id: 'password-field',
            inputType: 'password',
            fieldLabel: 'password'
        }
    ],
    bbar: [
        '->',
        {
            id: 'login-cancel-btn',
            text: 'cancel'
        },
        {
            id: 'login-btn',
            text: 'login'
        }
    ]
});