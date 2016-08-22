module.exports = function(Cupones) {
    Cupones.status = function(cb){
        var currendDate = new Date();
        var currendmonth = currendDate.getMonth;
        var currendDay = currendDate.getDate();
        var ExpirationDay = 30;
        console.log('Dia actual es ' + currendDay);
        if (currendDay < ExpirationDay){
            response = 'cupon valido'
        } else{
            response ='cupon invalido'
        }
        
        cb(null,response);    
        
    };
    Cupones.remoteMethod(
        'status',
        {
      http: {path: '/status', verb: 'get'},
      returns: {arg: 'status', type: 'string'}
        }
    );
    
};
