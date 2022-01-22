
(function(){
    "use strict";

    // Overview:
    // Creates a slice of array
    // with n elements dropped from the beginning.
    // Examples:
    // drop([1, 2, 3]); => [2, 3]
    // drop([1, 2, 3], 2); => [3]
    // drop([1, 2, 3], 5); => []
    // drop([1, 2, 3], 0); => [1, 2, 3]
    function drop(arr, n=1) {
        if (n === 0) return arr;
        if (n >= arr.length) return [];

        let result = [];
        for (let i = n; i < arr.length; ++i) {
            result.push(arr[i]);
        }

        return result;
    }

    // Overview:
    // Creates a slice of array excluding elements dropped
    // from the beginning.
    // Elements are dropped until predicate returns falsey.
    function dropWhile(arr, pred) {
        let result = [];

        let isDroped = false;
        for (let item of arr) {
            if (!isDroped) {
                isDroped = pred(item);
            } else {
                result.push(item);
            }
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

    function testDropHelper(sample, expected) {
        const result = drop(sample.arr, sample.n);
        console.log(testDrop.name
             + (compareArrays(result, expected)
                ? " passed"
                : " failed with sample=[" + sample.arr + "], n=" + sample.n
                + ", result=[" + result + "], expected=[" + expected +"]")
        );
    }

    function testDrop() {
        testDropHelper({ arr: [1, 2, 3], n: 1}, [2, 3]);
        testDropHelper({ arr: [1, 2, 3], n: 2}, [3]);
        testDropHelper({ arr: [1, 2, 3], n: 5}, []);
        testDropHelper({ arr: [1, 2, 3], n: 0}, [1, 2, 3]);
    }

    function testDropWhileHelper(sample, expected) {
        const result = dropWhile(sample.arr, sample.pred);
        console.log(testDropWhile.name
             + (compareArrays(result, expected)
                ? " passed"
                : " failed with sample=[" + sample.arr + "], pred=" + sample.pred.name
                + ", result=[" + result + "], expected=[" + expected +"]")
        );
    }

    function testDropWhile() {
        const sample = { arr: [1, 2, 3, 4], pred: function(item) { return item % 2 === 0; } };
        testDropWhileHelper(sample, [3, 4]);
    }

    testDrop();
    testDropWhile();
})();