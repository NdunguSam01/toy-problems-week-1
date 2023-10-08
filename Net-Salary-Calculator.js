//Importing prompt-sync used to get input from benefitssaluser
let amountsPrompts = require('prompt-sync')();

//Setting a prompt message that will be diplayed to the user and saving the salary amount the user will input into the basicSalary variable
let basicSalary=amountsPrompts("Enter basic salary: ")

//Setting a prompt message that will be diplayed to the user and saving the benefits amount the user will input into the benefits variable
let benefits=amountsPrompts("Enter the benefits: ")

//Outputing the basic salary and the benefits
console.log(`Basic salary: Kshs. ${basicSalary}`)
console.log(`Benefits: Kshs. ${benefits}`)

//Declaring a function to calculate the NSSF deduction
const nssfDeduction=basicSalary=>
{
    //Declaring a variable that will be used to store the NSSF amount upon calculation
    let nssfAmount=0

    //Evaluating the salary and storing the nssf amount to the variable created above
    if(basicSalary >= 18000)
    {
        nssfAmount=2160
    }
    else
    {
        nssfAmount=basicSalary * 0.12
    }
    return nssfAmount
}
//Invoking the function for calculating NSSF amount to be deducted
console.log(`NSSF Contribution: Kshs. ${nssfDeduction(basicSalary)}`)

//Declaring a function to calculate the PAYE amount an employee has to pay
const payeCalculation=(basicSalary, benefits)=>
{
    //Getting the taxable income by subtracting the nssfAmount from the basic salary and adding the benefits to the result
    const taxableIncome=parseFloat(basicSalary) + parseFloat(benefits)

    //Declaring a constant personal relief value and assigning a value to it
    const personalRelief=2400

    //Declaring the payeAmount variable and assigning a value of 0 to it
    let payeAmount=0

    if(taxableIncome <= 24000)
    {
        payeAmount=taxableIncome * 0.1
    }
    else if(taxableIncome >24000 && taxableIncome <= 32333)
    {
        payeAmount=taxableIncome * 0.25
    }
    else if(taxableIncome > 32334 && taxableIncome <= 500000)
    {
        payeAmount=taxableIncome * 0.30
    }
    else if(taxableIncome > 50000 && taxableIncome <= 800000)
    {
        payeAmount=taxableIncome * 0.325
    }
    else if(taxableIncome > 800000)
    {
        payeAmount=taxableIncome * 0.35
    }

    //Calculating the total tax payable by subtracting the relief from the PAYE amount
    let taxPayable=parseFloat(payeAmount) - parseFloat(personalRelief)
    return taxPayable
}
//Invoking the function for calculating PAYE amount
console.log(`PAYE payable: Kshs. ${payeCalculation(basicSalary, benefits)}`)

//Declaring a function to be used to calculate the NHIF contribution
const nhif=basicSalary=>
{
    //Declaring a variable to be used to store the contribution amount
    let nhifContribution;

    //Assigning a value to the nhifContribution variable based on the salary amount provided by the user
    if(basicSalary <= 5999)
    {
        nhifContribution=150
    }
    else if(basicSalary >= 6000 && basicSalary <= 7999)
    {
        nhifContribution=300
    }
    else if(basicSalary >= 6000 && basicSalary <= 7999)
    {
        nhifContribution=400
    }
    else if(basicSalary >= 8000 && basicSalary <= 11999)
    {
        nhifContribution=400
    }
    else if(basicSalary >= 12000 && basicSalary <= 14999)
    {
        nhifContribution=500
    }
    else if(basicSalary >= 15000 && basicSalary <= 19999)
    {
        nhifContribution=600
    }
    else if(basicSalary >= 20000 && basicSalary <= 24999)
    {
        nhifContribution=750
    }
    else if(basicSalary >= 25000 && basicSalary <= 29999)
    {
        nhifContribution=850
    }
    else if(basicSalary >= 30000 && basicSalary <= 34999)
    {
        nhifContribution=900
    }
    else if(basicSalary >= 35000 && basicSalary <= 39999)
    {
        nhifContribution=950
    }
    else if(basicSalary >= 40000 && basicSalary <= 44999)
    {
        nhifContribution=1000
    }
    else if(basicSalary >= 45000 && basicSalary <= 49999)
    {
        nhifContribution=1100
    }
    else if(basicSalary >= 50000 && basicSalary <= 59999)
    {
        nhifContribution=1200
    }
    else if(basicSalary >= 60000 && basicSalary <= 69999)
    {
        nhifContribution=1300
    }
    else if(basicSalary >= 70000 && basicSalary <= 79999)
    {
        nhifContribution=1400
    }
    else if(basicSalary >= 80000 && basicSalary <= 89999)
    {
        nhifContribution=1500
    }
    else if(basicSalary >= 90000 && basicSalary <= 99999)
    {
        nhifContribution=1600
    }
    else if(basicSalary >= 100000)
    {
        nhifContribution=1700
    }

    //Returning the NHIF Contribution amount and using toLocalString to format the result as a number with the thousand separator
    return nhifContribution
}
//Invoking the function for calculating payable NHIF amount
console.log(`NHIF Contribution: Kshs. ${nhif(basicSalary)}`)

//Declaring a function to calculate the housing levy
const housingLevy=(basicSalary)=>
{
    return basicSalary * 0.015
}
//Invoking the function for calculating the housing levy
console.log(`Housing levy: Kshs. ${housingLevy(basicSalary)}`)

//Declaring a function to calculate the net pay
const netPay=(basicSalary, benefits)=>
{
    const taxableIncome=parseFloat(basicSalary) + parseFloat(benefits)
    const payeAmount=payeCalculation(basicSalary, benefits)
    const nhifContribution=nhif(basicSalary)
    const housingLevyAmount=housingLevy(basicSalary)

    const netSalary=taxableIncome - (parseFloat(payeAmount) + parseFloat(nhifContribution) + parseFloat(housingLevyAmount))

    return netSalary
}
//Invoking the function for calculating the housing levy
console.log(`Net Salary: Kshs ${netPay(basicSalary, benefits)}`)