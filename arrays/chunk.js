// Overview:
// Creates an array of elements split into groups
// the length of size. If array can't be split evenly,
// the final chunk will be the remaining elements.
// Examples:
// _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
// _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

(function() {
    "use strict";

    function chunk(arr, size) {
        let mainChunk = [];
        let remainder = [];

        if (arr.length <= size) return arr;

        let i = 0;
        for (; i < size; ++i) {
            mainChunk.push(arr[i]);
        }
        for (; i < arr.length; ++i) {
            remainder.push(arr[i]);
        }
        
        return [mainChunk, remainder];
    }

    function compareArrays(arr1, arr2)
    {
        if (!arr1 || !arr2) return false;
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    function testChunk() {
        let sample1 = ['a', 'b', 'c', 'd'];
        let size1 = 2;
        let expected1 = [['a', 'b'], ['c', 'd']];
        let result1 = chunk(sample1, size1);
        if (compareArrays(result1, expected1)) {
            console.log(`${testChunk.name} failed with sample=${sample1} size=${size1} result=${result1} expected=${expected1}`);
        } else {
            console.log(`${testChunk.name} passed`);
        }
    }

    testChunk();
})();


