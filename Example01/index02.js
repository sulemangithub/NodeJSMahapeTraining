
const order = function(orderNumber){

    console.log(`Order Received...
        ${orderNumber}
        `);

    setTimeout(function(){
        deliver(orderNumber);
    },0);
};

const deliver = function(orderNumber){
    console.log("Order Delivered...."+orderNumber);
};

order(1);
order(2);
order(3);
order(4);
order(5);