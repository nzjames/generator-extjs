Ext.application({
    name: '<%= data.appName %>',

    //<% if (!options.extJS5) { %>
    controllers: [
        'Login'
    ],
    //<% } %>

    launch: function(){
        Ext.create('<%= data.appName %>.view.Login').show();
    }
});