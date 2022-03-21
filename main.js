/**********
 * DATA *
 **********/

 let sixes = [];
 let doubleSixes = [];
 let twelves = [];
 let twenties = [];

 /********************
  * HELPER FUNCTIONS *
 ********************/
 
 const getRandomNumber = function(max) {
     const rand = Math.random();
     const range = rand * max;
     const result = Math.ceil(range);
     return result;
 }
 
 const sortByNumber = function(arr) {
   const byNumber = function(item1, item2) {
     return item1 - item2;
   }
 
   return arr.slice().sort(byNumber);
 }
 
 /*******************
  * YOUR CODE BELOW *
  *******************/
 
  let d6Button = document.querySelector('#d6-button'); //Set variable for single die button.
  let sixSidedDieImage = document.querySelector('#d6-roll');  //Setting variable for image of single 6 sided die.
  let d6Mean = document.querySelector('#d6-rolls-mean');
  let d6Median = document.querySelector('#d6-rolls-median');
  let d6Mode = document.querySelector('#d6-rolls-mode');
  
  let doubleD6Button = document.querySelector('#double-d6-buttons');
  let doubleSix1Image = document.querySelector('#double-d6-roll-1'); //Setting variable for image of first die in double roll option.
  let doubleSix2Image = document.querySelector('#double-d6-roll-2'); //Setting variable for image of second die in double roll option.
  let doubleD6Mean = document.querySelector('#double-d6-rolls-mean');
  let doubleD6Median = document.querySelector('#double-d6-rolls-median');
  let doubleD6Mode = document.querySelector('#double-d6-rolls-mode');
  
  let d12Button = document.querySelector('#d12-button');
  let twelveSidedDieImage = document.querySelector('#d12-roll'); //Setting variable for image of 12 sided die.
  let d12Mean = document.querySelector('#d12-rolls-mean');
  let d12Median = document.querySelector('#d12-rolls-median');
  let d12Mode = document.querySelector('#d12-rolls-mode');
  
  let d20Button = document.querySelector('#d20-button');
  let twentySidedDieImage = document.querySelector('#d20-roll'); //Setting variable for image  of 20 sided die.
  let d20Mean = document.querySelector('#d20-rolls-mean');
  let d20Median = document.querySelector('#d20-rolls-median');
  let d20Mode = document.querySelector('#d20-rolls-mode');
  
  let resetButton = document.querySelector('#reset-button');

  reset();
 
 /*******************
  * EVENT LISTENERS *
  *******************/
 
 d6Button.addEventListener('click', d6Roll);
 
 doubleD6Button.addEventListener('click', doubleSix1Roll);

 doubleD6Button.addEventListener('click', doubleSix2Roll);

 d12Button.addEventListener('click', d12Roll);

 d20Button.addEventListener('click', d20Roll);

 resetButton.addEventListener('click', reset);
 
 
 /******************
  * RESET FUNCTION *
  ******************/
 
  function reset() {
 
   sixes = [];
   doubleSixes = [];
   twelves = [];
   twenties = [];
 
   d6Mean.innerText = 'NA';
   d6Median.innerText = 'NA';
   d6Mode.innerText = 'NA';

   doubleD6Mean.innerText = 'NA';
   doubleD6Median.innerText = 'NA';
   doubleD6Mode.innerText = 'NA';

   d12Mean.innerText = 'NA';
   d12Median.innerText = 'NA';
   d12Mode.innerText = 'NA';

   d20Mean.innerText = 'NA';
   d20Median.innerText = 'NA';
   d20Mode.innerText = 'NA';

   sixSidedDieImage.src = "images/start/d6.png" //Link image to source ID in the Html page.
   doubleSix1Image.src = "images/start/d6.png"; //Link image to source ID in the Html page.
   doubleSix2Image.src = "images/start/d6.png"; //Link image to source ID in the Html page.
   twelveSidedDieImage.src = "images/start/d12.jpeg"; //Link image to source ID in the Html page.
   twentySidedDieImage.src = "images/start/d20.jpg"; //Link image to source ID in the Html page.

 
}
 
 
 /****************************
  * CLICK HANDLING FUNCTIONS *
 ****************************/
 
function d6Roll() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    sixSidedDieImage.src = "images/d6/1.png";
  } else if (roll === 2) {
    sixSidedDieImage.src = "images/d6/2.png";
  } else if (roll === 3) {
    sixSidedDieImage.src = "images/d6/3.png";
  } else if (roll === 4) {
    sixSidedDieImage.src = "images/d6/4.png";
  } else if (roll === 5) {
    sixSidedDieImage.src = "images/d6/5.png";
  } else if (roll === 6) {
    sixSidedDieImage.src = "images/d6/6.png";
  }

  sixes.push(roll);
  // console.log(sixes);

  d6Mean.innerText = getAverage(sixes);
  d6Median.innerText = getMedian(sixes);
  d6Mode.innerText = getMode(sixes);

} 

function doubleSix1Roll() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    doubleSix1Image.src = "images/d6/1.png";
  } else if (roll === 2) {
    doubleSix1Image.src = "images/d6/2.png";
  } else if (roll === 3) {
    doubleSix1Image.src = "images/d6/3.png";
  } else if (roll === 4) {
    doubleSix1Image.src = "images/d6/4.png";
  } else if (roll === 5) {
    doubleSix1Image.src = "images/d6/5.png";
  } else if (roll === 6) {
    doubleSix1Image.src = "images/d6/6.png";
  }

  doubleSixes.push(roll);
  console.log(doubleSixes);

  doubleD6Mean.innerText = getAverage(doubleSixes);
  doubleD6Median.innerText = getMedian(doubleSixes);
  doubleD6Mode.innerText = getMode(doubleSixes);

}

function doubleSix2Roll() {
  let roll = getRandomNumber(6);

  if (roll === 1) {
    doubleSix2Image.src = "images/d6/1.png";
  } else if (roll === 2) {
    doubleSix2Image.src = "images/d6/2.png";
  } else if (roll === 3) {
    doubleSix2Image.src = "images/d6/3.png";
  } else if (roll === 4) {
    doubleSix2Image.src = "images/d6/4.png";
  } else if (roll === 5) {
    doubleSix2Image.src = "images/d6/5.png";
  } else if (roll === 6) {
    doubleSix2Image.src = "images/d6/6.png";
  }

  doubleSixes.push(roll);
  console.log(doubleSixes);

  doubleD6Mean.innerText = getAverage(doubleSixes);
  doubleD6Median.innerText = getMedian(doubleSixes);
  doubleD6Mode.innerText = getMode(doubleSixes);

}

function d12Roll() {
  let roll = getRandomNumber(12);

  if (roll === 1) {
    twelveSidedDieImage.src = "images/numbers/1.png";
  } else if (roll === 2) {
    twelveSidedDieImage.src = "images/numbers/2.png";
  } else if (roll === 3) {
    twelveSidedDieImage.src = "images/numbers/3.png";
  } else if (roll === 4) {
    twelveSidedDieImage.src = "images/numbers/4.png";
  } else if (roll === 5) {
    twelveSidedDieImage.src = "images/numbers/5.png";
  } else if (roll === 6) {
    twelveSidedDieImage.src = "images/numbers/6.png";
  } else if (roll === 7) {
    twelveSidedDieImage.src = "images/numbers/7.png";
  } else if (roll === 8) {
    twelveSidedDieImage.src = "images/numbers/8.png";
  } else if (roll === 9) {
    twelveSidedDieImage.src = "images/numbers/9.png";
  } else if (roll === 10) {
    twelveSidedDieImage.src = "images/numbers/10.png";
  } else if (roll === 11) {
    twelveSidedDieImage.src = "images/numbers/11.png";
  } else if (roll === 12) {
    twelveSidedDieImage.src = "images/numbers/12.png";
  }

  twelves.push(roll);
  // console.log(twelves);

  d12Mean.innerText = getAverage(twelves);
  d12Median.innerText = getMedian(twelves);
  d12Mode.innerText = getMode(twelves);

}

function d20Roll() {
  let roll = getRandomNumber(20);

  if (roll === 1) {
    twentySidedDieImage.src = "images/numbers/1.png";
  } else if (roll === 2) {
    twentySidedDieImage.src = "images/numbers/2.png";
  } else if (roll === 3) {
    twentySidedDieImage.src = "images/numbers/3.png";
  } else if (roll === 4) {
    twentySidedDieImage.src = "images/numbers/4.png";
  } else if (roll === 5) {
    twentySidedDieImage.src = "images/numbers/5.png";
  } else if (roll === 6) {
    twentySidedDieImage.src = "images/numbers/6.png";
  } else if (roll === 7) {
    twentySidedDieImage.src = "images/numbers/7.png";
  } else if (roll === 8) {
    twentySidedDieImage.src = "images/numbers/8.png";
  } else if (roll === 9) {
    twentySidedDieImage.src = "images/numbers/9.png";
  } else if (roll === 10) {
    twentySidedDieImage.src = "images/numbers/10.png";
  } else if (roll === 11) {
    twentySidedDieImage.src = "images/numbers/11.png";
  } else if (roll === 12) {
    twentySidedDieImage.src = "images/numbers/12.png";
  } else if (roll === 13) {
    twentySidedDieImage.src = "images/numbers/13.png";
  } else if (roll === 14) {
    twentySidedDieImage.src = "images/numbers/14.png";
  } else if (roll === 15) {
    twentySidedDieImage.src = "images/numbers/15.png";
  } else if (roll === 16) {
    twentySidedDieImage.src = "images/numbers/16.png";
  } else if (roll === 17) {
    twentySidedDieImage.src = "images/numbers/17.png";
  } else if (roll === 18) {
    twentySidedDieImage.src = "images/numbers/18.png";
  } else if (roll === 19) {
    twentySidedDieImage.src = "images/numbers/19.png";
  } else if (roll === 20) {
    twentySidedDieImage.src = "images/numbers/20.png";
  }

  twenties.push(roll);
  // console.log(twenties);

  d20Mean.innerText = getAverage(twenties);
  d20Median.innerText = getMedian(twenties);
  d20Mode.innerText = getMode(twenties);

}
 
 /****************
  * MATH SECTION *
  ****************/
 
function getAverage(arrays) {

    let sum = 0;

    for (const array of arrays) {
        sum += array;
    }

    return (sum/arrays.length).toFixed(2);

}

function getMedian(array) {

    if (array.length === 0) {

        return 0;

    }

    let sorted = sortByNumber(array);
    if(sorted.length % 2 === 0) {
        //Array is even
        let middleHigh = sorted.length/2;
        let middleLow = (sorted.length/2) - 1;
        let trueMiddle = (sorted[middleHigh] + sorted[middleLow]) / 2;
        return trueMiddle; 
    } else {
        //Array is odd
        let middleIndex = Math.floor(sorted.length/2); 
        return sorted[middleIndex];                       
    }

}

function getMode(array) {

    //[2, 3, 3, 4, 6]

    //  countObject = {
    //     2 : 1
    //     3 : 2
    //     4 : 1 
    //     6 : 1
    // }
    let countObject = {};

    //Create keys for each number in array

    for (let number of array) {
        if (countObject[number] >= 1){
            countObject[number]++; 
        } else {
            countObject[number] = 1;
        }
    }

    let highestUniqueNumber = 0;
    let highestCount = 0;   
    let keys = Object.keys(countObject); //Returns a string array of each key in the object that is passed in.

    for (let number of keys) {

        let value = countObject[number];

        if(value > highestCount) {
            highestCount = value;
            highestUniqueNumber = number;
        }
    }
    return highestUniqueNumber;
}
