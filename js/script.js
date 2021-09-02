// Task #1

// 1.
let user1 = {};
// 2.
user1.name = 'John';
// 3.
user1.surName = 'Smith';
// 4.
user1.name = 'Pete';
// 5.
delete user1.name;


// Task #2

const user2 = {

    name: 'John',

};

user2.name = 'Pete';
console.log(user2);
// Объект, объявленный через const, может быть изменён.

// Task #3

let salaries = {

  John: 100,

  Ann: 160,

  Pete: 130

}

let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

