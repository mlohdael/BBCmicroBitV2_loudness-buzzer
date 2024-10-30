input.onSound(DetectedSound.Loud, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
})
input.setSoundThreshold(SoundThreshold.Loud, 80)
basic.forever(function () {
    led.plotBarGraph(
    input.soundLevel(),
    80
    )
})
