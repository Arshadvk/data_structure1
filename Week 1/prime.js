function isprime(n){
    if(n < 2){
        return false
    }else{
        for(let i = 2 ; i <=n/2; i++ ){
            if(n%i == 0){
                return false
            }
        }
        return true
    }
}

console.log(isprime(2));
console.log(isprime(4));
console.log(isprime(1));

// Big - O = O(n) 
// Big - O = O(sqrt(n))
let i = 5 
do{
    console.log('hello'+i);
}
while(i>0){
    i--
    
}