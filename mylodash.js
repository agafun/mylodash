const mylodash = {
  clamp(number, lower, upper) {
    lowerClampedValue = Math.max(number, lower);
    clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
  },
  
  inRange(number, startValue, endValue) {
    if (endValue === undefined) {
      endValue = startValue;
      startValue = 0;
    }
    if (startValue > endValue) {
      tmp = startValue;
      startValue = endValue;
      endValue = tmp;
    }
    if (number >= startValue && number < endValue){
      return true;
    } else {
      return false;
    }
  },
  
  words(string) {
    words = string.split(' ');
    return words;
  },
  
  pad(string, length) {
    if (length > string.length) {
      numberOfSpacesStart = Math.floor((length - string.length) / 2);
      numberOfSpacesEnd = length - string.length - numberOfSpacesStart;
      paddedString = '*'.repeat(numberOfSpacesStart) + string + '*'.repeat(numberOfSpacesEnd);
      return paddedString;
    } else {
      return string;
    }
  },
  
  has(object, key) {
  	hasValue = true;
    if (object[key] === undefined) {
      hasValue = false;
    }
    return hasValue;
  },
  
  invert(object) {
    invertedObject = {};
    for (let key in object) {
      origValue = object[key];
      if (typeof origValue === 'object') {
        throw 'Cannot invert with object as value';
      }
      invertedObject[origValue] = key;
    }
    return invertedObject;
  },
  
  findKey(object, predicate) {
    for (let key in object) {
      value = object[key];
      predicateReturnValue = predicate(value);
      if (predicateReturnValue === true) {
        return key;
      }
    } return undefined;
  },
  
  drop(array, n) {
    if (n === undefined) {
      n = 1;
    }
    droppedArray = array.slice(n);
    return droppedArray;
  },
  
  dropWhile(array, predicate) {
    ff = (element, index) => {
      return !(predicate(element, index, array));
    }
    dropNumber = array.findIndex(ff);
    if (dropNumber === -1) {
       return [];
    };
    droppedArray = this.drop(array, dropNumber);
    return droppedArray;
  },
  
  chunk(array, size) {
    if (size === undefined) {
      size = 1;
    } else if (size <= 0) {
      console.log('`size` must be a positive value');
      return array;
    }
    chunksArray = [];
    size = Math.round(size);
    for (let i=0; i<array.length; i+=size) {
      chunks = array.slice(i, i+size);
      chunksArray.push(chunks);
    }
    return chunksArray;
  },
  
};


module.exports = mylodash;








