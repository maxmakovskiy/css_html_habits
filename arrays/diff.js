// Overview:
// Creates an array of array values not included in the other
// given array.
// The order and references of result values are determined
// by the first array.
// Examples:
// difference([2, 1], [2, 3]); => [1]

(function(){
    "use strict";

    function difference(lhs, rhs) {
        let result = [];

        lhs.forEach(element => {
            if (!rhs.includes(element)) {
                result.push(element);
            }

        });

        return result;
    }

    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    function testDiff() {
        const sample1 = [2, 1];
        const sample2 = [2, 3];
        const result = difference(sample1, sample2);
        const expected = [1];

        const res = compareArrays(result, expected);
        console.log(testDiff.name + (res ? " passed" : " failed"));
    }

    testDiff();
})()