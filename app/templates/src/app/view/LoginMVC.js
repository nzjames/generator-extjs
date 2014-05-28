Ext.define('<%= data.appName %>.view.Login', {
    extend: 'Ext.window.Window',
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
                    fieldLabel: <%= data.appName %>.locale.LOGIN
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: <%= data.appName %>.locale.PASSWORD
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            itemId: 'cancel',
            text: <%= data.appName %>.locale.CANCEL
        },
        {
            itemId: 'login',
            text: <%= data.appName %>.locale.LOGIN
        }
    ]
});