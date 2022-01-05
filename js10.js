console.log("Hey we are learning conditional statements!!")

//if (condition){
    //console.log("object")
    //body that will get executed if condition is  true
    //if the body has single statement then you may skip{}


//}else {
    //get executed if condition is evaluated false 
//}

//nested if else if else 
var num1=79;
var num2=25;
var nun3=57;
if(num1>num2){
    if(num2>num3)
    console.log("num1 is bigger than num2 and nun3")
}else if(num2>num3){
    console.log("num2 is bigger than num3")
}else{
    console.log("num3 is bigger than num1 and num2")
}

//if and logical operators
if(num1>num2 && num1>num3){
    console.log("num1 is bigger than num2 and num3")
}else if(num2>num1 && num2>num3){
    console.log("num2 is bigger than num1 and num3")
}else{

}

var age=19;
if(age!=undefined && age>18){
    console.log("he is eligible to drive")
}
else{
    console.log("he is not eligible to drive")
}

//switch case
var name="Deependra"
switch (name){
    case 6:console.log('bingo!! this was the right case ans is 6')
    break;
    case 7:console.log('bingo!! this was the right case and ans is 7')
break;
case "Deependra":console.log("this is a string")
break;
default:console.log("is is the default case") 
break;
}