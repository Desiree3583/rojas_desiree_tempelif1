tempf = 60
while True:
    print("Temperature (F): " + input.temperature(TemperatureUnit.FAHRENHEIT))
    a = 40
    b = 90
    if a < b:
        light.set_pixel_color(5, light.rgb(255, 0, 0))
    elif tempf < 70: 
        light.set_pixel_color(5, light.rgb(0, 255, 0))
    else:
        light.set_pixel_color(5, light.rgb(0, 0, 255))