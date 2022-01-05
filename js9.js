//for loop
for(count=0; count<=5; count++){
    //body to be executed in loop
    console.log("Printin:",count)
}

for (count=10; count>=5; count--){
    //body to be executed in a loop 
    console.log("printing:",count)
}

var ages=[15,14,113,19]
console.log(ages)

for (index=0; index<ages.length; index++)
console.log("ages values:",ages[index])

//for loop variations 

//for-in use of arrays and JSON
for(key in ages){
    console.log("key:",key)
    console.log("values:",ages[key])
}

//for-of loop
for(value of ages){
    console.log("values",value)
}

//array for each
var sum=0;
function myFunc(value,index,array){
    sum+=value //sum=sum+value
}
ages.forEach(myFunc)
console.log("sum:",sum)
