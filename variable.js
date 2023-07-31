// var laptopPrise = 40000 ;
// console.log(laptopPrise)
// var number = 10 ;
// var isExpensive = true ;
// console.log(isExpensive)
// var friendsName = ["rony", "shakib", "salim", "foysal "]

// var result =" 4.74" ;
// var result = parseFloat(result);
// var results = result.toFixed(2);
// results = parseFloat(result)
// console.log(results)


// var num1 = "3.37676"; 
// num2 =parseFloat(num1);
// num2 = num2.toFixed(2);
// num2 = parseFloat(num2);
// console.log(typeof num2)


// var numbers = [ 29, 34, 43,  39 , 23, 98, 45];
// console.log(numbers)
// // console.log( numbers.length);
// numbers[3] = 2900 ;
// console.log( numbers);


// var rolNum = [ 2, 4 , 5, 8, 23, 84, 39, 24, 43, 9, 90];
// rolNum.push(100);
// console.log(rolNum);
// console.log(rolNum)
// rolNum.pop()
// console.log(rolNum);
// rolNum.shift();
// rolNum.unshift(3333)
// console.log(rolNum);
// rolNum.push(299);
// console.log(rolNum)
// rolNum.pop();
// console.log(rolNum)


// var myHome = ["computer","laptop", "pen", "fan", "light" ];
// var myHome = myHome.indexOf("light")
// console.log(myHome);


// loop 

// var myMoney = 300;
// var eggPrise = 450; 
// if ( myMoney >= eggPrise ){
//     console.log( "i well buying the egg")
// }
// else{
//     console.log("insuffecence blance")
// }





// var totalScore =33;

// if( totalScore >= 80){
//     console.log( "congratulations...!  you'r passed A+")
// }
// else if( totalScore >= 70 ) {
//     console.log("you'r passed A")
// }
// else if( totalScore >= 60 ) {
//     console.log("you'r passed A-")
// }
// else if( totalScore >= 50 ) {
//     console.log("you'r passed b")
// }
// else if( totalScore >= 40 ) {
//     console.log("you'r passed c")
// }
// else if( totalScore >= 33 ) {
//     console.log("you'r passed d")
// }
// else {
//     console.log("you'r fail ")
// }

// var i =1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var i =5;
// while( i <= 10 ){
//     console.log("hello");
//     i++;
// }

// for(i = 0; i <= 10; i+=2 ){
//     console.log(i)
// }













/*======================================
       basic  problem solving 
=========================================*/

/*1....harry's mom gave him money and asked to buy some oranges and apples.write a program to help harry calculate much money the shopkeeper will return.*/


// var givenMoney = 1000;
// var applePrise = 400;
// var orangePrise = 300;
// var totalPrise = applePrise + orangePrise ; 
// var shopkeeperReturn = givenMoney - totalPrise ;
// console.log(shopkeeperReturn);






/* 2...find the total average marks and print the result in 2 decimal places.*/

// var math = 75.25;
// var biology = 65; 
// var chemistry = 80; 
// var physics = 35.45;
// var bangla = 99.50;

// var totalMarks = math + biology + chemistry + physics + bangla ;
// var average = totalMarks / 5 ;
// average = average.toFixed(2);
// average = parseFloat(average)
// console.log(average);




/* 3...two line string adding the one line. */

// var fastLine = "i am going to be";
// var secondLine = "an awesome web developer";
// var oneLine = fastLine +" "+ secondLine ; 
// console.log(oneLine);





/* 4...find the remainder  */
//  var num = 119 ; 
//  var reminder = num % 5 ;
//  console.log(reminder)





/* 5...var fruits =['Apple', 'banana', "orange"] a)find the index "banana" and replace "banana " with 'Mango' b) remove "orange and add 'watermelon' */


// var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits);
// fruits1 = fruits.indexOf('Banana');
// console.log(fruits1);
// fruits[1] ="mango";
// console.log(fruits)
// fruits.pop()
// console.log(fruits)
// fruits.push("Watermelon")
// console.log(fruits)






/* 6.. grading system in result . */

// var totalScore = 39; 

// if( totalScore >= 80){
//     console.log("congrats...A")
// }
// else if( totalScore >= 60){
//     console.log("congrats...B")
// }
// else if( totalScore >= 50){
//     console.log("congrats...C")
// }
// else if( totalScore >= 40){
//     console.log("congrats...D")
// }
// else{
//     console.log("you are fail")
// }





/* 7..you are given three numbers . write a program that will print the largest number using if-else. */

// var a  = 13000 ; 
// var b = 790 ; 
// var c = 450 ; 

// if (a > b && a > c ){
//  console.log(a);
// }
// else if (b > a && b > c){
//     console.log(b);
// }
// else{
//     console.log(c);
// }





/* 8..find the 'equilateral triangle ', "isosceles triangle" and "scalene triangle" using if-else . */

// var a = 3 ;
// var b = 3 ;
// var c = 3 ;

// if( a == b && b == c){
//     console.log('equilateral triangle');
// }
// else if ( a == b || b == c || c == a){
//     console.log('isosceles triangle');
// }

// else{
//     console.log('scalene triangle') 
// }





/* 9 traffic light system using if-else */

// var signal ='yellow';

// if(signal == 'red' ){
//     console.log('Very Danger stop run')
// }
// else if (signal == 'yellow'){
//     console.log('Stop Run')
// }
// else if (signal == "green"){
//     console.log("Run fast")
// }
// else {
//     console.log('Road is jem')
// }






/* 10...grading system */

// var marks =79;

// if ( marks >= 90 && marks <= 100 ){
//     console.log('A+')
// }
// else if ( marks >= 80 ){
//     console.log('A')
// }
// else if ( marks >= 70 ){
//     console.log('B')
// }
// else if ( marks >= 60 ){
//     console.log('C')
// }
// else{
//     console.log('fail F')
// };