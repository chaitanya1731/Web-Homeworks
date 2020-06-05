
//----- Qsn 1
/*The problem with the code is that array daysOfWeek is declared globally as var.
Instead we can use const to declare it. Also since it is declared globally,
the array will get initialized with every function call. Hence to initialize it only once,
we can declare it inside the closure of the returning function.

const getDayOfWeek = (function() {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return function(n) {
        return daysOfWeek[n];
    };
})();*/


//-----Qsn 2
/*class Counter{
    constructor(){
        let counter = 0;
        this.inc = function inc() { counter++; return counter; };
        this.val =  function val() { return counter; }
    }
}
c1 = new Counter();
console.log(c1);
c2 = new Counter();
console.log(c2);

console.log(c1.inc());
console.log(c1.inc());
console.log(c2.val());
console.log(c2.inc());
console.log(c2.val());
console.log(c1.val());*/


//-----Qsn 3
/*The function defined here is an asynchronous callback. It will execute when file loading is completed.
To make it run, we need to wrap our call in a function and pass in our own callbacks.
Or rather just call the functions using async and await. Any of both the solutions should work.

const DIR = `${process.env.HOME}/my-stuff`;
function readFile(callback) {
    fs.readFile(`${DIR}/${filename}`, function (err, result) {
        if (err) return callback(err)
        callback(null, result)
    })
}
readFile(function (err, content) {
    console.log(content)
})


//OR
const DIR = ""
async function readFile(filename) {
    await fs.readFile(`${DIR}/${filename}`,
        function(err, result) {
            //console.log(err + " Result = " + result);
            return result;
        });
}
const contents = readFile('input.txt');
*/


//https://stackoverflow.com/questions/10058814/get-data-from-fs-readfile

//-----Qsn 4
/*
The given code is slow because it calls the function getShipCost() using await
serially many times for all shipping companies. Since these companies are independent,
we can use promise.all() and make parallel calls to that function.

const SHIPPING_PARAMS = {
    usps: { ... },
    ...,
    ups: { ... },
    fedex: { ... },
};
async function cheapestShipping(fromZipCode, toZipCode, shipType) {
    const promises = Object.entries(SHIPPING_PARAMS)
                            .map(([shipper, params]) => {
                                getShipCost(params, fromZipCode, toZipCode, shipType)
                            });
                    return (await Promise.all(promises)).reduce((cheapest, cost) =>
                        cost < cheapest ? cost: cheapest, Number.MAX_SAFE_INTEGER)
}
*/


//-----Qsn 5
/*function mul3(a, b, c) { return a*b*c; }
function curried_mul3(a) {
    return function(b) {
        return (c) => mul3(a, b, c);
    }
}*/


//-----Qsn 6
/*
Since both the functions return this.x, that means they return the value of x in their respective objects.
Therefore, obj1.f() returns 21
obj2.f() returns 31 and
f() will return the value of obj2.x since f is bound to obj2.
Therefore f() returns 31
Hence the output will be = 21 - 31 + 31 = 21 */


//-----Qsn 7
/*function sumCont(array, ret, index) {
    return index === array.length
        ? ret(0)
        : sumCont(array, x=> { ret(array[index-1] += x) }, ++index);
}

sumCont([1,2,3,4,5], x=>console.log(x), 0)*/



//-----Qsn 9
/*1. True - Since return type of String.match() function is array,if the match is found then this will return the match as an array.
It will throw an error inside the if statement since it requires the Boolean XPathExpression.
2. False - It is true that according to Javascript naming conventions, you should only capitalise the first character of the name of a function
 when you need to construct the object by "new" keyword. This is called "the Constructor Invocation Pattern" in the book -
 "Javascript: the good parts". But, as long as we reference the constructors and functions with the same casing the code should Work.
 Hence it is not necessary or mandatory to Uppercase the first character of a function name.
3. True

4. True -

5. False - */

//-----Qsn 8

/*Specification bugs -
- The object that maps student names to respective inner object (assignments and total), what if two students name is same, it may raise a conflict. Instead we can assign their roll numbers as an id


Coding bugs -
- to access the total of students in object, we need to write grades[name].total
- Same for letters.name, instead it should be letters[name]
- There is missing comma (,) where c and sum is initialized
- There is no check to see if empty object passed, in that case the number of students will be 0. That means the function might return sum/0 as aggregate which can print NaN
- in CUTOFFS object, 100 is put in quotes '', it identifies that as string
- if is not breaking after assigning the letter grade to the respective student. Resulting in assigning the "A" grade to everyone

Style bugs -
- Instead of returning the array of average as first element and list of students and their grades, we can write a seperate functions to get aggregate and list of students
- Same function is used to calculate both average and grades, this violates the basic rule of coding that each function should be dedicated to one proper calculation
- Code is poor in style since all the modules are calculated in the same function
- Object oriented features are not properly styled. Could use OOPS techniques in better way
- To iterate over the list, for-in loop is used, there are inbuilt javascript functions defined to iterate over the list

Brittleness bugs -
- No proper exception handling is done in the code. If any of the minor mistake happens in the code, it might raise an exception.
- Example, while passing student object, it is passing only names property of students, instead what if roll number property was passed, it now has 2 properties, i.e. Names and Roll numbers. Here the for-in loop will not know the correct property. It has to be determined using .hasOwnProperty() function of the object.
- Also if empty array is passed, it might break due to divide by 0 exception in average.
*/


const CUTOFFS = { 60: 'F', 65: 'D', 75: 'C', 85: 'B', 100: 'A' };

 /*console.log(assign({
 ['Ben Bitdiddle']: { hw1: 88, total: 78 },
 [ 'Alyssa P. Hacker']: { hw1: 100, total: 97 },
 [ 'Louis Reasoner']: { hw1: 66, total: 62 }
 }, CUTOFFS))

*/
/*function assign(grades, cutoffs) {
    const letters = {};
    let c = 0,
    sum = 0;
    for (const name in grades) {
        var total = grades[name].total;
        sum += total;
        c++;
        for (const c in cutoffs) {
            if (total < c) {
                letters[name] = cutoffs[c];
                break;
            }

        }
    }
    return [sum/c, letters];
}*/
const grade = {
    ['Ben Bitdiddle']: { hw1: 88, total: 78 },
    [ 'Alyssa P. Hacker']: { hw1: 100, total: 97 },
    [ 'Louis Reasoner']: { hw1: 66, total: 62 }
};

function getAggregate(grades){
    const totalStudents = Object.getOwnPropertyNames(grades)
    const sum = totalStudents.reduce((acc, index) => acc + grades[index].total, 0)
    return (totalStudents.length !== 0) ? sum/totalStudents.length : 0
}

function getLetterGrades(grades, cutoffs){
    const letterGrade = {}
    const totalStudents = Object.getOwnPropertyNames(grades)
    totalStudents.map(name=> {
        let total = grades[name].total;
        for (let marks in cutoffs){
            if(total < marks){
                letterGrade[name] = cutoffs[marks];
                break;
            }
        }
    })
    return letterGrade;
}
console.log(getAggregate(grade));
console.log(getLetterGrades(grade, CUTOFFS))