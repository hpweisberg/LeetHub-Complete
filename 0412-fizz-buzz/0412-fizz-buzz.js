/**
 * @param {number} n
 * @return {string[]}
 */

/*
    starting at 1
    input: integer
    output: [strings]
    c: constraints interger will be between 1 and 10,000
    e: edgecases if given number 0, negative numbers, or greater than 10,001
    
    
    Solution:
    define array variable[ ]
        
    itterate 1 through N
        if; is the number divsable by 3 and 5{
            push: value "FizzBuzz"
        }
        else if; is the number divsable by 3{
            push: value "Fizz"
        }
        else if; is the number divsable by 5{
            push: value "Buzz"
        }
        else; {
            pushl number as string
        }
    return; [strings]
*/

var fizzBuzz = function(n) {
    var numlist = [];
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0){
            numlist.push("FizzBuzz");
        }
        else if (i % 3 === 0){
            numlist.push("Fizz");
        }
        else if (i % 5 === 0){
            numlist.push("Buzz");
        }
        else {
            numlist.push(i.toString() );
        }
    }
    return numlist;
        
};
