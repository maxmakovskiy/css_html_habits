(function() {
    "use strict";

    // Overview:
    // Recursively flattens array.
    // Example: 
    // flattenDeep([1, [2, [3, [4]], 5]]); => [1, 2, 3, 4, 5]
    function flattenDeep(arr) {
        let result = [];

        for (let item of arr) {
            if (Array.isArray(item)) {
                flattenDeep(item).map(x => result.push(x));
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

    function testFlattenDeepHelper(sample, expected) {
        const result = flattenDeep(sample);
        console.log(testFlattenDeep.name + 
            (compareArrays(result, expected) ? " passed"
             : ` failed sample=${sample.toString()} expected=${expected.toString()}`));
    }

    function testFlattenDeep() {
        testFlattenDeepHelper([1, [2, [3, [4]], 5]], [1, 2, 3, 4, 5]);
        testFlattenDeepHelper([1, [2, [3, [4]]], [2, [3, [4]]]],
            [1, 2, 3, 4, 2, 3, 4]);
        testFlattenDeepHelper([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
    }

    testFlattenDeep();
})();