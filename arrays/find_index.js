(function() {
    "use strict";

    // Overview:
    // This method  returns the index of the first element predicate
    // returns truthy.
    // Examples:
    // var users = [
    //    { 'user': 'barney',  'active': false },
    //    { 'user': 'fred',    'active': false },
    //    { 'user': 'pebbles', 'active': true }
    // ];
    // findIndex(users, function(o) { return o.user == 'barney'; }); => 0
 
    function findIndex(arr, pred, fromIndex = 0) {
        if (fromIndex >= arr.length) {
            return -1;
        }

        for (let i = fromIndex; i < arr.length; ++i) {
            if (pred(arr[i])) {
                return i;
            } 
        }

        return -1;
    }

    function testFindIndexHelper(sample, expected) {
        const result = findIndex(sample.arr, sample.pred, sample.index);
        console.log(testFindIndex.name + 
            (result === expected ? " passed"
             : ` failed with arr=[${UserArrToString(sample.arr)}], `
               + `pred={${sample.pred.toString()}, fromIndex=${sample.index}}, `
               + `expected=${expected}, result=${result}`));
    }

    function UserArrToString(arr) {
        let result = "";

        for(let i = 0; i < this.length-1; ++i) {
            result += ("{ user: " + this[i].user + ", active: "
                + this[i].active + "}, ");
        }

        result += ("{ user: " + this[this.length-1].user
            + ", active: " + this[this.length-1].active + "}");
        return result;

    }

    function testFindIndex() {
        {
            const sample = {
                arr: [
                    { user: "barney",  active: false },
                    { user: "fred",    active: false },
                    { user: "pebbles", active: true }
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 0
            };
            const expected = 0;

            testFindIndexHelper(sample, expected);
        }
        {
            const sample = {
                arr: [
                    { user: "fred",    active: false },
                    { user: "pebbles", active: true }
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 0
            };
            const expected = -1;

            testFindIndexHelper(sample, expected);
        }
        {
            const sample = {
                arr: [
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 0
            };
            const expected = -1;

            testFindIndexHelper(sample, expected);
        }
        {
            const sample = {
                arr: [
                    { user: "barney",  active: false },
                    { user: "fred",    active: false },
                    { user: "pebbles", active: true }
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 1
            };
            const expected = -1;

            testFindIndexHelper(sample, expected);
        }
        {
            const sample = {
                arr: [
                    { user: "barney",  active: false },
                    { user: "fred",    active: false },
                    { user: "pebbles", active: true }
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 2
            };
            const expected = -1;

            testFindIndexHelper(sample, expected);
        }
        {
            const sample = {
                arr: [
                    { user: "barney",  active: false },
                    { user: "fred",    active: false },
                    { user: "pebbles", active: true }
                ],
                pred: function(item) {
                    return item.user === "barney";
                },
                index: 20
            };
            const expected = -1;

            testFindIndexHelper(sample, expected);
        }
    }

    testFindIndex();

})();