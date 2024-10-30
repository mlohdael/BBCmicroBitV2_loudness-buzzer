def on_sound_loud():
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_forever():
    pass
basic.forever(on_forever)
