// first code program

//  hello world

let firstprogram = "Hello World !"

console.log(firstprogram) ;

// example(1) variables :

// old version js : var
// new version js : let , const

let evennumber = 12
const oddnumber = 15

console.log(evennumber, oddnumber) ;



// example(2) Data types :

// string: ' ' , number: 1.. , Boolean: true/false , any: mixed , null: empty and undefined.

let school: string = 'The City School'
let branches_school: number = 3
let school_cleanliness: boolean = false
let miXed: any = 'it is true that i am 16 years old'
let nullPizza: null = null
let b ;


console.log(school , branches_school , school_cleanliness, miXed, nullPizza, b) ;

// (Symbol)
let uniqueId = Symbol('unique') ;
console.log(uniqueId);

// (bigInt)
let  bigNum = (90071992547409) ;
console.log(bigNum)  ;



const a = 9;
const y = 6;        

console.log('a + y is equals to', a+y)
console.log('a - y is equals to', a-y)
console.log('a / y is equals to', a/y)
console.log('a * y is equals to', a*y)

// example(3) sensitive cases :

// camelCase
// snake_case
// PascalCase

let anyName = ''
let any_name = ''
let AnyName = ''

console.log(anyName , any_name , AnyName) ;


// for 3 names 

let isUserExist = ''
let is_user_Exist = ''
let IsUserExist = ''

// example(4) word cases

let state_name :string = 'balochistan'

console.log(state_name.toLowerCase()) // balochistan

console.log(state_name.toUpperCase()) // BALOCHISTAN

console.log(state_name.replace(/\b\w/g, (char) => char.toUpperCase())) // Balochistan           



// example(5) Arrays :

// Array => 0..,[]

let friend_list : string[] = ['Osama', 'Ahmed','Ali'] 

console.log(friend_list) ;

// for mix data types:

let user_n : any[] = ['Ijaz',23,false]

console.log(user_n) ;

// selecting specific data by its index address
// for example

let firstStudentname = friend_list[0]

console.log(firstStudentname) ;

// exchanging data in an array 

let fruitBucket : string[] = ['grape', 'apple', 'mango']

fruitBucket[1] = 'banana'

console.log(fruitBucket) ;


