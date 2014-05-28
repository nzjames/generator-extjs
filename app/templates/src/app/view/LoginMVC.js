Ext.define('<%= data.appName %>.view.Login', {
    extend: 'Ext.window.Window',
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
                    fieldLabel: 'login'
                },
                {
                    itemId: 'password',
                    inputType: 'password',
                    fieldLabel: 'password'
                }
            ]
        }
    ],
    bbar: [
        '->',
        {
            itemId: 'cancel',
            text: 'cancel'
        },
        {
            itemId: 'login',
            text: 'login'
        }
    ]
});