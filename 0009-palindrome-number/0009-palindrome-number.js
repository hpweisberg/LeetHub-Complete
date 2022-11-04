/**
 * @param {number} x
 * @return {boolean}
 */
    //input: integer
    //output: ture or false
    //c: ture must be a palindrome. i.e. 121 backwords is 121
    //e: can not be negative number

var isPalindrome = function(x) {
    let reviersedStr = ''
    let xStr = x.toString()
    
    for (let i of xStr){
        reviersedStr = i + reviersedStr
    }
    return(reviersedStr === xStr)
};