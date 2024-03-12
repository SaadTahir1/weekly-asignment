// Array and Objects :

// array => 0..[]
// Object => {}

//for example : // object

let DriverInformation:{

    driver_fullName: string,
    driver_age: number,
    driverIsNotTeenager: boolean
    car_model:number,
    car_maker: string,

} =  {driver_fullName : "Saad Mengal",
driver_age : 25 ,
driverIsNotTeenager : true,
car_model : 1987,
car_maker : "Honda",
};

console.log(DriverInformation);

// to print specific data from an object :

console.log(DriverInformation.driver_fullName) ;
console.log(DriverInformation.driver_age) ;
console.log(DriverInformation.driverIsNotTeenager) ;
console.log(DriverInformation.car_model) ;
console.log(DriverInformation.car_maker) ;


//array and object inside object(Nested)

let furtherInformation : {

    driver_pastExperience: string[], //array

    driver_qualifications: {                          // Nested
        Graduated: Boolean,
        years_of_Experience: number,
        Character: string,
    }


} = { driver_pastExperience: ["used to do drifting in the past", " and can drive SUV and 4x4 trucks too"],

driver_qualifications: {
    Graduated: true,
    years_of_Experience: 22, 
    Character: 'good moral character'
}
}

console.log(furtherInformation);

// specific

console.log(furtherInformation.driver_pastExperience[0]);

console.log(furtherInformation.driver_qualifications.years_of_Experience);








