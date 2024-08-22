namespace Cutebot {
    // Variables globales
    enum RadioMessage {
        message1 = 49434
    }
    radio.onReceivedNumber(function (receivedNumber) {
        if (receivedNumber == 1) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ffff)
        } else if (receivedNumber == 2) {
            cuteBot.closeheadlights()
        } else if (receivedNumber == 3) {
            cuteBot.forward()
        } else if (receivedNumber == 4) {
            cuteBot.moveTime(cuteBot.Direction.backward, 50, 0.1)
        } else if (receivedNumber == 5) {
            cuteBot.moveTime(cuteBot.Direction.left, 50, 0.1)
        } else if (receivedNumber == 6) {
            cuteBot.moveTime(cuteBot.Direction.right, 50, 0.1)
        } else if (receivedNumber == 14) {
            cuteBot.stopcar()
        }
    })
    let Sensor_ultra = 0
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    music.play(music.builtinPlayableSoundEffect(soundExpression.twinkle), music.PlaybackMode.UntilDone)
    radio.setGroup(6)
    radio.setTransmitPower(7)
    basic.forever(function () {
        Sensor_ultra = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
        if (Sensor_ultra > 2 && Sensor_ultra < 15) {
            radio.sendNumber(8)
            for (let index = 0; index < 2; index++) {
                music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            }
        }
    })
    