
function order(orderNumber){
    console.log("Order received....."+orderNumber);
    deliver(orderNumber);    
}

function deliver(orderNumber)
{
    console.log("Order Delivered...."+orderNumber);
}

order(1);
order(2);
order(3);
order(4);
order(5);