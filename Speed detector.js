//Importing prompt-sync used to get input from user
let speedPrompt = require('prompt-sync')();

//Setting a prompt message that will be diplayed to the user and saving the speed value the user will input into the carSpeed variable
let carSpeed=speedPrompt("Enter car speed: ")

//Setting the speed limit as a constant value with global scope
const speedLimit=70;

//Checking if the speed entered by the user is greater than the speed limit
if(carSpeed <= speedLimit)
{
    //Printing an output if the speed is less than the speed limit
    console.log("Ok.")
}
else
{
    //Invoking the function to calculate the points if the car speed is greater than the speed limit
    calculatePoints(carSpeed)
}

//Decalring the function to be used to calculate demerit points
function calculatePoints(carSpeed)
{
    //Getting the difference between the speed limit and the speed entered by the user
    let speedDifference=carSpeed-speedLimit

    //Dividing the speed difference by 5 and rounding it up to the nearest integer to get the total number of demerit points
    let points=Math.ceil(speedDifference/5)

    //Outputing the number of points accumulated by the driver
    console.log(`Points: ${points}`)

    //Checking if the points are greater than 12 and outputing a message if the evaluation is true
    if(points >= 12 )
    {
        console.log("License suspended")
    }
}