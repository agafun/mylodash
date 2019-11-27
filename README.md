# mylodash

mylodash was created as a project in Codecademy Java Script course. There are 10 functions which have been recreated from the Lodash library, however some of them were simplified and improved. All 10 functions have been tested with diverse unit tests. 

_.clamp(number, lower, upper)
Clamps number within the inclusive lower and upper bounds.

_.inRange(number, startValue, endValue)
Checks if number is between startValue and up to, but not including, endValue. If endValue is not specified, it's set to startValue with startValue then set to 0. If startValue is greater than endValue the parameters are swapped to support negative ranges.

_.words(string)
Splits string into an array of its words.

_.pad(string, length) 
Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.

_.has(object, key)
Checks if key has a value.
 
_.invert(object) 
Creates an object composed of the inverted keys and values of object. If object contains duplicate values, subsequent values overwrite property assignments of previous values. If object contains nested objects as values, an error is thrown.

_.findKey(object, predicate)
Iterates over elements of collection, returning the key of the first element predicate returns truthy for instead of the element itself. 
The predicate is a function invoked with one argument: (value).

_.drop(array, n)
Creates a slice of array with n elements dropped from the beginning. Negative n value drops array elements from the end of the array.

 _.dropWhile(array, predicate)
Creates a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is a function invoked with three arguments: (value, index, array).

_.chunk(array, size)
Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements. If size is a negative value

mylodash
    clamp
      ✓ clamp should return -5 with given parameters: -10, -5, 5
      ✓ clamp should return 0 with given parameters: 0, -5, 5
      ✓ clamp should return 5 with given parameters: 10, -5, 5
      ✓ clamp should return -5 with given parameters: 10, 5, -5 (inverted range)
      ✓ clamp should return 1.52 with given parameters: 1.52, -2.72, 3.14 (float numbers)
    inRange
      ✓ inRange should return "false" with given parameters: -6, -5, 5
      ✓ inRange should return "true" with given parameters: -5, -5, 5
      ✓ inRange should return "true" with given parameters: 4, -5, 5
      ✓ inRange should return "false" with given parameters: 5, -5, 5
      ✓ inRange should return "false" with given parameters: 3, 5, -5 (inverted range)
      ✓ inRange should return "true" with given parameters: 1.52, -2,.72, 3.14 (float numbers)
    words
      ✓ words should return an array
      ✓ words should return an array of strings
      ✓ words should return an array of length 3 with given parameter: "Ala ma kota"
      ✓ words should return a string "ma" as a second element in array with given parameter: "Ala ma kota"
      ✓ words should return strings "kota," and "Alę." as elements in array (special characters do not split string)
      ✓ words should return an empty string with given parameter: empty string
    pad
      ✓ pad should return "**dog**" with given parameters: "dog", 7
      ✓ pad should return "dog*" with given parameters: "dog", 4
      ✓ pad should return "dog" with given parameters: "dog", 2
      ✓ pad should return "dog" with given parameters: "dog", -2
      ✓ pad should return "*dog**" with given parameters: "dog", 6.5 (float numbers are floored)
      ✓ pad should return "**dog***" with given parameters: "*dog*", 8
    has
      ✓ has should return "true" with given parameters: object with keys and values, key
      ✓ has should return "false" with given parameters: object with an undefined value, key
      ✓ has should return "false" with given parameters: empty object, key
      ✓ has should return "true" with given parameters: object with an undefined key, key
      ✓ has should return "false" with given parameters: nested object, key in nested object
      ✓ has should return "false" with given parameters: nested object, object as a key
      ✓ has should return "true" with given parameters: object with numbers and strings, number as a key
    invert
      ✓ invert should return an inverted object: key as a value, value as a key
      ✓ invert should return an empty object with given parameter: empty object
      ✓ invert should return an empty object with given parameter: undefined
      ✓ invert should return an inverted object with given parameter: object with strings and numbers (numbers are converted into strings)
      ✓ invert should return an inverted object with given parameter: object with undefined value (undefined is converted into string)
      ✓ invert should return an inverted object containing values "Europe" and "Africa" with given parameter: nested object
    findKey
      ✓ findKey should return "France" with predicate filtering by value = "Paris"
      ✓ findKey should return "France" with predicate filtering by value length = 5
      ✓ findKey should return "1" with predicate filtering by value length = 5
      ✓ findKey should return "1" with predicate filtering by typeof value = "string"
      ✓ findKey should return "3" with predicate filtering by typeof value = "number"
      ✓ findKey should return "France" with predicate filtering by value < 4
      ✓ findKey should return "France" with predicate filtering by value < 4
      ✓ findKey should return "undefined" with predicate filtering an undefined value
      ✓ findKey should return "undefined" with predicate filtering by value = "Paris" on empty object
      ✓ findKey should return "undefined" with predicate filtering by value = "Paris" on nested object
      ✓ findKey should return "undefined" with predicate filtering by value = object in nested object
      ✓ findKey should return "Europe" with predicate filtering by typeof value = object in nested object
    drop
      ✓ drop should return an array [4,5] with given parameters: [3,4,5], 1
      ✓ drop should return an empty array with given parameters: [1,2,3], 4 (drop number >= array.length)
      ✓ drop should return an empty array with given parameters: [], 4 (empty array)
      ✓ drop should return an unmodified array [1,2,3] with given parameters: [1,2,3], 0
      ✓ drop should return an array [4,5,6] with given parameters: [1,2,3,4,5,6], -3 (negative value drop array elements from the end of array)
    dropWhile
      ✓ dropWhile should return an array ["Dog", "Elephant", "Duck"] with given parameters: array, predicate dropping while element`s first letter = "C"
      ✓ dropWhile should return an empty array with given parameters: array, predicate dropping while element is a string
      ✓ dropWhile should return an array ["Chicken", 4, 5, "Elephant"] with given parameters: array, predicate dropping while element is a number
      ✓ dropWhile should return an array [8,10] with given parameters: array, predicate dropping while element <=6
      ✓ dropWhile should return an empty array with given parameters: empty array, predicate dropping while element <=6
      ✓ dropWhile should return an array [[4, 5], 6, 7] with given parameters: nested array, predicate dropping while element <=6
    chunk
      ✓ chunk should return an array split into arrays with given parameters: array, even number
      ✓ chunk should return an array split into arrays with given parameters: array, odd number
      ✓ chunk should return an unmodified array nested in array with given parameters: array, number >= array.length
      ✓ chunk should return an empty array with given parameters: empty array, number
      ✓ chunk should return an array split into arrays of arrays with given parameters: array of arrays, number
      ✓ chunk should return an array split into arrays with given parameters: array (undefined number works as 1)
`size` must be a positive value
      ✓ chunk should return an unmodified array with given parameters: array, 0
`size` must be a positive value
      ✓ chunk should return an unmodified array with given parameters: array, negative value
      ✓ chunk should return an array split into arrays with given parameters: array, float number (float numbers are rounded)