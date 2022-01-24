(function() {
    "use strict";

    // Overview:
    // Gets the first element of array.
    // Examples:
    // head([1, 2, 3]); => 1
    // head([]); => undefined
    function head(arr) {
        return arr.at(0);
    }

    function testHeadHelper(sample, expected) {
        const result = head(sample);

        console.log(testHead.name + 
            (result === expected
             ? " passed"
             : ` failed => result=${result}, expected=${expected}`
            )
        );
    }

    function testHead() {
        testHeadHelper([1, 2, 3], 1);
        testHeadHelper([], undefined);
    }

    testHead();

})();