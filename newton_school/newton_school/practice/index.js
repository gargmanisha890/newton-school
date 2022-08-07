// let arr = [1, 2, 3, "manisha"];
// console.log(arr);

// let obj = {
//     a: 5,
//     b: 6
// }
// console.log(obj.a);

// function reverseString(str) {
//     // Step 1. Use the split() method to return a new array
//     var splitString = str.split(""); // var splitString = "hello".split("");
//     // ["h", "e", "l", "l", "o"]

//     // Step 2. Use the reverse() method to reverse the new created array
//     var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
//     // ["o", "l", "l", "e", "h"]

//     // Step 3. Use the join() method to join all elements of the array into a string
//     var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
//     // "olleh"

//     //Step 4. Return the reversed string
//     return joinArray; // "olleh"
// }

// reverseString("hello");

// class in js & inheritance in js & oops in js

class A {

    constructor(givenName, givenExperience, givenAge, givenDesignation) {
        this.Name = givenName;
        this.age = givenAge;
        this.experience = givenExperience;
        this.designation = givenDesignation;
    }
    print() {
        console.log(this);
    }
    slogan(){
        return `my name is ${this.Name} & this is my solgan`;
    }
    static multiple(a, b) { //if we don't want to use this when we can use static and we directly use this
        return a + b;
    }
}

class program extends A { //inheritance 
    constructor(Language, givenAge, givenDesignation, givenExperience, givenName) {
        super(givenAge,givenName,givenExperience,givenDesignation);
        this.language = Language;
    }
}
const a= new A("manisha" ,5,35,'programar'); //oops in js
console.log(a);
console.log(a.slogan());
const b = new A("poonam",1,18,'coder');
console.log(b);
// a.print();
// console.log(a.print());
console.log(A.multiple(5, 9));
const mg = new program('javascript', 21, 'programer', 12, 'manisha'); //inheritance
console.log(mg);
