// calculator functions
function add(a,b){
    let sum=a+b;
    return sum;
}

function sub(a,b){
    let minus=a-b;
    return minus;
}

function mul(a,b){
    let multi=a*b;
    return multi;
}

function div(a,b){
    let divi=a/b;
    divi=divi.toFixed(2);
    return divi;
}

export {add,sub,mul,div};