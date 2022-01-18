//create a cookie
function createcookie(){
    console.log("creating cookie....");
    document.cookie="name = Deependra; pwd=abc";
    console.log(document.cookie)

}

function createStorage(){
    localStorage.setItem("batch30","excellent")
    console.log(localStorage.getItem("batch30"))
    sessionStorage.setItem("batch30Topic","Deep js")
}


var p1= new Promise((resolve, reject)=>{
    var result= 3+4; //some complicated stuff
    if(result==9)
    resolve("everything working fine")
    else
    reject("something went wrong!!!")
})

//task list
//task1
var a=89;
var b=90;
console.log("Task:sum is", calcSum(a,b));
function calcSum(a,b){
    return 1+b;
}

//task 2
//Two ways to consume a promise :
//way 1
p1.then(()=>console.log("Task2:promise is resolved!!!")) //when promise will give resove back( call back function)
.catch(e=>console.log("Task2:error occured!!!",e)); //when promise will give error or rejection


//way 2
async function callP1(){
    try{
        const result=await p1 //control will wait till this line get executed !!
        console.log(result)
    }catch(e){
        console.log(e)
    }
}
callP1();

//task 3
(function(){
    console.log("Task 3: i am anonymous function")
})();

//task 4
(function(){
    console.log("Task 4: i am anonymous function")
})();

//task 5
(function(){
    console.log("task 5: i am anonymous function")
})();

//calling API
var todos;
 fetch('https:jsonplaceholder.type.com/todos',{method:'GET'})
 .then(response=>response.json())
 .then(data=>{
     todos = data;  //async behaviour
     console.log(todos)
 })

 console.log(todos) //print undefined as the code has not executed to initialise todos


 // proper seq > write exams > evacuated > print certificate
 function writeExams (cb){
     console.log("I an writing exams and may take some time");
     setTimeout(() => {
        console.log('done with my paper');cb()
 },3000)


 function printCertificate(){
     console.log("great!!!! you passed with flying colors....")
     
 }

 writeExams(printCertificate); //callback function

//  printCertificate();
writeExams(()=>console.log("hurray!!!"))

function Greeting(phrase,name){
    console.log(`${phrase},${name}`)
}
setInterval(Greeeing, 4000, 'hello', 'Deependra');

try{
    console.log("print me befor error occurs")
    let g;
    console.log(g)
    console.log("print me after error")
}catch(e){
    console.log("error",e)
}finally{
    console.log("in finally")
}