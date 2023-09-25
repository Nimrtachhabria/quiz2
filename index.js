//Task 1. Write a function that can calculate the average of a array of values (numbers)
const calc = (marks) => {
    let sum = 0, average, grade;
    for (i = 0; i < marks.length; i++) {
        sum += marks[i];
        average = sum / marks.length;
    }
    return `sum of marks: ${sum}, average is : ${average}`
}
let marks = [80, 78, 99, 55, 65,70];
console.log(calc(marks));

// Task 2. Print values of array using map function along with index as following output (”Value at index 1 is 10”, …)
const n = [18, 56,88,90,20];
n.map((value, index) => {
    console.log(`Value at index ${index} is ${value}`);
});

// Task 3. Write an object of person with key values as below and print the values of the object not keys
const person = {
    name: "ali",
    age: 25,
    country: "Pakistan",
    semester: "Spring 2023",
    cms: "023-21-0089",
    details: [
        { contact_No1: "0303-1226655", email1: "ali@gmail.com" },
        { contactNo2: "0301-5677889", email2: "ahmed@gmail.com" },
        { contactNo3: "0315-5678993", email3: "saim@gmail.com" }
    ]
};
console.log(" Details of person:");
for (const key in person) {
    if (typeof person[key] !== "object") {
        console.log(person[key]);
    } else {
        console.log("Details:");
        person[key].forEach((contact, i) => {
            console.log(`Contact ${i + 1}:`);
            for (const contactKey in contact) {
                console.log(`${contactKey}: ${contact[contactKey]}`);
            }
        });
    }
}

   




