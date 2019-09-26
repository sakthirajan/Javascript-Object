// Import stylesheets
import './style.css';

// Write Javascript code!
const one = document.getElementById('1');
one.innerHTML = `1.)Write a JavaScript program to list the properties of a JavaScript object.`;

function _key(Obj) {
  var keys = [];
  if (isObject(Obj)) {
    if (Object.keys(Obj).length > 0) { // check object length
      for (var key in Obj) {
        keys.push(key);
      }
      return keys;
    }
    return "Empty Object"
  }
  return "This is not an object"
}
function isObject(Obj) {
  if (typeof Obj === "object") return true; // check given input is object
}
console.log(_key({ red: "#FF0000", green: "#00FF00", white: "#FFFFFF" }));
console.log(_key("sample"));
console.log(_key({}));

const two = document.getElementById('2');
two.innerHTML = `2.)Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.`;

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(student);
delete student.rollno; // delete object key or property
console.log(student);

const three = document.getElementById('3');
three.innerHTML = `3.)Write a JavaScript program to get the length of an JavaScript object.`;

var stu = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

var stuLength = Object.keys(stu).length; //get length of object
console.log('Size of the current object', stuLength);

const four = document.getElementById('4');
four.innerHTML = `4.)Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.`;

var library = [
  {
    title: 'Bill Gates',
    author: 'The Road Ahead',
    readingStatus: true
  },
  {
    title: 'Steve Jobs',
    author: 'Walter Isaacson',
    readingStatus: true
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    readingStatus: false
  }];

for (var i = 0; i < library.length; i++) {
  var book = "'" + library[i].title + "'" + " by " + library[i].author;
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  }
  else {
    console.log("You still need to read " + book);
  }
}

const five = document.getElementById('5');
five.innerHTML = `5.)Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.
Volume of a cylinder : V = πr2h
where r is the radius and h is the height of the cylinder.`;

function Cylinder(cyl_height, cyl_diameter) {
  this.cyl_diameter = cyl_diameter;
  this.cyl_height = cyl_height;
}
Cylinder.prototype.Volume = function () {
  var radius = this.cyl_diameter / 2;
  return this.cyl_height * Math.PI * radius * radius;
}
var cyl = new Cylinder(7, 4);
console.log("Volume = ", cyl.Volume().toFixed(4)); // for 4 digit

const six = document.getElementById('6');
six.innerHTML = `6.)Write a Bubble Sort algorithm in JavaScript.
Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
Sample Data: [6,4,0, 3,-2,1]
Expected Output : [-2, 0, 1, 3, 4, 6]`;

const seven = document.getElementById('7');
seven.innerHTML = `7.)Write a JavaScript program which returns a subset of a string.
Sample Data: dog
Expected Output: ["d", "do", "dog", "o", "og", "g"]`;


function subSet(str) {
  var _subset = [];
  for (var m = 0; str.length > m; m++) {
    for () {

    }
  }
}




