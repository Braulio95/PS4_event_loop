/*Problem 3 


Functions are first class 

Define a function that given an array “arr”, loop and deletes each element starting from index 0 until the function passed as the second parameters returns true when we passed element to it. 

Then returns the array with the remaining elements once the condition has been met otherwise returns an empty array [] 

Example 1 

Input: 

[1,2,3,4] 

n => n >= 3 

Expected output: 

[3,4] 

Example 2 

Input: 

[1,2,3,7,4] 

n => n > 3; 

Expected output: 

[7,4] 

Example 3 

Input: 

[0,1,0,1] 

n => n === 1; 

Expected output: 

[1,0,1] */


const removeElements = (arr, secondFunction)=>{  
    const longitude = arr.length; //We create this variable to make the array lenght a constant value
    for(let i=0; i < longitude; i++){ //We use this for to go through the array
        arr.shift(); //This sentence deletes the first value of the array
        if(secondFunction(arr[0])){ //then we check if the first value passed throught the second function equals true, if it does then we stop de cycle and return de current array, if not the for will iterate until the array is empty
            return arr;
            
        }
        



    }
    return arr;
}

console.log(removeElements([1,2,3,4], (n) => n >= 3));
console.log(removeElements([1,2,3,7,4],(n) => n > 3));
console.log(removeElements([0,1,0,1] , (n) => n === 1));
console.log(removeElements([0,1,0,1] , (n) => n === 1000));