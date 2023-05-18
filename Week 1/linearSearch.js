function linear(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(linear(arr , 10 ));
console.log(linear(arr , 5 ));
console.log(linear(arr , 1 ));

//big -O = O(n)