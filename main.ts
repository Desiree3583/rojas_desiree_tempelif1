let a: number;
let b: number;
while (true) {
    console.log("Temperature (F): " + input.temperature(TemperatureUnit.Fahrenheit))
    a = 40
    b = 90
    if (a < b) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
