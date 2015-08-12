'use strict';

/* ********************************************************
LAB 2: LOOPY SCI-FI

Welcome to Lab 2 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab2.js */

//*********************************************************
// SETUP
//*********************************************************

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

    for the...      | starting rate of | persons consumed |
                    |  consumption     |    that hour     |
--------------------|------------------|------------------|
    first hour      |    1/hour        |        1         |
    second hour     |    2/hour        |        2         |
    third hour      |    3/hour        |        3         |
    fourth hour     |    4/hour        |        4         |

 TODO: First, make a constructor function, called Blob, that makes blobs.

 TODO: Next, create an instance of Blob named blob.

 TODO: Then, use a loop to calculate how long it took the blob to finish
 with Dowington. */

function Blob(name) {
  this.newBlob = name;
  this.hoursToOoze = function(population, peoplePerHour) {
    var mealRounds = 0;
    while (population > 0) {
      peoplePerHour++;
      mealRounds++;
      population = population - peoplePerHour;
    }
    var hoursSpentInTown = mealRounds;
  // console.log('Hours in this town: ' + hoursSpentInTown);
    return hoursSpentInTown;
  };
}

var blob = new Blob('blob');
blob.hoursToOoze(1000, 1);

// Blob.prototype.consume = function(population) {
//   var counter = 1;
//   var mealRounds = 0;
//   while(population > 0) {
//     counter++;
//     mealRounds++;
//     population = population - counter;
//   }
//   var hoursSpentInDowington = mealRounds;
//   // console.log('Hours in Dowington: ' + hoursSpentInDowington);
//   return hoursSpentInDowington;
// };

// blob.consume(1000);

var hoursSpentInDowington = 44; // TODO: assign me the value of the
                           // above calculation (how long it took
                           // the blob to eat Dowington)

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze its way through that town.

// Blob.prototype.hoursToOoze = function(population, peoplePerHour) {
//   // TODO: implement me based on the instructions above.
//   // Be sure to then assign me to the Blob's prototype.
//   var mealRounds = 0;
//   while(population > 0) {
//     peoplePerHour++;
//     mealRounds++;
//     population = population - peoplePerHour;
//   }
//   var hoursSpentInTown = mealRounds;
//   // console.log('Hours in this town: ' + hoursSpentInTown);
//   return hoursSpentInTown;
// };

assert(blob.hoursToOoze(0, 1) === 0, 'no people means no time needed.');
assert(blob.hoursToOoze(1000, 1) === hoursSpentInDowington,
  'hoursSpentInDowington should match hoursToOoze\'s result for 1000');

// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

assert(blob.hoursToOoze(300, 1) === 24, 'Bye bye, Seattle');
assert(blob.hoursToOoze(849, 1) === 40, 'Bye bye, Bellevue');
assert(blob.hoursToOoze(135, 1) === 15, 'Bye Bye, Tacoma');

//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: 'nuqneH',  // home planet is Qo'noS
  romulan: 'Jolan\'tru', // home planet is Romulus
  'federation standard': 'hello' // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method (that you'll place on the prototype) called
// sayHello.

function SentientBeing(homePlanet, language) {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function sayHello(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  if (sb === klingon) {
    console.log(hello['federation standard'] + ' and ' + hello.romulan);
    return (hello.klingon);

  } else if (sb === romulan) {
    console.log(hello.klingon + ' and ' + hello['federation standard']);
    return (hello.romulan);

  } else if (sb === human) {
    console.log(hello.romulan + ' and ' + hello.klingon);
    return (hello['federation standard']);
  }
    //TODO: put this on the SentientBeing prototype
};

// TODO: create three SentientBeings, one for each language in the
// 'hello' object above.
var klingon = new SentientBeing('Qo\'noS', 'klingon'); // TODO: make a klingon
var romulan = new SentientBeing('Romulus', 'romulan'); // TODO: make a romulan
var human = new SentientBeing('Earth', 'federation standard'); // TODO: make a human

assert(human.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

assert(human.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert(romulan.sayHello(human) === 'hello',
  'the human should hear hello');

assert(romulan.sayHello(klingon) === 'nuqneH',
  'the klingon should hear nuqneH');

assert(klingon.sayHello(romulan) === 'Jolan\'tru',
  'the romulan should hear Jolan\'tru');

assert(klingon.sayHello(human) === 'hello',
  'the human should hear hello');

//*********************************************************
// PROBLEM 3: Moar Loops. 20 points.
//
// Implement the following functions. Write at least 3
// assertions for each one
//*********************************************************
function max(array) {
  // TODO: return the largest number in the given array
  return Math.max.apply(null, array);
}

// TODO: write three more assertions
assert(max([1, 3, 2]) === 3, '[1,3,2]');
assert(max([50, 150, 100]) === 150, '[50, 150, 100]');
assert(max([12, 23, 34]) === 34, '[12, 23, 34]');
assert(max([97, 75, 53]) === 97, '[97, 75, 53]');

function variablify(string) {
  // TODO: you are given a string with several words in it
  // return a corresponding variable name that follows
  // javascript conventions
  // HINT:
  // you might want to use these string methods:
  //  split(), charAt(), toUpperCase()
  // and this array method: join()

  // 'one two three'
  // ['one', 'two', 'three']
  // ['one', 'Two', 'Three']
  // 'oneTwoThree'

  var stringSplit = string.split(' '); // ['one', 'two', 'three']
  var upperCase = [];

  for (var i = 0; i < stringSplit.length; i++) {
    var newString = stringSplit[i].charAt(0).toUpperCase() + stringSplit[i].substr(1);
    upperCase.push(newString);
  }
  // [ 'One', 'Two', 'Three' ]
  var newSplit = upperCase.join(''); // 'OneTwoThree'
  var newVariable = newSplit.charAt(0).toLowerCase() + newSplit.substr(1);
  // 'oneTwoThree'
  return newVariable;
}

// TODO: write three more assertions
assert(variablify('one two three') === 'oneTwoThree',
  'variablify(\'one two three\')');

assert(variablify('this class is awesome') === 'thisClassIsAwesome',
  'variablify(\'this class is awesome\')');
assert(variablify('taco burrito nachos') === 'tacoBurritoNachos',
  'variablify(\'taco burrito nachos\')');
assert(variablify('time to eat') === 'timeToEat',
  'variablify(\'time to eat\')');

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
