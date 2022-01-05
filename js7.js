//way1
var person={
    name:'Deependra',
    age:20,
    hobbies:["Reading","Writing","sports"],
    address:{
        state:'UP',
        pin:285122
    }
}

console.log(person)
//access values of the keys
console.log(person.name)
console.log(person["name"])

//you want to add new key
person.education="B.E."
person.hobbies.push="Cricket"
person.addres.city="Kanpur"
person.address.home="Mohana"
console.log(person)

//readymade object: JSON, window, document, console, object

 var personString=JSON.stringify(person)
 console.log(personString)
 console.log(person.toString())

 //object destructing
 var{age, name}=person
 console.log(age)
 console.log(name)

 console.log("different keys in person object are:",object.keys(person))
 console.log("different values in person object are:", object.values(person))