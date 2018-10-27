class Arithmetic
{
    add(n1,n2,callback)
    {
        setTimeout(function(){
            let result = n1 + n2;
            callback(result);
        },1000);
    }
}

module.exports = Arithmetic;