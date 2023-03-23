/*Problem 2 
Seek & Destroy 

Define a function called destroyer that will receive as its first parameter an array with numbers, then it can receive 1 or more parameters that you need to search in the array and then delete it after you finish processing return the resulting array. 

Example 1 
Input: 
[1, 2, 3, 1, 2, 3] 

2 

3 

Expected output: 
[1,1] 

Example 2 
Input: 
[1, 2, 3, 5, 1, 2, 3] 

2 

3 

Expected output: 
[1,5,1] */

const seekAndDestroy = (arr,...numbs)=>{
    for(numb in numbs){
        if(arr.includes(numbs[numb])){
            for(value in arr){
                if(arr[value]==numbs[numb]){
                    arr.splice(value,1);
                }
            }
        }
    }
    return arr;
}

console.log(seekAndDestroy([1,2,3,1,2,3],2,3));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3] ,2,3));