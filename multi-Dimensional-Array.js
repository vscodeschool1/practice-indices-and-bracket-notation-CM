// Task 1: Create array
const library = [
    ["The Lion King", "Frozen", "Toy Story"],
    ["Spider-Man", "Batman", "Superman"],
    ["Hunger Games", "Twilight", "Divergent"]
];

console.log("Library:");
console.log(library);


// Task 2: Access with numbers
console.log("Task 2:");
console.log(library[0][0]);
console.log(library[0][1]);
console.log(library[0][2]);
console.log(library[1][0]);
console.log(library[1][1]);
console.log(library[1][2]);
console.log(library[2][0]);
console.log(library[2][1]);
console.log(library[2][2]);


// Task 3: Access with variables
console.log("Task 3:");
let row = 0;
let item = 0;
console.log(library[row][item]);

row = 0;
item = 1;
console.log(library[row][item]);

row = 0;
item = 2;
console.log(library[row][item]);

row = 1;
item = 0;
console.log(library[row][item]);

row = 1;
item = 1;
console.log(library[row][item]);

row = 1;
item = 2;
console.log(library[row][item]);

row = 2;
item = 0;
console.log(library[row][item]);

row = 2;
item = 1;
console.log(library[row][item]);

row = 2;
item = 2;
console.log(library[row][item]);


// Task 4: Loop second shelf
console.log("Task 4:");
for (let i = 0; i < library[1].length; i++) {
    console.log(library[1][i]);
}