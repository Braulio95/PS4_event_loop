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

const seekAndDestroy = (arr,...numbs)=>{ //function recieves the first array parameter and then can recieve x quantity of numbers that will be saved in an array
    for(numb in numbs){ //this for cycle iterates through the array of numbers given in the second parameter
        if(arr.includes(numbs[numb])){//this conditional verifies if the number is present in the array if true, then executes the next for cicle
            for(value in arr){
                if(arr[value]==numbs[numb]){//this second for iterates through the first array and verifies is the current value equals the value of the second array, if true then that value is eliminated of the first array
                    arr.splice(value,1);
                }
            }
        }
    }
    return arr;
}

console.log(seekAndDestroy([1,2,3,1,2,3],2,3));
console.log(seekAndDestroy([1, 2, 3, 5, 1, 2, 3] ,2,3));