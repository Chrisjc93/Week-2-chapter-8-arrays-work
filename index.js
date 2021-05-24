let emptyArray = [];
console.log(emptyArray.length);


let programmingLanguages = ["JavaScript", "Python", "Java", "C#"];

// seperate by comma, but dont need a comma on the last item.
let javaScriptFrameworks = [
   "React",
   "Angular",
   "Ember",
   "Vue"
];

console.log(programmingLanguages[2]); // index starts at 0
console.log(programmingLanguages.length);

let grabBag = ["A string value", true, 99, 105.5];

// It’s rare that you would store data of multiple types in the same array, because grouped data is usually the same type. In other languages, such as Java and C#, all items in an array have to be of the same type

let classes = ["science, computer, art"]; // the length tries to trick you because only 1 quote, so length = 1

let teachers = ["Jones", "Willoughby", "Rhodes"]; // length = 3

console.log(teachers.length)

console.log("NEW CHAPTER---------------------------")
programmingLanguages = [
   "JavaScript", // index 0
   "Python",     // index 1
   "Java",       // index 2
   "C#"          // index 3
];
console.log(programmingLanguages[0]);
console.log(programmingLanguages[3]);

// What will happen when index 4 is requested?
console.log(programmingLanguages[4]); // UNDEFINED undefined is a special value in JavaScript that means no value has been assigned.

javaScriptFrameworks = ["React", "Angular", "Ember"]; 
console.log(javaScriptFrameworks);

// Set the value of index 2 to be "Vue"
javaScriptFrameworks[2] = "Vue";

// Notice the value at index 2 is now "Vue"
console.log(javaScriptFrameworks);

//arrays are mutable

let charles = ['coder', 'Tech', 47, 23, 350]; // doesnt sort like you think it would, goes off first letter/ number
charles.sort();
console.log(charles);

let str = 'LaunchCode students rock!';

console.log(str.split(" "));

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort(); // it does thatever the difference between 2 and 5 is, = 3 so index 2 is edamame and 5 is milk, stops before 5.
console.log(groceryBag);
console.log(selectedItems);

let shuttleCrews = [
   ['Robert Gibson', 'Mark Lee', 'Mae Jemison'],
   ['Kent Rominger', 'Ellen Ochoa', 'Bernard Harris'],
   ['Eilen Collins', 'Winston Scott',  'Catherin Coleman']
];

console.log(shuttleCrews[0][2]);
console.log(shuttleCrews[1][1]);
console.log(shuttleCrews[2][1]);

//In a multi-dimensional array, both the inner and outer arrays can be altered with array methods. However, bracket notation must be used correctly.

// To apply a method to the outer array, the syntax is:

 // multiArrayName.method();

//To apply a method to one of the inner arrays, the syntax is:

  //multiArrayName[indexOfInnerArray].method();

let newCrew = ['Mark Polansky', 'Robert Curbeam', 'Joan Higginbotham'];
console.log("---------------------------");
// Add a new crew array to the end of shuttleCrews
shuttleCrews.push(newCrew);
console.log(shuttleCrews[3][2]);

// Reverse the order of the crew at index 1
shuttleCrews[1].reverse();
console.log(shuttleCrews[1]);

let school = [
   ["science", "computer", "art"],
   ["Jones", "Willoughby", "Rhodes"]
];
console.log(school);

 // What are the two dimensional indexes for "Jones"? // = 1,0

 // How would you add "dance" to the array at school[0]? // school[0].unshift('dance');

school[0].unshift('dance');
console.log(school);

// How would you add "Holmes" to the array at school[1]?
school[1].push('Holmes');
console.log(school);