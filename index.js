//Code your solutions in this file

// number 1
function fiveToOneHundred(){
    for (let i = 5; i <= 100; i++) {
    console.log(i)
    }
}
console.log(fiveToOneHundred());

// number 2
function multiplesOfThree(){
    for( let i = 1 ; i <= 100; i++){
        if(i % 3 === 0){
        console.log(i)
        }
    }
}
console.log(multiplesOfThree());

// number 3
function multiplesOfThreeOrFive() {
    for( let i = 1 ; i <= 100; i++){
        if (i % 3 === 0 || i % 5 === 0){
            console.log(i)  
        } 
    }
}
console.log(multiplesOfThreeOrFive());

// number 4
function untilNum(num) {    
    let i = 1;
   while( i <= num ) {
       console.log(i)
       i++;
   } 
}
console.log(untilNum(5))

//number5
function multiply(num1, num2) {
    return num1 * num2
}
console.log(multiply(2, 3))

//number 6
function add(num1, num2) {
    if (num1 === num2){
    return ( num1 + num2 ) * 3  
    } else { return num1 + num2} 
}
console.log(add(2, 3))

//number 7
function isNegative(num) {
    if (num < 0){
    return true
    }else {
    return false
    }
}
console.log(isNegative(23))

// number 8 
function triangleArea(h, b){    
    return (h * b) / 2
}

console.log(triangleArea(7,5))

//number 9
function betweenTwentyAndFourty(num) {
    if (num >= 20 && num <= 40) {
        return true}
        else {
        return false
        }
}
console.log(betweenTwentyAndFourty(30))