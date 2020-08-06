//  // create map
//  const myMap = new Map();
//  // add key value pairs
//  myMap.set('66', 99);
//  myMap.set('107', 81);
//  myMap.set('109', 96 );
//  myMap.set('85', 96);
//  myMap.set('106', 76);
//  myMap.set('95', 98);
//  myMap.set('67', 65 );
//  myMap.set('78', 93);

//  const getMax = function (resultMap) {
//    const maxValue = [];
//    for (const [key, value] of resultMap) {
//       maxValue = (!maxValue || maxValue < value) ? value : maxValue;
//    }
//    return maxValue;
//  }

//  const getMin = function (resultMap) {
//    const minValue = [];
//    for (const key of resultMap.keys()) {
//      const value = resultMap.get(key);
//      minValue = (!minValue || minValue > value) ? value : minValue;
//    }
//    return minValue;
//  }
//  console.log(getMin(myMap)) // 2
//  console.log(getMax(myMap)); // 12