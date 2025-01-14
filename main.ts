 /* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo and Mark 
 * Created on: Jan 2025
 * This program makes the motors move 
*/

let distanceOfObject: number
let neopixelStrip: neopixel.Strip = null
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.clearScreen()


// setup
basic.showIcon(IconNames.Happy)

// loop
input.onButtonPressed(Button.A, function () {
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // forward
    if (distanceOfObject > 15) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
        neopixelStrip.show()

    } else {

        // stop
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(0, 0)
        basic.pause(500)
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
        neopixelStrip.show()

    }
}
})