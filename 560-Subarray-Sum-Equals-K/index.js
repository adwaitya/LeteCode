/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let cnt = 0;
    let n = nums.length;
    let sum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        let target = sum - k;

        if (map.has(target)) {
            cnt += map.get(target);
        }
        if (!map.has(sum)) {
            map.set(sum, 0);
        }
        map.set(sum, map.get(sum) + 1);

    }

    return cnt;
};