function temp_convert() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var resultElement = document.getElementById('result');
  
    if (isNaN(temperature)) {
      resultElement.textContent = "Please enter a valid temperature.";
      return;
    }
  
    if (unit === 'celsius') {
        var fahrenheit = (temperature*9/5)+32;
        resultElement.textContent = temperature + " degrees Celsius is equal to " + fahrenheit.toFixed(2) + " degrees Fahrenheit.";
      } else if (unit === 'fahrenheit') {
        var celsius = (temperature-32)*5/9;
        resultElement.textContent = temperature + " degrees Fahrenheit is equal to " + celsius.toFixed(2) + " degrees Celsius.";
      }
    else if(unit =='select'){
        resultElement.textContent ="please select a temperature to convert";
    }
  }