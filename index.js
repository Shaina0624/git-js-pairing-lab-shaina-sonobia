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
