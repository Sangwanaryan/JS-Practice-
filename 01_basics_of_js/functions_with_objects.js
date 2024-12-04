function calculateCartPrice(val1, val2, ...num1)            // ... -> rest operator, send all values in array
{
    return num1;
}

console.log(calculateCartPrice(200,300,4000));


const user = {
    userName : "Aryan",
    price : 199
}


function handleObject(anyObject)
{
    console.log(`UserName is ${anyObject.userName} and price is ${anyObject.price}`)
}


// handleObject(user)

handleObject({
    userName:"Aryan",
    price: 19999
})

const myArr = [20, 400, 300, 50000]

function returnSecondValue(getArray)
{
    return getArray[1]
}

console.log(returnSecondValue(myArr));
