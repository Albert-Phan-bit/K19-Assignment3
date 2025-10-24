//01

function multiply(a, b) {
   console.log(a * b);
};

let result01 = multiply(5, 8);

let result02 = multiply(8, 8);

//02

function findMin(c, d, f) {
    if ( c < d && c < f) {
        console.log("Số nhỏ nhất là: " + c);        
    };
    if ( d < c && d < f) {
        console.log("Số nhỏ nhất là: " + d);        
    };
    if ( f < d && f < c) {
        console.log("Số nhỏ nhất là: " + f);        
    };
    if ( c === d && c < f) {
        console.log("Số nhỏ nhất là: " + c);        
    };
    if ( c === f && c < d) {
        console.log("Số nhỏ nhất là: " + c);        
    };
    if ( d === f && d < c) {
        console.log("Số nhỏ nhất là: " + d);        
    };
    if ( c === d && c === f) {
        console.log("Không có số nhỏ nhất");        
    };
};

let result03 = findMin(8, 8, 9);

let result04 = findMin(123, 324, 235);

//03

function getTopStudents(student, threshold) {
    let passed = [];
    for (let i = 0; i < student.length; i++){
        if (student[i].score >= threshold){
            let passedStudent = {
                name: student[i].studentName,
                score: student[i].score
            };
            passed.push(passedStudent);
        };
    };
    console.log("Danh sách học sinh qua môn: ", passed);
};

let student = [
    {studentName: "A", score: 8},
    {studentName: "B", score: 6},
    {studentName: "C", score: 7},
    {studentName: "D", score: 1},
    {studentName: "E", score: 2},
    {studentName: "F", score: 3},
    {studentName: "G", score: 4},
    {studentName: "H", score: 5}    
];

let threshold = 6;

let result05 = getTopStudents(student, threshold);

//04

function calculateInterest(principal, rate, years) {
    total = principal + ( principal * rate * years ) / 100; 
    console.log("Tổng số tiền sau " + years + " năm là: " + total);
}

let principal = 100000000;
let rate = 0.065;
let years = 5;

let result06 = calculateInterest(principal, rate, years);