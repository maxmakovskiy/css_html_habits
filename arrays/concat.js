// Overview:
// Creates a new array concatenating array
// with any additional arrays and/or values.
// Examples:
// var array = [1];
// var other = _.concat(array, 2, [3], [[4]]);
// console.log(other); => [1, 2, 3, [4]]
// console.log(array); => [1]

(function(){
    function concat(arr, ...args) {
        let result = arr;
        args.forEach(function(item){
            if (Array.isArray(item)) {
                item.forEach(internal => result.push(internal));
            } else {
                result.push(item);
            }
        });

        return result;
    }

    function compareArrays(arr1, arr2)
    {
        if (arr1.length !== arr2.length) return false;
        
        for (let i = 0; i < arr1.length; ++i) {
            if (arr1[i] !== arr2[i]) return false;
        }

        return true;
    }

    function testConcat() {
        let errorCounter = 0;

        const sample1 = [1];
        const expected1 = [1, 2, 3, 4, 5, 6];
        const result1 = concat(sample1, 2, 3, 4, 5, 6);

        if (!compareArrays(result1, expected1)) {
            console.log(`${testConcat.name} failed, expected=[${expected1}] result=[${result1}]`);
            errorCounter++;
        }

        const sample2 = [1];
        const expected2 = [1, 2, 3, 4];
        const result2 = concat(sample2, 2, [3], [4]);

        if (!compareArrays(result2, expected2)) {
            console.log(`${testConcat.name} failed, expected=[${expected2}] result=[${result2}]`);
            errorCounter++;
        }

        if (errorCounter === 0) {
            console.log(`${testConcat.name} passed`);
        }
    }

    testConcat();
})()