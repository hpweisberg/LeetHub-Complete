/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// inputs: assorted array AND target number
// outputs: Array position
// constratnts: Array is pre-sorted for us
// edgecase: n/a

var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === target){
            return i;
        }
        if (nums[i] > target) {
            return i;
        }
    }
    return nums.length;
}