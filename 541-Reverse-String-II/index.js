/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    if (s.length < 1) {
        return s;
    }
    let i = 0;
    while (i < s.length) {
        let j = Math.min(i + k - 1, s.length - 1);
        s = swap(s, i, j);
        i += k * 2;
    }
    // console.log('s', s);
    return s;
};

function swap(s, i, j) {
    let arr = s.split("");
    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    // console.log(s)
    return arr.join("");
}