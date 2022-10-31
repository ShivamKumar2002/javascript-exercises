const palindromes = function (s) {
    s = s.toLowerCase();
    s = s.replaceAll(/[.,\s!]/ig, "");
    for (let i = 0; i < Math.floor(s.length / 2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
