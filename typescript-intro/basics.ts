// Primitives: number, string, boolean
// Complex types: arrays, objects
// Function types, parameters

// Primitives
let age: number;
age = 12;

let height: number = 189;

let userName: string = "Coolbylaki";

let isInstructor: boolean = true;

// Complex types
let hobbies: string[];

hobbies = ["hello", "world", "testing"];

let mixedArray: (number | string)[];

mixedArray = ["test", 23, 22, "hello"];

let person: {
	name: string;
	age: number;
};

person = {
	name: "Max",
	age: 32,
};

let people: { name: string; age: number }[];

people = [
	{ name: "Max", age: 32 },
	{ name: "Joe", age: 23 },
	{ name: "Sam", age: 54 },
];
