// Overview:
// Fills elements of array with value
// from start up to, but not including, end.
// Examples:
// var array = [1, 2, 3];
// fill(array, 'a'); => ['a', 'a', 'a']
// fill(Array(3), 2); => [2, 2, 2]
// fill([4, 6, 8, 10], '*', 1, 3); => [4, '*', '*', 10]

(function(){
    "use strict";

    function fill(arr, value, begin = 0, end = arr.length) {
        for (let i = begin; i < end; i++) {
            arr[i] = value;
        }
    }

    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    function testFillHelper(target, value, expected, begin=0, end=target.length) {
        fill(target, value, begin, end);

        console.log(testFill.name 
            + (compareArrays(target, expected)
               ? " passed"
               : " failed")
        );
    }

    function testFill() {
        testFillHelper([1, 2, 3], 44, [44, 44, 44]);
        testFillHelper(Array(3), 'a', ['a', 'a', 'a']);
        testFillHelper([4, 6, 8, 10], '*', [4, '*', '*', 10], 1, 3);
    }

    testFill();
})();