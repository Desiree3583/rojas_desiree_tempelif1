while (true) {
    console.log("Temperature (F): " + input.temperature(TemperatureUnit.Fahrenheit))
    if (input.temperature(TemperatureUnit.Fahrenheit) > 70) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (input.temperature(TemperatureUnit.Celsius) < 45) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
