## Foundations II: JavaScript
### Lab 2, Beginning Track

1. Make sure you're logged in to your account on GitHub.
2. Click on the "Fork" button in the upper right. This will create a new copy of the repo, one that's associated with your account. This will take you to your account on GitHub - notice that the name in the upper left has changed from "codefellows" to yours, and underneath it will say "forked from codefellows/F2-JavaScript-lab2-beg-track".
3. Copy the link in the "HTTPS Clone URL" box on the right. Tip: that link should have your username in it, not codefellows.
4. Open your terminal and navigate to your projects directory.
5. Run this: `git clone paste-in-that-url-here`
6. `cd F2-JavaScript-lab2-beg-track`
7. Run `npm install`.
8. Your assignment is in lab2.js. There are detailed instructions in the
comments. Be sure to read everything. Run lab2.js with `node lab2.js`.
9. Before you turn in your assignment, run `grunt` to check for jshint and jscs errors/warnings. Fix all the errors.
10. List any resources you used (blogs, Stack Overflow questions, etc.) or collaborators below.


#### Resources and Collaborators

MDN/W3School:
- Methods: push, join, split, concat, charAt, toUpperCase, toLowerCase
- Math.max
- Return

From class:
- Class 4 slides
- Class 3 and 4 notes
- Lab 1 for reference

Checked code with classmates:

<-- Clare's Blob Code -->
var peopleLeft = 1000
var j=1
while(peopleLeft>0){
  j++
  peopleLeft = peopleLeft -j //where j is the number you are at in the loop
}

<-- Dustin's Blob Code -->
function Blob() {
  this.hoursToOoze = function (population, peoplePerHour) {
    var mealRounds = 0;
    while(0 < population) {
      population = population - peoplePerHour;
      peoplePerHour++;
      mealRounds++;
    };
    return mealRounds;
  };
};

 //TODO: Next, create an instance of Blob named blob.
 var blob = new Blob();

 <-- Tina's Variablify Code -->
string = string.toLowerCase();
  var splitString = string.split(' ');
  var splitChar = '';
  for (var i = 1; i < splitString.length; i++) {
    splitChar = splitString[i].split('');
    splitChar[0] = splitChar[0].toUpperCase();
    splitString[i] = splitChar.join('');
  }
  return splitString.join('');



