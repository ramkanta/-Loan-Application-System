/*const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");*/

/***const bankbalance=document.getElementById("bank_Balance");
const debt=document.getElementById("debt_previous");
const annual_income=document.getElementById("annual_income");
const yearly_spent=document.getElementById("yearly_spent");***/

let YearlySpend = document.getElementById("Yearly_Spend");
let PreviousLoan = document.getElementById("Previous_Loan");
let Balance = document.getElementById("Balance_Fd");
let YearlyIncome = document.getElementById("Yearly_Income");

/*let a=parseInt(YearlySpend);
let b=parseInt(PreviousLoan);
let c=parseInt(Balance);
let d=parseInt(YearlyIncome);*/

let TotalSpend = document.getElementById("Total");
let TotalEarning = document.querySelector(".Total_Earning");
let RiskRatio = document.querySelector(".Risk_Ratio");


let submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function()
{
    Spend = YearlySpend.value;
    Loan = PreviousLoan.value; 
    Balance = Balance.value; 
    Income = YearlyIncome.value;

    TSpend = ( Spend + Loan );
    TEarning = ( Balance + Income );
    RiskRatio = (TSpend)/(TEarning);
    //console.log(TotalSpend);
    //console.log(TotalEarning);

    /*let x=parseInt(TSpend);
    let y=parseInt(TotalEarning);
    let z=parseInt(RiskRatio);*/


    

    

    TotalSpend.innerHTML = Math.floor(TSpend);
    TotalEarning.innerHTML = Math.floor(TEarning);
    RiskRatio.innerHTML = Math.floor(RiskRatio);
  


    /***balance=bankbalance.value;
    debt=debt.value;
    annual_income=annual_income.value;
    yearly_spent=yearly_spent.value;

    risk_ratio=(yearly_spent+debt)/(balance+annual_income);**/

    /*
    if(risk_ratio>0.5)
    {
        console.log("Sorry Loan will not be granted as it is very risky");
    }
    else
    {
       
        /**amount = loanAmount.value;
        tenure = (loanTenure.value)*12; // 1Year = 12 months
        rate = (loanRate.value)/12/100; // loan rate per year / 100 = loan percentage

        emi = ((amount * rate * (1+rate)**tenure)/(((1+rate)**tenure)-1));
        //console.log(emi);
        total = emi * tenure; // total amount to be paid including interest
        interest = total - amount **/// interest = total amount - principle amount
       // console.log(total);
        //console.log(interest);

        /*loanEmi.innerHTML = Math.floor(emi);
        loanPrinciple.innerHTML = Math.floor(amount);
        loanTotal.innerHTML = Math.floor(total);
        loanInterest.innerHTML = Math.floor(interest);*/


       //Loanchart
        /*let xValues = ["Principle", "Interest"];
        let yValues = [amount, Math.floor(interest)];

        let barColors = ["#961251", "#000000"];

        new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });


    }*/


    /*amount = loanAmount.value;
    tenure = (loanTenure.value)*12; // 1Year = 12 months
    rate = (loanRate.value)/12/100; // loan rate per year / 100 = loan percentage

    emi = ((amount * rate * (1+rate)**tenure)/(((1+rate)**tenure)-1));
    //console.log(emi);
    total = emi * tenure; // total amount to be paid including interest
    interest = total - amount // interest = total amount - principle amount
   // console.log(total);
    //console.log(interest);

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);


    //Loanchart
    let xValues = ["Principle", "Interest"];
    let yValues = [amount, Math.floor(interest)];

    let barColors = ["#961251", "#000000"];

    new Chart("loanChart", {
        type: "pie",
        data: {
            labels: xValues,
            datasets:[{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            title: {
                display:false,
            }
        }
    });*/


});
