function binarysearch(array  , target) {
let m = array.length/2    
if(array[m] > target){
    for(let i = 0 ; i<m ; i++){
        if (array[i] === target) {
            return i
        }
    }
}else{
    for(let i = m ; i<array.length ; i++){
        if (array[i] === target) {
            return i
        }
    }  
}
return -1
}
const arr = [1,2,3,4,5,6,7,8]

console.log(binarysearch(arr , 1));
console.log(binarysearch(arr , 2));
console.log(binarysearch(arr , 3));
console.log(binarysearch(arr , 4));
console.log(binarysearch(arr , 5));
console.log(binarysearch(arr , 6));
console.log(binarysearch(arr , 7));
console.log(binarysearch(arr , 8));
//O(logn)