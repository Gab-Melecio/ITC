document.getElementById("calculateButton").addEventListener("click", incomeTaxCalculator);
function incomeTaxCalculator()
{
    var taxableIncome = document.getElementById("input").value;
    var basicTax = 0;
    var rate = 0;
    var incomeTax = 0;

    if(taxableIncome < 250000)
    {   
       incomeTax = 0;
       document.getElementById("output").textContent = "P" + taxableIncome.toFixed(2);
    }
    else if(taxableIncome <= 400000) 
    {
        basicTax = taxableIncome - 250000;
        rate = 0.2;
        incomeTax = basicTax * rate;
    }
    else if(taxableIncome <= 800000)
    {
        basicTax = taxableIncome - 400000;
        rate = 0.25;
        incomeTax = (basicTax * rate) + 30000;
    }
    else if(taxableIncome <= 2000000)
    {
        basicTax = taxableIncome - 800000;
        rate = 0.3;
        incomeTax = (basicTax * rate) + 130000;   
    }
    else if(taxableIncome <= 8000000)
    {
        basicTax = taxableIncome - 2000000;
        rate = 0.32;
        incomeTax = (basicTax * rate) + 490000;
    }
    else
    {
        basicTax = taxableIncome - 8000000;
        rate = 0.35;
        incomeTax = (basicTax * rate) + 2410000;
    }
    
    document.getElementById("output").textContent = "P" + incomeTax.toFixed(2);


}
