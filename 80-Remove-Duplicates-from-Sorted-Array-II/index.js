/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let index = 2;
    if (nums.length < 2)
        return nums.length;
    for (let i = 2; i < nums.length; i++) {
        if (nums[index - 2] != nums[i]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
}