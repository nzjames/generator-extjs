StartTest(function(t){
    t.chain(function(next){
        t.cqExists('login', 'login window exists.');
        next();
    },{
        action: 'type',
        text: 'some text',
        target: '>>login field#login'
    },{
        action: 'type',
        text: 'some text',
        target: '>>login field#password'
    },function(next){
        t.fieldHasValue('login field#login', 'some text', 'login field has right value');
        t.fieldHasValue('login field#password', 'some text', 'password field has right value');
        next();
    },{
        action: 'click',
        target: '>>login button#cancel'
    },function(next){
        t.isFieldEmpty('login field#login', 'login field is cleared');
        t.isFieldEmpty('login field#password', 'password field is cleared');
        next();
    },{
        action: 'type',
        text: 'login',
        target: '>>login field#login'
    },{
        action: 'type',
        text: 'secret',
        target: '>>login field#password'
    },{
        action: 'click',
        target: '>>login button#login'
    },function(next){
        t.messageBoxIsVisible('message box is appeared.');
        next();
    },{
        action: 'click',
        target: '>>messagebox button'
    });
});