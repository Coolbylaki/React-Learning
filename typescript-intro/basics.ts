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

// Array
let hobbies: string[];

hobbies = ["hello", "world", "testing"];

let mixedArray: (number | string)[];

mixedArray = ["test", 23, 22, "hello"];

// Object
type Person = {
	name: string;
	age: number;
};

let person: Person;

person = {
	name: "Max",
	age: 32,
};

let people: Person[];

people = [
	{ name: "Max", age: 32 },
	{ name: "Joe", age: 23 },
	{ name: "Sam", age: 54 },
];

// Type inference

let course: string | number = "React - The Complete Guide";

// course = 1235; can't because it's already set to :string
course = 12345; // Now it can because of union type

// Functions & types

function add(a: number, b: number) {
	return a + b;
}

function printOutput(value: any): void {
	console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
	const newArray = [value, ...array];
	return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // [a, b, c, d]
