/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Pablo and Mark 
 * Created on: Jan 2025
 * This program makes the motors move 
*/

// setup
basic.showIcon(IconNames.Happy)
let distanceOfObject: number

// loop
input.onButtonPressed(Button.A, function () {
while (true) {
    distanceOfObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )

    // forward
    if (distanceOfObject > 10) {
        basic.showIcon(IconNames.Yes)
        robotbit.StpCarMove(10, 48)
    } else {

        // stop
        basic.showIcon(IconNames.No)
        robotbit.StpCarMove(0, 0)
        basic.pause(500)
    }
}
})