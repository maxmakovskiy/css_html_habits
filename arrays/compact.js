// Overview:
// Creates an array with all falsey values removed.
// The values false, null, 0, "", undefined, and NaN are falsey.
// Examples:
// compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
(function(){
    "use strict";

    function compact(arr) {
        if (arr.length === 0) return arr;

        let result = [];
        for (let i = 0; i < arr.length; ++i) {
            if (!arr[i]) continue;
            result.push(arr[i]);
        }

        return result;
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

    function testCompact() {
        const sample = [0, 1, false, 2, '', 3];
        const expected = [1, 2, 3];
        const result = compact(sample);

        const resultFlag = compareArrays(result, expected);
        console.log(testCompact.name + (resultFlag ? " passed" : " failed"));
    }

    testCompact();
})();