function hello(n){
    if(n>=0){
        console.log('hello ' +n);
        hello(n-1)
    }
}
hello(5)