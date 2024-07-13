// check if all the numbers in our array are multiple of 10 or not 

    const numbers = [10, 20, 30, 40, 50, 60];
    const isMultipleOfTen = numbers.every(num => num % 10 === 0);

    console.log(isMultipleOfTen); // true or false

//create a function that find min number in array

    const findMin = (arr) => Math.min(...arr);
    console.log(findMin([1, 2, 3, 4, 5])); // 1

    //or
    let min = numbers.reduce((min, num) =>{
        if(num < min){
            return num;
        }
        else{
        return min;
    }
    }
    )
    console.log(min); // 1

    // or
    function getMin(nums){
        let min=nums.reduce((min, num) =>{
            if(num < min){
                return num;
            }
            else{
            return min;
        }
    });
    return min;
  
}
let nums=[12,3,23,,44,22,6,0];
    console.log(getMin(nums)); // 0


//find max number in array
    const findMax = (arr) => Math.max(...arr);
    console.log(findMax([1, 2, 3, 4, 5])); // 5
    
//calculate sum of all numbers in array
    const sum = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
    console.log(sum([1, 2, 3, 4, 5])); // 15
    
//find average of all numbers in array
    const average = (arr) => sum(arr) / arr.length;
    console.log(average([1, 2, 3, 4, 5])); // 3