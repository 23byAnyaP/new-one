function isPalindrome(word) {
    return word == word.split("").reverse().join("") ? true : false;
}

alert(isPalindrome("artem"));