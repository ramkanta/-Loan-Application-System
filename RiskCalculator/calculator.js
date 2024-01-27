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

const YearlySpend = document.getElementById("Yearly_Spend");
const PreviousLoan = document.getElementById("Previous_Loan");
const Balance = document.getElementById("Balance_Fd");
const YearlyIncome = document.getElementById("Yearly_Income");

/*let a=parseInt(YearlySpend);
let b=parseInt(PreviousLoan);
let c=parseInt(Balance);
let d=parseInt(YearlyIncome);*/

const TotalSpend = document.querySelector(".Total_Spend");
const TotalEarn = document.querySelector(".Total_Earn");
const RiskRatio = document.querySelector(".Risk_Ratio");


const submitBtn = document.querySelector(".calculator-btn");

submitBtn.addEventListener("click", function(){
    // var Spend = YearlySpend;
    // var Loan = PreviousLoan; 
    // var Balance = Balance; 
    // var Income = YearlyIncome;
    // console.log(Spend);
    // YearlyIncome = YearlyIncome.ValueOf();
    // var TSpend = YearlyIncome + PreviousLoan;
    // var TEarning =  +Balance + +YearlyIncome;
    // // var RiskRatio = +TSpend/+TEarning;
    TSpend = +(YearlySpend.value) + +(PreviousLoan.value);
    console.log(TSpend);
  
    TEarn = +(Balance.value) + +(YearlyIncome.value);
    Rratio = +(TSpend)/+(TEarn);
    console.log(Rratio);
    console.log(TEarn);
    // TSpend = (1 * PreviousLoan.value) + TSpend; 

    
    // console.log("+");
    // console.log(typeof );

    //console.log(TotalEarning);

    /*let x=parseInt(TSpend);
    let y=parseInt(TotalEarning);
    let z=parseInt(RiskRatio);*/


    

    

    TotalSpend.innerHTML = Math.floor(TSpend);
    // console.log(spending);
    TotalEarn.innerHTML = Math.floor(TEarn);
    RiskRatio.innerHTML = Math.floor(Rratio);
  


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
    tenure = (loanTenure.value)*12; 
    rate = (loanRate.value)100;

    
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
