/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}

    
    input: array of nums, target (int)
    output: indices of 2 values from array that = target (int)
    constraints: at least 2 nums in the array
                 can't repeate nums
    edgecase: if 2 nums, then assume they = target

*/


var twoSum = function(nums, target) { // declaire varable "twoSum"
  
    for (var i = 0; i < nums.length; i++){ // counting the number of intergers in the array
    
        for (var j = i + 1; j < nums.length; j++){ // next interger in array counting up
            var result = target === nums[i] + nums[j] // does the target number equal i & j
            
            if (result){ // if the 2 array's = target
                return([i,j]) // return array postions
            }
        
        }
    
    }
    
    
    
};


// console.log(twoSum(2, 7, 11, 15))