let arr = [1,4,3];
console.log(sum(arr)); 
function sum(arr){
    let count = 0 ;
    for(let i = 1 ; i<arr.length ; i++ ){
        if (i != arr.length -1 ) {

            if (arr[i]< arr[i+1] && arr[i-1] <arr[i]) {
            
            }else if(arr[i]< arr[i+1]){
                count++;
        
            }else if(arr[i-1] <arr[i]){
                count++;
        
            }
        }else{
         if(arr[i-1] > arr[i]){
                count++;
        
            }
            console.log(count);

        }
        
        console.log(count);
        if (count >= 2) {
            return false
        }
    }
    return true
}
