// what are variable? containers to store data values?

/*Multi 
line 
comment*/

var number1=56
var number2=34
console.log(number1 + number2);

// 4. data types in javascript
// numbers

var num1=45;
var num2=54;
console.log(num1+num2);

// strings

var str="this is a string";
var str2="this is also a string";
console.log(str2);

// objects

var marks={
    Shoaib:60,
    Rehman:46,
    Abubakar:58,
}
console.log(marks);

//booleans

var a = true;
var b = false;
console.log(a, b);

// undefined

var und = undefined;
console.log(und)

// null

var n = null;
console.log(n);

/* At a very high level, there are two types of data types in javascript
1. Primitive data types : Undefined, Null, Booleans, Symbol, Number, String
2. Reference data types : Arrays and Objects
*/

var arr = [0,1,2,"bablu",4];
console.log(arr);

// Operators in Javasript

// Arithmetic Operators

var a = 200;
var b = 20;
console.log("the value of a+b is", a+b);
console.log("the value of a-b is", a-b);
console.log("the value of a*b is", a*b);
console.log("the value of a/b is", a/b);

// Assignment Operators

var
    c = b;
    c -= b;
    c += b;
    c /= b;
    console.log(c);

    // Comparison Operators

    var x = 20;
    var y = 10;
    console.log(x >= y);
    console.log(x == y);
    console.log(x <= y);
     
    // Logical Operators
    // logical and
     console.log(true && true)
     console.log(true && false)
     console.log(false && false)
     console.log(false && true)
     
    // Logical or
     
     console.log(false || true)
     console.log(false || true)
     console.log(false || true)
     console.log(false || true)

    // Logical Not

    console.log(!false);
    console.log(!true);

    function avg(a, b){
        return (a + b)/2;
    }
    c1 = avg(4, 6);
    c2 = avg(14, 16);
    console.log(c1, c2);

    // Conditionals in javascript

    var age = 24;
    if(age > 8){
        console.log('you are not a kid')
    }
    else{
        console.log('you are a kid')
    }

    // if-else Ladder

    if(age > 18){
        console.log('you are not a kid');
    }
    else if(age > 32){
        console.log('you are matured now');
    }
    else if(age > 42){
        console.log('ap bache nh rahy');
    }
    else if(age > 52){
        console.log('ap bary hoy gay ho');
    }
    console.log('ladder end')

    var arr = [1,2,3,4,5,6,7];
    console.log(arr);
    for(var i=0;i<arr.length;i++){
        console.log(arr[i])
    }
    arr.forEach(function(element) {
        console.log(element)
    })
    if (1 ==1 ){
    var a = "HELLO"
    var a = "HELLO HARAM"
        a = "HELLO FARZAM"
    }
    console.log(a);
    if (1 == 1){
    let a = "HELLO USAMA"
    console.log(a);
    }
    if (1 == 1) {
    const a = "HELLO MOHSIN"
    console.log(a);
    }
    for(var a = 1;a<=5;a++){
    document.write(a + "<br>");
    }
    console.log(a);
    
    // index Table

    console.table({Usama:"75" ,Shoaib:"85" ,Rehman:"55" ,Abubakar:"45"});

    // Logical AND

    var age = 21;
    if (age >= 18 && age<=22){
        console.log("yes you are eligible");
    }
    var age = 21;
    if (age >= 18 && age <= 20){
        console.log("you are not eligible");
    }
    var age = 21;
    if (age >= 22 && age <= 23){
        console.log("no you are not eligible");

        // Logical OR
    }
    var age = 21;
    var newage = 10;
    if(age >=18 || newage <= 22){
        console.log("you are eligible");
    }
    var age = 21;
    var newage = 10;
    if(age >=22 || newage <= 8){
        console.log("you are not eligible");
    }
    var age = 21;
    var newage = 10;
    if(age >= 19 || newage <=8){
        console.log("yes you are absolutely eligible");
    }

    // Logical NOT
    // False
    var a = 30;
    console.log(! a >= 20);
    // True
    console.log(! a <= 20);

    // Another True Statement
    
    var a = 20;
    if (! a <= 15){
        console.log("this is true statement in Logical Not");
    }

    // Data Types
    // Strings
    
    var x = "USAMA";
    document.write(x);
    document.write("<br>");
    document.write(typeof x);

    // NUMBERS

    var x = 35;
    document.write("<br>")
    document.write(x);
    document.write("<br>");
    document.write(typeof x);

    // Boolean

    var x = true;
    document.write("<br>")
    document.write(x);
    document.write("<br>");
    document.write(typeof x);

    // Undefined

    var x = undefined;
    document.write("<br>")
    document.write(x);
    document.write("<br>");
    document.write(typeof x);

    // Object

    var x = ["HtML","CSS","JS"];

    document.write("<br>")
    document.write(x);
    document.write("<br>");
    document.write(typeof x); 

    // arrays and object will remain object in javascript

    var x = {
        fname : "usama" ,lname : "anwar", country : "Pakistan"
    }
    document.write("<br>");
    document.write(x);
    document.write("<br>")
    document.write(typeof x);

    // Arithmetic Operators
    // Addition
    var a = 45;
    var b = 35;
    var c = a + b;
    document.write("<br>");
    document.write(c);
    console.log(c);

    // Subtraction
    var a = 50;
    var b = 40;
    var c = a - b;
    document.write("<br>");
    document.write(c);
    console.log(c);

    // Multiplication
    var a = 40;
    var b = 10;
    var c = a * b;
    document.write("<br>");
    document.write(c);
    console.log(c);

    // Loop Concepts
    // For Loop
    for (i = 2; i < 6; i++){
        console.log(i);
    }
    // Another concept of for loop
    var num = 3;
    for (var i = 1; i <= 10; i++){
        console.log(num +" x " + i +" = " +(num*i))
    }

    // While Loop
    let j = 0;
    while ( j < 10) {
        console.log(j+1);
        j +=1;
    }

    // break
    for (var i = 0; i < 8; i++) {
        if(i == 4){
            break;
        }
        console.log("I = "+i)
        document.write("I = "+i);
    }
    // Another concept of break
    for (var i = 0; i < 8; i++) {
        if(i == 4){
            continue;
        }
        console.log("I = "+i);
    }
    