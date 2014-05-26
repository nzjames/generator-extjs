StartTest(function(t){
    t.chain({
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
    });
});