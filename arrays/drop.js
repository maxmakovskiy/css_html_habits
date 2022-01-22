// Overview:
// Creates a slice of array
// with n elements dropped from the beginning.
// Examples:
// drop([1, 2, 3]); => [2, 3]
// drop([1, 2, 3], 2); => [3]
// drop([1, 2, 3], 5); => []
// drop([1, 2, 3], 0); => [1, 2, 3]

(function(){
    "use strict";

    function drop(arr, n=1) {
        if (n === 0) return arr;
        if (n >= arr.length) return [];

        let result = [];
        for (let i = n; i < arr.length; ++i) {
            result.push(arr[i]);
        }

        return result;
    }

    function compareArrays(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    function test(func, sample, expected) {
        const result = func(sample.arr, sample.n);
        console.log(testDrop.name
             + (compareArrays(result, expected)
                ? " passed"
                : " failed with sample=[" + sample.arr + "], n=" + sample.n
                + ", result=[" + result + "], expected=[" + expected +"]")
        );
    }

    function testDrop() {
        test(drop, { arr: [1, 2, 3], n: 1}, [2, 3]);
        test(drop, { arr: [1, 2, 3], n: 2}, [3]);
        test(drop, { arr: [1, 2, 3], n: 5}, []);
        test(drop, { arr: [1, 2, 3], n: 0}, [1, 2, 3]);
    }

    testDrop();
})();