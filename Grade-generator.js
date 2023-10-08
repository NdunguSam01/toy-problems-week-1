//Importing prompt-sync used to get input from user
let gradePrompt = require('prompt-sync')();

//Setting a prompt message that will be diplayed to the user and saving the value the user will input into the studentGrade variable
let studentGrade=gradePrompt("Enter student marks: ")

//Declaring the function that will be used to assign the student's grade based on the marks entered by the user
const gradeGenerator=studentGrade=>
{
    if(studentGrade < 40)
    {
        return "Student grade: E"
    }
    else if(studentGrade >= 40 && studentGrade < 49)
    {
        return "Student grade: D"
    }
    else if(studentGrade >= 49 && studentGrade <= 59)
    {
        return "Student grade:: C"
    }
    else if(studentGrade >= 60 && studentGrade < 79)
    {
        return "Student grade: B"
    }
    else if(studentGrade >= 79 && studentGrade <= 100)
    {
        return "Student grade: A"
    }
}

//Validating the user input by checking if it is a number and whether the value entered is between 0 and 100
if(studentGrade < 0 || studentGrade > 100 )
{
    console.log("Invalid marks entered!")
}
else
{
    //Invoking the function that will be executed once the condition checked above evaluates to true and console logging the result
    console.log(gradeGenerator(studentGrade))
}