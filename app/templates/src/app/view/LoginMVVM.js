Ext.define('<%= data.appName %>.view.Login', {
    extend: 'Ext.window.Window',
    requires: [
        '<%= data.appName %>.view.LoginModel',
        '<%= data.appName %>.view.LoginController'
    ],
    viewModel: {type: 'login'},
    controller: 'login',
    alias: 'widget.login',
    title: <%= data.appName %>.locale.LOGIN,
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
                    fieldLabel: <%= data.appName %>.locale.LOGIN,
                    bind: {
                        value: '{login}'
                    }
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: <%= data.appName %>.locale.PASSWORD,
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
            text: <%= data.appName %>.locale.CANCEL,
            handler: 'onCancelBtnClick'
        },
        {
            itemId: 'login',
            text: <%= data.appName %>.locale.LOGIN,
            handler: 'onLoginBtnClick'
        }
    ]
});