Ext.define('<%= data.appName %>.view.Login', {
    extend: 'Ext.window.Window',
    requires: [
        'MyApp.view.LoginModel',
        'MyApp.view.LoginController'
    ],
    viewModel: {type: 'login'},
    controller: 'login',
    alias: 'widget.login',
    title: 'Login',
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            defaults: {
                xtype: 'textfield'
            },
            items: [
                {
                    itemId: 'login',
                    fieldLabel: 'login',
                    bind: {
                        value: '{login}'
                    }
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: 'password',
                    bind: {
                        value: '{password}'
                    }
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            itemId: 'cancel',
            text: 'cancel',
            handler: 'onCancelBtnClick'
        },
        {
            itemId: 'login',
            text: 'login',
            handler: 'onLoginBtnClick'
        }
    ]
});