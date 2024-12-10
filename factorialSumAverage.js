function factorial()
{
    var input = document.getElementById("input").value;
    var factorial = input;
    var counter = 1;

    while(input > 0)
    {
        counter *= input;
        input--;
    }
    
    document.getElementById("output").textContent = counter;
}

function sum()
{
    var input = document.getElementById("putIn").value;
    var sum = 0;
    var counter = 1;

    do
    {
        sum += counter; 
        counter++;
    }
    while(counter <= input)

        document.getElementById("putOut").textContent = sum;

}

function average()
{
    var input = document.getElementById("load").value;
    var sum = 0;
    var average;

    for(var counter = 1;counter <= input;counter++)
    {
        sum += counter; 
    }

        average = sum / (counter - 1);
        document.getElementById("result").textContent = average;
}