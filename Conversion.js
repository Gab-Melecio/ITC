
      
      function fahToCel()
      {
      var input = document.getElementById("input").value;
      var conversion;
      
      if(input !=="")
        {
          conversion = 5 / 9 *(input - 32);
        document.getElementById("output").textContent = "Celsius: " + conversion.toFixed(2);
        }
      else
        {
        document.getElementById("output").textContent = "Please enter some number!";
        }
      }
      

      

        function celToFah()
        {
          var input = document.getElementById("putIn").value;
          var conversion;
      
        if(input !=="")
        {
          conversion = input * 9 / 5 + 32;
        document.getElementById("putOut").textContent = "Fahrenheit: " + conversion.toFixed(2);
        }
        else
        {
        document.getElementById("putOut").textContent = "Please enter some number!";
        }
        }
        
  


         
         function metersToFeet()
        {
          var input = document.getElementById("x").value;
          var conversion;
          
          if(input !=="")
          {
            conversion = input * 3.28084;
            document.getElementById("y").textContent = "Feet: " + conversion.toFixed(5);
          }
          else
          {
            document.getElementById("y").textContent = "Please enter some number!";
          }
        }
   
      
     
        function feetToMeter()
        {
          var input = document.getElementById("a").value;
          var conversion;
          
          if(input !=="")
          {
            conversion = input * 0.3048;
            document.getElementById("b").textContent = "Meter: " + conversion.toFixed(5);
          }
          else
          {
            document.getElementById("b").textContent = "Please enter some number!";
          }
        }
      