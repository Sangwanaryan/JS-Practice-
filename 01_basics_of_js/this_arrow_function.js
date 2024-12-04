/*
const user = {
    userName : "Aryan",
    price : 999,
    
    welcomeMessage : function()
    {
        // console.log(`${this.userName}, Welcome to website`);
        console.log(this);    // this -> current object of the program
        
    }
}


// user.welcomeMessage()

// console.log(this)    // this -> empty object


function chai()  // can be accessed before initialized due to hoisting 
{
    console.log(this) // this not used in function only used in objects

}

// chai();


const chai_chai = function()  // also known as experssion and can't be accessed before initialized  
{
    let userName = " Aryan Sangwan "
    console.log(this.userName);
}

// chai_chai()

const coffee = () => {      // Arrow Function -> remove keyword "function" and put "=>" after parenthesis
    let userName = "Aaditya"
    console.log(this);   // Give empty object

}

*/


const two = (num1, num2, num3) => {
    return num1 + num2 + num3
}

// console.log(two(3,5,9))

// const three = (value) =>( value + 1);

// console.log(three(3000));


const four = () => ({name : "Aryan"}) // return object only when paranthesis are there

(function chai(){              // IIFE ->   immediately invode function expression [Named IIFE]
    console.log("DB Connected")
})();

