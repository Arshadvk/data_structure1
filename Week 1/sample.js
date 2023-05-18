let array = [6, 5 , 4 , 3 , 9 , 8 , 0 ]
let target = 10
function sum(array , target ){
    for(let i = 0 ; i < array.length -1 ; i++ ){
        for(let j = i+1 ; j < array.length ; j++){
            if (array[i]+array[j] == target) {
                return  array[i]
            }
        }
    }
}
let result = sum(array,10)
console.log(result);