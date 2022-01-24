(function() {
    "use strict";

    // Overview:
    // This method returns an object composed from key-value pairs
    // Example:
    // fromPairs([['a', 1], ['b', 2]]); => { 'a': 1, 'b': 2 }
    function fromPairs(pairs) {
        const obj = new Object();

        for (let pair of pairs) {
            obj[pair[0]] = pair[1];
        }

        return obj;
    }

    function equals(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }

    function testFromPairsHelper(sample, expected) {
        const result = fromPairs(sample);
        console.log(testFromPairs.name + 
            (equals(result, expected) ? " passed"
             : ` failed, result={${result.toString()}}, expected={${expected.toString()}}`));
    }

    function testFromPairs() {
        testFromPairsHelper([['a', 1], ['b', 2]], { 'a': 1, 'b': 2 });
        testFromPairsHelper([], {});
        testFromPairsHelper([[]], {});
    }

    testFromPairs();
})();