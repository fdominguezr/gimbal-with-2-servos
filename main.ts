input.onButtonPressed(Button.A, function () {
    servos.P0.setAngle(90)
    servos.P1.setAngle(90)
})
basic.forever(function () {
    servos.P1.setAngle(Math.round(Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 180)) + 10)
    servos.P0.setAngle(Math.round(Math.map(input.acceleration(Dimension.Z), -1023, 1023, 0, 180)) + -10)
})
basic.forever(function () {
    led.plot(Math.map(input.acceleration(Dimension.X), -700, 700, 0, 5), Math.map(input.acceleration(Dimension.Z), -700, 700, 0, 5))
    basic.pause(200)
    basic.clearScreen()
})
