let a: number;
let b: number;
let tempf = 60
while (true) {
    console.log("Temperature (F): " + input.temperature(TemperatureUnit.Fahrenheit))
    a = 40
    b = 90
    if (a < b) {
        light.setPixelColor(5, light.rgb(255, 0, 0))
    } else if (tempf < 70) {
        light.setPixelColor(5, light.rgb(0, 255, 0))
    } else {
        light.setPixelColor(5, light.rgb(0, 0, 255))
    }
    
}
