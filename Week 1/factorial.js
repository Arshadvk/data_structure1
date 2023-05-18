function factorial (n){
      let result = 1
    for(let i = 2 ; i<= n; i++ ){
        
         result = result * i 

    } 
    return result

}
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

// Big-O = O(n) linear

//recursive Factorial
function recursivefactorial(n){

     if(n==0){
          return 1
     }
      return n * recursivefactorial(n-1)
}


console.log(recursivefactorial(5));
 