function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result;

    if (fromUnit === "celsius") {
        if (toUnit === "fahrenheit") {
            result = (temperatureInput * 9/5) + 32;
        } else if (toUnit === "kelvin") {
            result = temperatureInput + 273.15;
        } else {
            result = temperatureInput; 
        }
    } else if (fromUnit === "fahrenheit") {
        if (toUnit === "celsius") {
            result = (temperatureInput - 32) * 5/9;
        } else if (toUnit === "kelvin") {
            result = ((temperatureInput - 32) * 5/9) + 273.15;
        } else {
            result = temperatureInput; 
        }
    } else if (fromUnit === "kelvin") {
        if (toUnit === "celsius") {
            result = temperatureInput - 273.15;
        } else if (toUnit === "fahrenheit") {
            result = (temperatureInput - 273.15) * 9/5 + 32;
        } else {
            result = temperatureInput; 
        }
    }

    document.getElementById("result").textContent = result.toFixed(2);
}
