//01
let car = {
    "make": "Toyota",
    "model": "Corolla",
    "year": 2021
};

console.log(car.year);

//02
let person = {
    "name": "Steve",
    "address": {
        "street": 21,
        "city": "HCM",
        "country": "Viet Nam"
    }
};

console.log(person.address.street);

//03
let student = {
    "name": "Steve",
    "grades": {
        "math": 8,
        "english": 8
    }
};

console.log(student["grades"]["math"]);

//04
let settings = {
    "volume": 100,
    "brightness": 100
};

settings.volume = 50;

console.log(settings);

//05
let bike = {
    "name": "moto",
    "price": "200"
};

bike.color = "red";

//console.log(bike);

//06
let employee = {
    "name": "Steve",
    "age": 30
}

delete employee.age;

//console.log(employee);

//07
let school = {
    "classA": ["An", "Bình", "Châu"],
    "classB": ["Đào", "Hương", "Giang"]
};
