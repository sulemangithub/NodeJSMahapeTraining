
const add = function(n1,n2,callback){

    setTimeout(function(){
        let result = n1 + n2;
        callback(result);
    },1000);

}

const substract = function(n1,n2,callback){

    setTimeout(function(){
        let result = n1 - n2;
        callback(result);
    },1000);

}

module.exports.addition = add;

module.exports.substraction = substract;


