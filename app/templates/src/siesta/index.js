var Harness = Siesta.Harness.Browser.ExtJS,
    path = function(path){
        return '../tests/' + path + '.js';
    };

Harness.configure({
    hostPageUrl: '../index.html'
});

Harness.start({
    group: 'Login',
    items: [
        path('login/login')
    ]
});