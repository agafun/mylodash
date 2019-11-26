const assert = require('chai').assert;
const mylodash = require('../mylodash');


describe('mylodash', function() {
    
    
    describe('clamp', function() {
        it('clamp should return -5 with given parameters: -10, -5, 5', function(){
            let result = mylodash.clamp(-10, -5, 5);
            assert.equal(result, -5);
        });

        it('clamp should return 0 with given parameters: 0, -5, 5', function(){
            let result = mylodash.clamp(0, -5, 5);
            assert.equal(result, 0);
        });

        it('clamp should return 5 with given parameters: 10, -5, 5', function(){
            let result = mylodash.clamp(10, -5, 5);
            assert.equal(result, 5);
        });

        it('clamp should return -5 with given parameters: 10, 5, -5 (inverted range)', function(){
            let result = mylodash.clamp(10, 5, -5);
            assert.equal(result, -5);
        });

        it('clamp should return 1.52 with given parameters: 1.52, -2.72, 3.14 (float numbers)', function(){
            let result = mylodash.clamp(1.52, -2.72, 3.14);
            assert.equal(result, 1.52);
        });
    });
    
    describe('inRange', function(){
        it('inRange should return "false" with given parameters: -6, -5, 5', function(){
            let result = mylodash.inRange(-6, -5, 5);
            assert.isFalse(result);
        });

        it('inRange should return "true" with given parameters: -5, -5, 5', function(){
            let result = mylodash.inRange(-5, -5, 5);
            assert.isTrue(result);
        });

        it('inRange should return "true" with given parameters: 4, -5, 5', function(){
            let result = mylodash.inRange(4, -5, 5);
            assert.isTrue(result);
        });

        it('inRange should return "false" with given parameters: 5, -5, 5', function(){
            let result = mylodash.inRange(5, -5, 5);
            assert.isFalse(result);
        });

        it('inRange should return "false" with given parameters: 3, 5, -5 (inverted range)', function(){
            let result = mylodash.inRange(3, 5, -5);
            assert.isTrue(result);
        });

        it('inRange should return "true" with given parameters: 1.52, -2,.72, 3.14 (float numbers)', function(){
            let result = mylodash.inRange(1.52, -2.72, 3.14);
            assert.isTrue(result);
        });
    });

    describe('words', function(){
        it('words should return an array', function(){
            let result = mylodash.words('Ala ma kota');
            assert.isArray(result)
        });

        it('words should return an array of strings', function(){
            let result = mylodash.words('Ala ma kota');
            for (let i=0; i<result.length; i++) {
                assert.typeOf(result[i], 'string');
            };
        });

        it('words should return an array of length 3 with given parameter: "Ala ma kota"', function(){
            let result = mylodash.words('Ala ma kota');
            assert.equal(result.length, 3);
        });

        it('words should return a string "ma" as a second element in array with given parameter: "Ala ma kota"', function(){
            let result = mylodash.words('Ala ma kota');
            assert.equal(result[1], 'ma');
        });

        it('words should return strings "kota," and "Alę." as elements in array (special characters do not split string)', function(){
            let result = mylodash.words('Ala ma kota, a kot ma Alę.');
            assert.equal(result[2], 'kota,');
            assert.equal(result[6], 'Alę.');
        });

        it('words should return an empty string with given parameter: empty string', function(){
            let result = mylodash.words('');
            assert.equal(result, '');
        });
    });

    describe('pad', function() {
        it('pad should return "**dog**" with given parameters: "dog", 7', function(){
            let result = mylodash.pad('dog', 7);
            assert.equal(result, '**dog**');
        });

        it('pad should return "dog*" with given parameters: "dog", 4', function(){
            let result = mylodash.pad('dog', 4);
            assert.equal(result, 'dog*');
        });

        it('pad should return "dog" with given parameters: "dog", 2', function(){
            let result = mylodash.pad('dog', 2);
            assert.equal(result, 'dog');
        });

        it('pad should return "dog" with given parameters: "dog", -2', function(){
            let result = mylodash.pad('dog', -2);
            assert.equal(result, 'dog');
        });

        it('pad should return "*dog**" with given parameters: "dog", 6.5 (float numbers are floored)', function(){
            let result = mylodash.pad('dog', 6.5);
            assert.equal(result, '*dog**');
        });

        it('pad should return "**dog***" with given parameters: "*dog*", 8', function(){
            let result = mylodash.pad('*dog*', 8);
            assert.equal(result, '**dog***');
        });
    });

    describe('has', function(){
        it('has should return "true" with given parameters: object with keys and values, key', function(){
            let result = mylodash.has({'Poland':'Warsaw', 'Germany':'Berlin', 'France':'Paris'}, 'France');
            assert.equal(result, true);
        });       
       
        it('has should return "false" with given parameters: object with an undefined value, key', function(){
            let result = mylodash.has({'Poland':'Warsaw', 'Germany':'Berlin', 'France': undefined}, 'France');
            assert.equal(result, false);
        });

        it('has should return "false" with given parameters: empty object, key', function(){
            let result = mylodash.has({}, 'France');
            assert.equal(result, false);
        });

        it('has should return "true" with given parameters: object with an undefined key, key', function(){
            let result = mylodash.has({'Poland':'Warsaw', 'Germany':'Berlin', undefined: 'Paris'}, undefined);
            assert.equal(result, true);
        });

        it('has should return "false" with given parameters: nested object, key in nested object', function(){
            let result = mylodash.has({'Europe': {'Poland': 'Warsaw', 'France': 'Paris'}, 'Africa': {'Kenya': 'Nairobi', 'Egypt': 'Cairo'}}, 'France');
            assert.equal(result, false);
        });

        it('has should return "false" with given parameters: nested object, object as a key', function(){
            let result = mylodash.has({'Europe': {'Poland': 'Warsaw', 'France': 'Paris'}, 'Africa': {'Kenya': 'Nairobi', 'Egypt': 'Cairo'}}, {'Kenya': 'Nairobi', 'Egypt': 'Cairo'});
            assert.equal(result, false); 
        });

        it('has should return "true" with given parameters: object with numbers and strings, number as a key', function(){
            let result = mylodash.has({1: 'Poland', 'France': 2, 3: 4}, 3);
            assert.equal(result, true);
        });
    });

    describe('invert', function(){
        it('invert should return an inverted object: key as a value, value as a key', function(){
            let result = mylodash.invert({'Poland':'Warsaw', 'Germany':'Berlin', 'France':'Paris'});
            assert.deepEqual(result, {'Warsaw':'Poland', 'Berlin':'Germany', 'Paris':'France'});
        });

        it('invert should return an empty object with given parameter: empty object', function(){
            let result = mylodash.invert({});
            assert.deepEqual(result, {});
        });

        it('invert should return an empty object with given parameter: undefined', function(){
            let result = mylodash.invert(undefined);
            assert.deepEqual(result, {});
        });
        
        it('invert should return an inverted object with given parameter: object with strings and numbers (numbers are converted into strings)', function(){
            let result = mylodash.invert({1: 'Poland', 'France': 2, 3: 4});
            assert.deepEqual(result, {'Poland': '1', '2': 'France', '4': '3'});
        });
        
        it('invert should return an inverted object with given parameter: object with undefined value (undefined is converted into string)', function(){
            let result = mylodash.invert({'Poland':'Warsaw', 'Germany':'Berlin', 'France': undefined});
            assert.deepEqual(result, {'Warsaw': 'Poland', 'Berlin': 'Germany', 'undefined': 'France'});
        });
        
        it('invert should return an inverted object containing values "Europe" and "Africa" with given parameter: nested object', function(){
            try {
                mylodash.invert({'Europe': {'Warsaw':'Poland'}, 'Africa': {'Kenya': 'Nairobi', 'Egypt': 'Cairo'}});
            } catch(error){
                assert(error != null);
            }
        });
    });


    describe('findKey', function(){

        function predicateValueEquals(value) {
            return value === 'Paris';
        };

        function predicateValueLength(value) {
            return value.length === 5;
        };

        function predicateValueTypeString(value) {
            return typeof value === 'string';
        };

        function predicateValueTypeNumber(value) {
            return typeof value === 'number';
        };

        function predicateValueTypeObject(value) {
            return typeof value === 'object';
        };

        function predicateValueUndefined(value) {
            return undefined;
        };

        function predicateValueLessThan(value) {
            return value < 4;
        };

        function predicateValueEqualsObject(value) {
            return value === {'Kenya': 'Nairobi', 'Egypt': 'Cairo'};
        };
        
        it('findKey should return "France" with predicate filtering by value = "Paris"', function(){
            let result = mylodash.findKey({'Poland':'Warsaw', 'Germany':'Berlin', 'France':'Paris'}, predicateValueEquals);
            assert.equal(result, 'France');
        });

        it('findKey should return "France" with predicate filtering by value length = 5', function(){
            let result = mylodash.findKey({'Poland':'Warsaw', 'Germany':'Berlin', 'France':'Paris'}, predicateValueLength);
            assert.equal(result, 'France');
        });

        it('findKey should return "1" with predicate filtering by value length = 5', function(){
            let result = mylodash.findKey({1: 'Paris', 'France': 2, 3: 4}, predicateValueLength);
            assert.equal(result, 1);
        });

        it('findKey should return "1" with predicate filtering by typeof value = "string"', function(){
            let result = mylodash.findKey({1: 'Poland', 'France': 2, 3: 4}, predicateValueTypeString);
            assert.equal(result, '1');
        });

        it('findKey should return "3" with predicate filtering by typeof value = "number"', function(){
            let result = mylodash.findKey({1: 'Poland', 'France': 2, 3: 4}, predicateValueTypeNumber);
            assert.equal(result, '3');
        });

        it('findKey should return "France" with predicate filtering by value < 4', function(){
            let result = mylodash.findKey({1: 'Poland', 'France': 2, 3: 4}, predicateValueLessThan);
            assert.equal(result, 'France');
        });

        it('findKey should return "France" with predicate filtering by value < 4', function(){
            let result = mylodash.findKey({1: 'Poland', 'France': 2, 3: 4}, predicateValueLessThan);
            assert.equal(result, 'France');
        });
        
        it('findKey should return "undefined" with predicate filtering an undefined value', function(){
            let result = mylodash.findKey({'Poland':'Warsaw', 'Germany':'Berlin', 'France':undefined}, predicateValueUndefined);
            assert.equal(result, undefined);
        });

        it('findKey should return "undefined" with predicate filtering by value = "Paris" on empty object', function(){
            let result = mylodash.findKey({}, predicateValueEquals);
            assert.equal(result, undefined);
        });

        it('findKey should return "undefined" with predicate filtering by value = "Paris" on nested object', function(){
            let result = mylodash.findKey({'Europe': {'Poland': 'Warsaw', 'France': 'Paris'}, 'Africa': {'Kenya': 'Nairobi', 'Egypt': 'Cairo'}}, predicateValueEquals);
            assert.equal(result, undefined);
        });

        it('findKey should return "undefined" with predicate filtering by value = object in nested object', function(){
            let result = mylodash.findKey({'Europe': {'Poland': 'Warsaw', 'France': 'Paris'}, 'Africa': {'Kenya': 'Nairobi', 'Egypt': 'Cairo'}}, predicateValueEqualsObject);
            assert.equal(result, undefined);
        });

        it('findKey should return "Europe" with predicate filtering by typeof value = object in nested object', function(){
            let result = mylodash.findKey({'Europe': {'Poland': 'Warsaw', 'France': 'Paris'}, 'Africa': 54}, predicateValueTypeObject);
            assert.equal(result, 'Europe');
        });
    });

    describe('drop', function(){
        it('drop should return an array [4,5] with given parameters: [3,4,5], 1', function(){
            let result = mylodash.drop([3,4,5], 1);
            assert.deepEqual(result, [4,5]);
        });

        it('drop should return an empty array with given parameters: [1,2,3], 4 (drop number >= array.length)', function(){
            let result = mylodash.drop([1,2,3], 4);
            assert.deepEqual(result, []);
        });

        it('drop should return an empty array with given parameters: [], 4 (empty array)', function(){
            let result = mylodash.drop([], 4);
            assert.deepEqual(result, []);
        });

        it('drop should return an unmodified array [1,2,3] with given parameters: [1,2,3], 0', function(){
            let result = mylodash.drop([1,2,3], 0);
            assert.deepEqual(result, [1,2,3]);
        });

        it('drop should return an array [4,5,6] with given parameters: [1,2,3,4,5,6], -3 (negative value drop array elements from the end of array)', function(){
            let result = mylodash.drop([1,2,3,4,5,6], -3);
            assert.deepEqual(result, [4,5,6]);
        });
    });

    describe('dropWhile', function(){

        function predicateElementEquals(element, index, array) {
            return element.charAt(0) === 'C';
        };

        function predicateElementTypeString(element, index, array) {
            return typeof element === 'string';
        };

        function predicateElementTypeNumber(element, index, array) {
            return typeof element === 'number';
        };

        function predicateElementLessOrEqual(element, index, array) {
            return element <= 6;
        };

        it('dropWhile should return an array ["Dog", "Elephant", "Duck"] with given parameters: array, predicate dropping while element`s first letter = "C"', function(){
            let result = mylodash.dropWhile(['Chicken', 'Cow', 'Dog', 'Elephant', 'Duck'], predicateElementEquals);
            assert.deepEqual(result, ['Dog', 'Elephant', 'Duck']);
        });

        it('dropWhile should return an empty array with given parameters: array, predicate dropping while element is a string', function(){
            let result = mylodash.dropWhile(['Chicken', 'Cow', 'Dog', 'Elephant', 'Duck'], predicateElementTypeString);
            assert.deepEqual(result, []);
        });

        it('dropWhile should return an array ["Chicken", 4, 5, "Elephant"] with given parameters: array, predicate dropping while element is a number', function(){
            let result = mylodash.dropWhile([2, 3, 'Chicken', 4, 5, 'Elephant'], predicateElementTypeNumber);
            assert.deepEqual(result, ['Chicken', 4, 5, 'Elephant']);
        });

        it('dropWhile should return an array [8,10] with given parameters: array, predicate dropping while element <=6', function(){
            let result = mylodash.dropWhile([2, 4, 6, 8, 10], predicateElementLessOrEqual);
            assert.deepEqual(result, [8, 10]);
        });

        it('dropWhile should return an empty array with given parameters: empty array, predicate dropping while element <=6', function(){
            let result = mylodash.dropWhile([], predicateElementLessOrEqual);
            assert.deepEqual(result, []);
        });

        it('dropWhile should return an array [[4, 5], 6, 7] with given parameters: nested array, predicate dropping while element <=6', function(){
            let result = mylodash.dropWhile([3, [4, 5], 6, 7], predicateElementLessOrEqual);
            assert.deepEqual(result, [[4, 5], 6, 7]);
        });


    });    

    describe('chunk', function(){
        it('chunk should return an array split into arrays with given parameters: array, even number', function(){
            let result = mylodash.chunk([1,2,3,4,5,6], 2);
            assert.deepEqual(result, [[1,2], [3,4], [5,6]]);
        });

        it('chunk should return an array split into arrays with given parameters: array, odd number', function(){
            let result = mylodash.chunk([1,2,3,4,5,6,7], 3);
            assert.deepEqual(result, [[1,2,3], [4,5,6], [7]]);
        });
        
        it('chunk should return an unmodified array nested in array with given parameters: array, number >= array.length', function(){
            let result = mylodash.chunk([1,2,3,4], 5);
            assert.deepEqual(result, [[1,2,3,4]]);
        });

        it('chunk should return an empty array with given parameters: empty array, number', function(){
            let result = mylodash.chunk([], 5);
            assert.deepEqual(result, []);
        });

        it('chunk should return an array split into arrays of arrays with given parameters: array of arrays, number', function(){
            let result = mylodash.chunk([[1,2], [3,4,5], [6,7], [8,9,10], [11,12]], 2);
            assert.deepEqual(result, [[[1,2], [3,4,5]], [[6,7], [8,9,10]], [[11,12]]]);
        });

        it('chunk should return an array split into arrays with given parameters: array (undefined number works as 1)', function(){
            let result = mylodash.chunk([1,2,3,4]);
            assert.deepEqual(result, [[1], [2], [3], [4]]);
        });
        
        it('chunk shound return an unmodified array with given parameters: array, 0', function(){
            let result = mylodash.chunk([1,2,3,4], 0);
            assert.deepEqual(result, [1,2,3,4]);
        });

        it('chunk should retun an unmodified array with given parameters: array, negative value', function(){
            let result = mylodash.chunk([1,2,3,4], -2);
            assert.deepEqual(result, [1,2,3,4]);
        });

        it('chunk should return an array split into arrays with given parameters: array, float number (float numbers are rounded)', function(){
            let result = mylodash.chunk([1,2,3,4,5,6,7], 3.89);
            assert.deepEqual(result, [[1,2,3,4], [5,6,7]]);
        });

    });
});   