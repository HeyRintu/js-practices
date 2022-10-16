// callback function --> when a function calls a function 

function first(fun_first,callback) {
    console.log('im callback function');
    callback(fun_first);
};

function second(fun_first) {
    console.log(`heye there, ${fun_first}`);
}

first('rintu',second);