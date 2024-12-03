const obj1 = {
    name : "aryan",
    lastName : "sangwan",
    age : "21",
    gender : "male",
    f : function(){
        return "Jaat";
    }

}

const obj2 = {
    // name : "akash",
    // lastName : "Pandey",
    age : 20,
    gender : "Male"
}

// const newObj = {...obj1, ...obj2}

Object.assign(obj1,obj2)

// console.log(newObj)

// console.log(Object.values(newObj));
// console.log(Object.entries(newObj));
// console.log(Object.keys(newObj));

// Object.freeze(newObj)

// newObj.name = "Daksh"
// newObj.age = 20
console.log(obj1);







