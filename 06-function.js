//01

function multiply(a, b) {
   console.log(a * b);
};

let result01 = multiply(5, 8);

let result02 = multiply(8, 8);

//02

function findMin2(x, y, z) {
    let min = x;
    if (y < min) {
        min = y;
    };
    if (z < min) {
        min = z;
    };
    return min;
}

let result03Fixed = findMin2(3, 2, 5);
console.log(result03Fixed);

let result04Fixed = findMin2(14, 53, 36);
console.log(result04Fixed);

//03

function getTopStudents(student, threshold) {
    let passed = [];
    for (let i = 0; i < student.length; i++){
        if (student[i].score >= threshold){
            passed.push(student[i].name);
            };
        };
    return passed;
    };
    

let student = [
    {name: "A", score: 8},
    {name: "B", score: 6},
    {name: "C", score: 7},
    {name: "D", score: 1},
    {name: "E", score: 2},
    {name: "F", score: 3},
    {name: "G", score: 4},
    {name: "H", score: 5}    
];

let threshold = 6;

let result05 = getTopStudents(student, threshold);
console.log("Danh sách học sinh qua môn: ", result05);    
//04

function calculateInterest(principal, rate, years) {
    total = principal + ( principal * rate * years ) / 100; 
    console.log("Tổng số tiền sau " + years + " năm là: " + total);
}

let principal = 100000000;
let rate = 0.065;
let years = 5;

let result06 = calculateInterest(principal, rate, years);