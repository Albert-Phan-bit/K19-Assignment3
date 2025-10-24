//01
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum = sum + i;
};

console.log(sum);

//02
let a = 0;
for(let i = 2; i < 10; i++) {

    for (let j = 2; j < 10; j++) {
        a = i * j;
        console.log(i + " x " + j + " = " + a);
    };
};

//03
let arr = [];
for( let i = 1; i < 100; i++) {
    if( i%2 !== 0) {
        arr.push(i);
    };
};

console.log(arr);

//04
for(let i = 1; i < 11; i++) {
    console.log("user" + i + "@example.com");
};

//05
let doanhThuArr = [
    {"month": 1, "total": 100},
    {"month": 2, "total": 100},
    {"month": 3, "total": 100},
    {"month": 4, "total": 100},
    {"month": 5, "total": 100},
    {"month": 6, "total": 100},
    {"month": 7, "total": 100},
    {"month": 8, "total": 100},
    {"month": 9, "total": 100},
    {"month": 10, "total": 100},
    {"month": 11, "total": 100},
    {"month": 12, "total": 100}
];

let sumDoanhThu = 0;

for (let i = 0; i < 12; i++) {
    sumDoanhThu = sumDoanhThu + doanhThuArr[i].total;
};

console.log(sumDoanhThu);

