/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let canConvert = function (s, l, r, skipped) {
        for (; l < r; l++, r--) {
            if (s[l] !== s[r]) {
                if (skipped) return false;
                if (!skipped) return canConvert(s, l + 1, r, true) || canConvert(s, l, r - 1, true);
            }
        }
        return true
    }

    return canConvert(s, 0, s.length - 1, false);
};