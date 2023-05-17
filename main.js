"use strict"
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload, create, update })
let b, cat, cat2, cat3, cat4
let cursors
let l = 0, r = 0, d = 0, u = 0
let up_a, down_a, left_a, right_a
let up_a2, down_a2, left_a2, right_a2
let up_aa, down_aa, left_aa, right_aa
let up_aa2, down_aa2, left_aa2, right_aa2
let upg, downg, rightg, leftg
let upg2, downg2, rightg2, leftg2
let music1, music2, music3
var points = 0
let radio, level1, level2, level3, levelf, currlevel = 1, win, credits
let countu = 0, countd = 0, countl = 0, countr = 0, someother = 0, a = 0;
let countl2 = 0, countr2 = 0, countu2 = 0, countd2 = 0, cu = 0, cd = 0, cl = 0, cr = 0
let countuu = 0, countdd = 0, countll = 0, countrr = 0
let countll2 = 0, countrr2 = 0, countuu2 = 0, countdd2 = 0, cuu = 0, cdd = 0, cll = 0, crr = 0
let needed = 9, clicks, go
function preload() {
    Game.load.spritesheet('cat', 'pictures/cat-spritesheets/cat.png', (383 * 3) / 3, (383 * 6) / 6)
    Game.load.spritesheet('cat2', 'pictures/cat-spritesheets/cat2.png', (383 * 3) / 3, (383 * 6) / 6)
    Game.load.spritesheet('cat3', 'pictures/cat-spritesheets/cat3.png', (383 * 3) / 3, (383 * 6) / 6)
    Game.load.spritesheet('cat4', 'pictures/cat-spritesheets/cat4.png', (383 * 3) / 3, (383 * 6) / 6)
    Game.load.spritesheet('radio', 'pictures/other-props/radio.png', 2313 / 3, 424)
    Game.load.image('background', 'pictures/other-props/background.png')
    Game.load.image('up_a', 'pictures/arrows/up.png')
    Game.load.image('down_a', 'pictures/arrows/down.png')
    Game.load.image('right_a', 'pictures/arrows/right.png')
    Game.load.image('left_a', 'pictures/arrows/left.png')
    Game.load.image('up_a2', 'pictures/arrows/up.png')
    Game.load.image('down_a2', 'pictures/arrows/down.png')
    Game.load.image('right_a2', 'pictures/arrows/right.png')
    Game.load.image('left_a2', 'pictures/arrows/left.png')
    Game.load.image('leftg', 'pictures/arrows/leftgray.png')
    Game.load.image('rightg', 'pictures/arrows/rightgray.png')
    Game.load.image('upg', 'pictures/arrows/upgray.png')
    Game.load.image('downg', 'pictures/arrows/downgray.png')
    Game.load.image('level1', 'pictures/text/LEVEL 1.png')
    Game.load.image('level2', 'pictures/text/LEVEL 2.png')
    Game.load.image('level3', 'pictures/text/LEVEL 3.png')
    Game.load.image('levelf', 'pictures/text/failed.png')
    Game.load.image('clicks', 'pictures/text/clicks.png')
    Game.load.image('win', 'pictures/text/win.png')
    Game.load.image('go', 'pictures/text/go.png')
    Game.load.image('credits', 'pictures/text/credits.png')
    this.load.audio('music1', ['music/level1.mp3'])
    this.load.audio('music2', ['music/level2.mp3'])
    this.load.audio('music3', ['music/level3.mp3'])
}

function create() {
    music1 = this.sound.add('music1')
    music2 = this.sound.add('music2')
    music3 = this.sound.add('music3')
    //music1.play()
    Game.stage.backgroundColor = '#ffffff'
    b = Game.add.sprite(0, 0, 'background')
    b.width = window.innerWidth
    b.height = window.innerHeight

    radio = Game.add.sprite(Game.width / 2, Game.height / 2 + 100, 'radio')
    radio.anchor.setTo(0.5)
    radio.animations.add('dance', [0, 1, 2, 1], 10, true).play()
    radio.scale.setTo(0.9)


    leftg = Game.add.sprite(20, 0, 'leftg')
    downg = Game.add.sprite(150, 0, 'downg')
    upg = Game.add.sprite(280, 0, 'upg')
    rightg = Game.add.sprite(410, 0, 'rightg')
    leftg2 = Game.add.sprite(Game.width / 2 + 180, 0, 'leftg')
    downg2 = Game.add.sprite(Game.width / 2 + 310, 0, 'downg')
    upg2 = Game.add.sprite(Game.width / 2 + 440, 0, 'upg')
    rightg2 = Game.add.sprite(Game.width / 2 + 570, 0, 'rightg')

    leftg.scale.setTo(0.8)
    leftg2.scale.setTo(0.8)
    upg.scale.setTo(0.8)
    upg2.scale.setTo(0.8)
    downg.scale.setTo(0.8)
    downg2.scale.setTo(0.8)
    rightg.scale.setTo(0.8)
    rightg2.scale.setTo(0.8)

    cat = Game.add.sprite((Game.width / 2) + 250, Game.height / 2 + 100, 'cat')
    cat.scale.setTo(1.2)
    cat.anchor.setTo(0.5)

    cat.animations.add('stay', [0, 1, 2, 1], 5, true).play()
    cat.animations.add('left', [9, 10, 9, 10], 5, false).play()
    cat.animations.add('down', [6, 7, 8, 8, 7, 6], 9, false).play()
    cat.animations.add('up', [3, 4, 5, 5, 4, 3], 9, false).play()
    cat.animations.add('right', [12, 13, 12, 14, 14], 5, false).play()

    cat2 = Game.add.sprite(Game.width / 2 - 250, Game.height / 2 + 100, 'cat2')
    cat2.scale.setTo(1.2)
    cat2.anchor.setTo(0.5)

    cat2.animations.add('stay2', [0, 1, 2, 1], 5, true).play()
    cat2.animations.add('left2', [10, 11, 10, 11], 6, false).play()
    cat2.animations.add('down2', [8, 7, 6, 6, 7, 8], 9, false).play()
    cat2.animations.add('up2', [5, 4, 3, 3, 4, 5], 9, false).play()
    cat2.animations.add('right2', [14, 13, 14, 13, 12, 12], 7, false).play()

    cat3 = Game.add.sprite(Game.width / 2 - 250, -Game.height / 2 + 100, 'cat3')
    cat3.scale.setTo(1.2)
    cat3.anchor.setTo(0.5)

    cat3.animations.add('stay3', [0, 1, 2, 1], 5, true).play()
    cat3.animations.add('left3', [10, 11, 10, 11], 6, false).play()
    cat3.animations.add('down3', [8, 7, 6, 6, 7, 8], 9, false).play()
    cat3.animations.add('up3', [5, 4, 3, 3, 4, 5], 9, false).play()
    cat3.animations.add('right3', [14, 13, 14, 13, 12, 12], 7, false).play()

    cat4 = Game.add.sprite(Game.width / 2 - 250, -Game.height / 2 + 100, 'cat4')
    cat4.scale.setTo(1.2)
    cat4.anchor.setTo(0.5)

    cat4.animations.add('stay4', [0, 1, 2, 1], 5, true).play()
    cat4.animations.add('left4', [10, 11, 10, 11], 6, false).play()
    cat4.animations.add('down4', [8, 7, 6, 6, 7, 8], 9, false).play()
    cat4.animations.add('up4', [5, 4, 3, 3, 4, 5], 9, false).play()
    cat4.animations.add('right4', [14, 13, 14, 13, 12, 12], 7, false).play()

    up_a = Game.add.sprite(280, window.innerHeight, 'up_a')
    down_a = Game.add.sprite(150, window.innerHeight, 'down_a')
    left_a = Game.add.sprite(20, window.innerHeight, 'left_a')
    right_a = Game.add.sprite(410, window.innerHeight, 'right_a')
    up_a.scale.setTo(0.8)
    left_a.scale.setTo(0.8)
    right_a.scale.setTo(0.8)
    down_a.scale.setTo(0.8)
    up_a2 = Game.add.sprite(Game.width / 2 + 440, window.innerHeight, 'up_a')
    down_a2 = Game.add.sprite(Game.width / 2 + 310, window.innerHeight, 'down_a')
    left_a2 = Game.add.sprite(Game.width / 2 + 180, window.innerHeight, 'left_a')
    right_a2 = Game.add.sprite(Game.width / 2 + 570, window.innerHeight, 'right_a')
    up_a2.scale.setTo(0.8)
    left_a2.scale.setTo(0.8)
    right_a2.scale.setTo(0.8)
    down_a2.scale.setTo(0.8)

    up_aa = Game.add.sprite(280, window.innerHeight, 'up_a')
    down_aa = Game.add.sprite(150, window.innerHeight, 'down_a')
    left_aa = Game.add.sprite(20, window.innerHeight, 'left_a')
    right_aa = Game.add.sprite(410, window.innerHeight, 'right_a')
    up_aa.scale.setTo(0.8)
    left_aa.scale.setTo(0.8)
    right_aa.scale.setTo(0.8)
    down_aa.scale.setTo(0.8)
    up_aa2 = Game.add.sprite(Game.width / 2 + 440, window.innerHeight, 'up_a')
    down_aa2 = Game.add.sprite(Game.width / 2 + 310, window.innerHeight, 'down_a')
    left_aa2 = Game.add.sprite(Game.width / 2 + 180, window.innerHeight, 'left_a')
    right_aa2 = Game.add.sprite(Game.width / 2 + 570, window.innerHeight, 'right_a')
    up_aa2.scale.setTo(0.8)
    left_aa2.scale.setTo(0.8)
    right_aa2.scale.setTo(0.8)
    down_aa2.scale.setTo(0.8)

    level1 = Game.add.sprite(0, Game.height / 2, 'level1')
    level1.anchor.setTo(1, 0.5)
    level1.scale.setTo(0.7)
    level2 = Game.add.sprite(0, Game.height / 2, 'level2')
    level2.anchor.setTo(1, 0.5)
    level2.scale.setTo(0.7)
    level3 = Game.add.sprite(0, Game.height / 2, 'level3')
    level3.anchor.setTo(1, 0.5)
    level3.scale.setTo(0.7)
    
    levelf = Game.add.sprite(0, Game.height / 2, 'levelf')
    levelf.anchor.setTo(1, 0.5)
    levelf.scale.setTo(0.5)
    clicks = Game.add.sprite(-1000, Game.height / 2, 'clicks')
    clicks.anchor.setTo(0.5)
    clicks.scale.setTo(0.5)
    win = Game.add.sprite(-1000, Game.height / 2, 'win')
    win.anchor.setTo(0.5)
    win.scale.setTo(0.5)
    go = Game.add.sprite(-1000, Game.height / 2, 'go')
    go.anchor.setTo(0.5)
    go.scale.setTo(1.5)
    credits = Game.add.sprite(Game.width / 2, Game.width + 1000, 'credits')
    credits.anchor.setTo(0.5)
    credits.scale.setTo(0.5)
    cursors = Game.input.keyboard.createCursorKeys()
    this.pointsText = this.add.text(Game.width / 2 - 100, 16, 'Points: ', { fontSize: '32px', fill: '#000' })
    //this.curtext = this.add.text(Game.width / 2 - 100, 116, 'b: ', { fontSize: '32px', fill: '#000' })
}

function update() {
    this.pointsText.text = "Points: " + points + "/" + needed + " to pass."
    radio.animations.play('dance')
    if (someother == 0) { music1.play(); someother = 1; }
    // if (a == 0) { someother = 2; countu2 = 8; countd2 = 7; countr2 = 7; countl2 = 8; countuu2 = 1, countdd2 = 2; countrr2 = 1; countll2 = 1; countu = 7; countd = 7; countr = 7; countl = 7; countuu = 1; countdd = 2; countrr = 1, cu = 4; cuu = 2; cd = 4; cl = 4; cr = 4; cdd = 2; crr = 1; a = 1; }
    if (currlevel == 1) Level1();
    else if (currlevel == 2) Level2();
    else if (currlevel == 3) Level3();

    function Level1() {
        if (a == 0) {
            if (level1.x != Game.innerwidth) level1.x += 10
            setTimeout(function () {
                if (up_a.y > 0 && countu == 0) { up_a.y -= 5; cat2.animations.play('stay2'); cat.animations.play('stay') }
                else if (countu < 1) { countu++; up_a.y = window.innerHeight; if (cu == 0) { cat2.animations.play('up2'); cu++ } }
                setTimeout(function () {
                    if (down_a.y > 0 && countd == 0) { down_a.y -= 5 }
                    else if (countd < 1) { countd++; down_a.y = window.innerHeight; if (cd == 0) { cat2.animations.play('down2'); cd++ } }
                }
                    , 1000)
            }, 6100)
            setTimeout(function () {
                if (countu2 == 0) up_a2.y -= 5
                if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                    if (cursors.up.isDown) {
                        cat.animations.play('up');
                        points++
                        countu2++
                        up_a2.y = window.innerHeight
                    }
                }
                else if (up_a2.y < -206 * 0.8 +80) {
                    countu2++
                    up_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countd2 == 0) down_a2.y -= 5
                    if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80)
                        if (cursors.down.isDown) {
                            cat.animations.play('down')
                            points++
                            countd2++
                            down_a2.y = window.innerHeight
                        }
                        else if (down_a2.y < -206 * 0.8 +80) {
                            countd2++
                            down_a2.y = window.innerHeight
                        }
                }, 1000)
            }, 8000)
            setTimeout(function () {
                if (left_a.y > 0 && countl == 0) { left_a.y -= 5; cat2.animations.play('stay2'); }
                else if (countl < 1) { countl++; left_a.y = window.innerHeight; if (cl == 0) { cat2.animations.play('left2'); cat.animations.play('stay'); cl++ } }
                setTimeout(function () {
                    if (right_a.y > 0 && countr == 0) { right_a.y -= 5 }
                    else if (countr < 1) { countr++; right_a.y = window.innerHeight; if (cr == 0) { cat2.animations.play('right2'); cr++ } }
                }
                    , 800)
            }, 9800)
            setTimeout(function () {
                if (countl2 == 0) left_a2.y -= 5
                if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                        if (cursors.left.isDown) {
                        cat.animations.play('left');
                        points++
                        countl2++
                        left_a2.y = window.innerHeight
                    }
                }
                else if (left_a2.y < -206 * 0.8 +80) {
                    countl2++
                    left_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countr2 == 0) right_a2.y -= 5
                    if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                        if (cursors.right.isDown) {
                            cat.animations.play('right')
                            points++
                            countr2++
                            right_a2.y = window.innerHeight
                        }
                    }
                    else if (right_a2.y < -206 * 0.8 +80) {
                        countr2++
                        right_a2.y = window.innerHeight
                    }
                }, 900)
            }, 11800)
            setTimeout(function () {
                if (left_a.y > 0 && countl == 1) { left_a.y -= 5; cat2.animations.play('stay2'); }
                else if (countl < 2) { countl++; left_a.y = window.innerHeight; if (cl == 1) { cat2.animations.play('left2'); cat.animations.play('stay'); cl++ } }
                setTimeout(function () {
                    if (right_a.y > 0 && countr == 1) { right_a.y -= 5 }
                    else if (countr < 2) { countr++; right_a.y = window.innerHeight; if (cr == 1) { cat2.animations.play('right2'); cr++ } }
                }
                    , 1000)
                setTimeout(function () {
                    if (up_a.y > 0 && countu == 1) { up_a.y -= 5 }
                    else if (countu < 2) { countu++; up_a.y = window.innerHeight; if (cu == 1) { cat2.animations.play('up2'); cu++ } }
                }
                    , 2000)
                setTimeout(function () {
                    if (down_a.y > 0 && countd == 1) { down_a.y -= 5 }
                    else if (countd < 2) { countd++; down_a.y = window.innerHeight; if (cd == 1) { cat2.animations.play('down2'); cd++ } }
                }
                    , 3000)
            }, 13400)
            setTimeout(function () {
                if (countl2 == 1) left_a2.y -= 5
                if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                    if (cursors.left.isDown) {
                        cat.animations.play('left');
                        points++
                        countl2++
                        left_a2.y = window.innerHeight
                    }
                }
                else if (left_a2.y < -206 * 0.8 +80) {
                    countl2++
                    left_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countr2 == 1) right_a2.y -= 5
                    if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                        if (cursors.right.isDown) {
                            cat.animations.play('right')
                            points++
                            countr2++
                            right_a2.y = window.innerHeight
                        }
                    }
                    else if (right_a2.y < -206 * 0.8 +80) {
                        countr2++
                        right_a2.y = window.innerHeight
                    }
                    setTimeout(function () {
                        if (countu2 == 1) up_a2.y -= 5
                        if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                            if (cursors.up.isDown) {
                                cat.animations.play('up')
                                points++
                                countu2++
                                up_a2.y = window.innerHeight
                            }
                        }
                        else if (up_a2.y < -206 * 0.8 +80) {
                            countu2++
                            up_a2.y = window.innerHeight
                        }
                        setTimeout(function () {
                            if (countd2 == 1) down_a2.y -= 5
                            if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                                if (cursors.down.isDown) {
                                    cat.animations.play('down')
                                    points++
                                    countd2++
                                    down_a2.y = window.innerHeight
                                }
                            }
                            else if (down_a2.y < -206 * 0.8 +80) {
                                countd2++
                                down_a2.y = window.innerHeight
                            }
                        }, 900)
                    }, 900)
                }, 900)
            }, 17200)
            setTimeout(function () {
                if (right_a.y > 0 && countr == 2) { right_a.y -= 5; cat2.animations.play('stay2'); }
                else if (countr < 3) {
                    countr++; right_a.y = window.innerHeight; if (cr == 2) { cat2.animations.play('right2'); cat.animations.play('stay'); cr++ }
                }
                setTimeout(function () {
                    if (down_a.y > 0 && countd == 2) { down_a.y -= 5 }
                    else if (countd < 3) { countd++; down_a.y = window.innerHeight; if (cd == 2) { cat2.animations.play('down2'); cd++ } }
                }
                    , 1000)
                setTimeout(function () {
                    if (left_a.y > 0 && countl == 2) { left_a.y -= 5; }
                    else if (countl < 3) {
                        countl++; left_a.y = window.innerHeight; if (cl == 2) { cat2.animations.play('left2'); cl++ }
                    }
                }
                    , 2000)
                setTimeout(function () {
                    if (up_a.y > 0 && countu == 2) { up_a.y -= 5 }
                    else if (countu < 3) { countu++; up_a.y = window.innerHeight; if (cu == 2) { cat2.animations.play('up2'); cu++ } }
                }
                    , 3000)

            }, 20500)
            setTimeout(function () {
                if (countr2 == 2) right_a2.y -= 5
                if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                    if (cursors.right.isDown) {
                        cat.animations.play('right')
                        points++
                        countr2++
                        right_a2.y = window.innerHeight
                    }
                }
                else if (right_a2.y < -206 * 0.8 +80) {
                    countr2++
                    right_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countd2 == 2) down_a2.y -= 5
                    if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                        if (cursors.down.isDown) {
                            cat.animations.play('down')
                            points++
                            countd2++
                            down_a2.y = window.innerHeight
                        }
                    }
                    else if (down_a2.y < -206 * 0.8 +80) {
                        countd2++
                        down_a2.y = window.innerHeight
                    }

                    setTimeout(function () {
                        if (countl2 == 2) left_a2.y -= 5
                        if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                            if (cursors.left.isDown) {
                                cat.animations.play('left');
                                points++
                                countl2++
                                left_a2.y = window.innerHeight
                            }
                        }
                        else if (left_a2.y < -206 * 0.8 +80) {
                            countl2++
                            left_a2.y = window.innerHeight
                        }
                        setTimeout(function () {
                            if (countu2 == 2) up_a2.y -= 5
                            if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                                if (cursors.up.isDown) {
                                    cat.animations.play('up')
                                    points++
                                    countu2++
                                    up_a2.y = window.innerHeight
                                }
                            }
                            else if (up_a2.y < -206 * 0.8 +80) {
                                countu2++
                                up_a2.y = window.innerHeight
                            }

                        }, 900)
                    }, 900)
                }, 900)
            }, 24500)
            setTimeout(function () {
                if (points >= 9 && countu2 == 3) { currlevel = 2; a = 1; needed = 28 }
                else if (points < 9 && countu2 == 3) {
                    levelf.anchor.setTo(0.5)
                    levelf.x = Game.width / 2
                    setTimeout(function () {
                        window.location.reload();
                    },
                        1000)
                }
            }, 34000)
        }
    }

    function Level2() {
        if (level2.x != Game.innerwidth) level2.x += 10
        cat2.y = -window.innerHeight;
        cat3.y = Game.height / 2 + 100;
        if (someother == 1) {
            music1.stop(); music2.play();
            someother = 2;
        }
        setTimeout(function () {
            if (right_a.y > 0 && countr == 3) { right_a.y -= 10; cat3.animations.play('stay3'); cat.animations.play('stay'); }
            else if (countr < 4) {
                countr++; right_a.y = window.innerHeight; if (cr == 3) { cat3.animations.play('right3'); cr++ }
            }
            setTimeout(function () {
                if (down_a.y > 0 && countd == 3) { down_a.y -= 10 }
                else if (countd < 4) { countd++; down_a.y = window.innerHeight; if (cd == 3) { cat3.animations.play('down3'); cd++ } }
            }
                , 650)
            setTimeout(function () {
                if (up_a.y > 0 && countu == 3) { up_a.y -= 10 }
                else if (countu < 4) { countu++; up_a.y = window.innerHeight; if (cu == 3) { cat3.animations.play('up3'); cu++ } }
            }
                , 1050)
            setTimeout(function () {

                if (up_aa.y > 0 && countuu == 0) { up_aa.y -= 10 }
                else if (countuu < 1) { countuu++; up_aa.y = window.innerHeight; if (cuu == 0) { cat3.animations.play('up3'); cuu++ } }
            }
                , 1550)
            setTimeout(function () {
                if (left_a.y > 0 && countl == 3) { left_a.y -= 10; }
                else if (countl < 4) {
                    countl++; left_a.y = window.innerHeight; if (cl == 3) { cat3.animations.play('left3'); cl++ }
                }
            }
                , 1950)

        }, 4110)
        setTimeout(function () {
            if (countr2 == 3) right_a2.y -= 10
            if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                if (cursors.right.isDown) {
                    cat.animations.play('right')
                    points++
                    countr2++
                    right_a2.y = window.innerHeight
                }
            }
            else if (right_a2.y < -206 * 0.8 +80) {
                countr2++
                right_a2.y = window.innerHeight
            }
            setTimeout(function () {
                if (countd2 == 3) down_a2.y -= 10
                if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                    if (cursors.down.isDown) {
                        cat.animations.play('down')
                        points++
                        countd2++
                        down_a2.y = window.innerHeight
                    }
                }
                else if (down_a2.y < -206 * 0.8 +80) {
                    countd2++
                    down_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countu2 == 3) up_a2.y -= 10
                    if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                        if (cursors.up.isDown) {
                            cat.animations.play('up')
                            points++
                            countu2++
                            up_a2.y = window.innerHeight
                        }
                    }
                    else if (up_a2.y < -206 * 0.8 +80) {
                        countu2++
                        up_a2.y = window.innerHeight
                    }
                    setTimeout(function () {
                        if (countuu2 == 0) up_aa2.y -= 10
                        if (up_aa2.y < 206 * 0.8 - 80 && up_aa2.y >= -206 * 0.8 +80) {
                            if (cursors.up.isDown) {
                                cat.animations.play('up')
                                points++
                                countuu2++
                                up_aa2.y = window.innerHeight
                            }
                        }
                        else if (up_aa2.y < -206 * 0.8 +80) {
                            countuu2++
                            up_aa2.y = window.innerHeight
                        }
                        setTimeout(function () {
                            if (countl2 == 3) left_a2.y -= 10
                            if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                                if (cursors.left.isDown) {
                                    cat.animations.play('left');
                                    points++
                                    countl2++
                                    left_a2.y = window.innerHeight
                                }
                            }
                            else if (left_a2.y < -206 * 0.8 +80) {
                                countl2++
                                left_a2.y = window.innerHeight
                            }

                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 6860)
        setTimeout(function () {
            if (down_a.y > 0 && countd == 4) { down_a.y -= 10; cat3.animations.play('stay3'); }
            else if (countd < 5) { countd++; down_a.y = window.innerHeight; if (cd == 4) { cat3.animations.play('down3'); cd++ } }

            setTimeout(function () {
                if (left_a.y > 0 && countl == 4) { left_a.y -= 10; }
                else if (countl < 5) {
                    countl++; left_a.y = window.innerHeight; if (cl == 4) { cat3.animations.play('left3'); cl++ }
                }
            }
                , 650)
            setTimeout(function () {
                if (right_a.y > 0 && countr == 4) { right_a.y -= 10; }
                else if (countr < 5) {
                    countr++; right_a.y = window.innerHeight; if (cr == 4) { cat3.animations.play('right3'); cat.animations.play('stay'); cr++ }
                }
            }
                , 1050)
            setTimeout(function () {

                if (right_aa.y > 0 && countrr == 0) { right_aa.y -= 10 }
                else if (countrr < 1) { countrr++; right_aa.y = window.innerHeight; if (crr == 0) { cat3.animations.play('right3'); crr++ } }
            }
                , 1550)
            setTimeout(function () {
                if (up_a.y > 0 && countu == 4) { up_a.y -= 10 }
                else if (countu < 5) { countu++; up_a.y = window.innerHeight; if (cu == 4) { cat3.animations.play('up3'); cu++ } }
            }
                , 1950)

        }, 9610)
        setTimeout(function () {

            if (countd2 == 4) down_a2.y -= 10
            if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                if (cursors.down.isDown) {
                    cat.animations.play('down')
                    points++
                    countd2++
                    down_a2.y = window.innerHeight
                }
            }
            else if (down_a2.y < -206 * 0.8 +80) {
                countd2++
                down_a2.y = window.innerHeight
            }

            setTimeout(function () {
                if (countl2 == 4) left_a2.y -= 10
                if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                    if (cursors.left.isDown) {
                        cat.animations.play('left');
                        points++
                        countl2++
                        left_a2.y = window.innerHeight
                    }
                }
                else if (left_a2.y < -206 * 0.8 +80) {
                    countl2++
                    left_a2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countr2 == 4) right_a2.y -= 10
                    if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                        if (cursors.right.isDown) {
                            cat.animations.play('right')
                            points++
                            countr2++
                            right_a2.y = window.innerHeight
                        }
                    }
                    else if (right_a2.y < -206 * 0.8 +80) {
                        countr2++
                        right_a2.y = window.innerHeight
                    }

                    setTimeout(function () {
                        if (countrr2 == 0) right_aa2.y -= 10
                        if (right_aa2.y < 206 * 0.8 - 80 && right_aa2.y >= -206 * 0.8 +80) {
                            if (cursors.right.isDown) {
                                cat.animations.play('right')
                                points++
                                countrr2++
                                right_aa2.y = window.innerHeight
                            }
                        }
                        else if (right_aa2.y < -206 * 0.8 +80) {
                            countrr2++
                            right_aa2.y = window.innerHeight
                        }
                        setTimeout(function () {
                            if (countu2 == 4) up_a2.y -= 10
                            if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                                if (cursors.up.isDown) {
                                    cat.animations.play('up')
                                    points++
                                    countu2++
                                    up_a2.y = window.innerHeight
                                }
                            }
                            else if (up_a2.y < -206 * 0.8 +80) {
                                countu2++
                                up_a2.y = window.innerHeight
                            }

                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 11860)
        setTimeout(function () {
            if (up_a.y > 0 && countu == 5) { up_a.y -= 10; cat3.animations.play('stay3'); }
            else if (countu < 6) { countu++; up_a.y = window.innerHeight; if (cu == 5) { cat3.animations.play('up3'); cu++ } }


            setTimeout(function () {
                if (right_a.y > 0 && countr == 5) { right_a.y -= 10; }
                else if (countr < 6) {
                    countr++; right_a.y = window.innerHeight; if (cr == 5) { cat3.animations.play('right3'); cat.animations.play('stay'); cr++ }
                }

            }
                , 650)
            setTimeout(function () {
                if (down_a.y > 0 && countd == 5) { down_a.y -= 10; }
                else if (countd < 6) { countd++; down_a.y = window.innerHeight; if (cd == 5) { cat3.animations.play('down3'); cd++ } }

            }
                , 1050)
            setTimeout(function () {

                if (down_aa.y > 0 && countdd == 0) { down_aa.y -= 10 }
                else if (countdd < 1) { countdd++; down_aa.y = window.innerHeight; if (cdd == 0) { cat3.animations.play('down3'); cdd++ } }
            }
                , 1550)
            setTimeout(function () {
                if (left_a.y > 0 && countl == 5) { left_a.y -= 10; }
                else if (countl < 6) {
                    countl++; left_a.y = window.innerHeight; if (cl == 5) { cat3.animations.play('left3'); cl++ }
                }
            }
                , 1950)

        }, 14610)
        setTimeout(function () {
            if (countu2 == 5) up_a2.y -= 10
            if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                if (cursors.up.isDown) {
                    cat.animations.play('up')
                    points++
                    countu2++
                    up_a2.y = window.innerHeight
                }
            }
            else if (up_a2.y < -206 * 0.8 +80) {
                countu2++
                up_a2.y = window.innerHeight
            }


            setTimeout(function () {
                if (countr2 == 5) right_a2.y -= 10
                if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                    if (cursors.right.isDown) {
                        cat.animations.play('right')
                        points++
                        countr2++
                        right_a2.y = window.innerHeight
                    }
                }
                else if (right_a2.y < -206 * 0.8 +80) {
                    countr2++
                    right_a2.y = window.innerHeight
                }

                setTimeout(function () {
                    if (countd2 == 5) down_a2.y -= 10
                    if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                        if (cursors.down.isDown) {
                            cat.animations.play('down')
                            points++
                            countd2++
                            down_a2.y = window.innerHeight
                        }
                    }
                    else if (down_a2.y < -206 * 0.8 +80) {
                        countd2++
                        down_a2.y = window.innerHeight
                    }


                    setTimeout(function () {
                        if (countdd2 == 0) down_aa2.y -= 10
                        if (down_aa2.y < 206 * 0.8 - 80 && down_aa2.y >= -206 * 0.8 +80) {
                            if (cursors.down.isDown) {
                                cat.animations.play('down')
                                points++
                                countdd2++
                                down_aa2.y = window.innerHeight
                            }
                        }
                        else if (down_aa2.y < -206 * 0.8 +80) {
                            countdd2++
                            down_aa2.y = window.innerHeight
                        }
                        setTimeout(function () {
                            if (countl2 == 5) left_a2.y -= 10
                            if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                                if (cursors.left.isDown) {
                                    cat.animations.play('left');
                                    points++
                                    countl2++
                                    left_a2.y = window.innerHeight
                                }
                            }
                            else if (left_a2.y < -206 * 0.8 +80) {
                                countl2++
                                left_a2.y = window.innerHeight
                            }

                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 17060)
        setTimeout(function () {
            if (left_a.y > 0 && countl == 6) { left_a.y -= 10; }
            else if (countl < 7) {
                countl++; left_a.y = window.innerHeight; if (cl == 6) { cat3.animations.play('left3'); cl++ }
            }
            setTimeout(function () {
                if (up_a.y > 0 && countu == 6) { up_a.y -= 10; cat3.animations.play('stay3'); }
                else if (countu < 7) { countu++; up_a.y = window.innerHeight; if (cu == 6) { cat3.animations.play('up3'); cu++ } }
            }
                , 650)
            setTimeout(function () {
                if (down_a.y > 0 && countd == 6) { down_a.y -= 10; }
                else if (countd < 7) { countd++; down_a.y = window.innerHeight; if (cd == 6) { cat3.animations.play('down3'); cd++ } }

            }
                , 1050)
            setTimeout(function () {

                if (down_aa.y > 0 && countdd == 1) { down_aa.y -= 10 }
                else if (countdd < 2) { countdd++; down_aa.y = window.innerHeight; if (cdd == 1) { cat3.animations.play('down3'); cdd++ } }
            }
                , 1550)
            setTimeout(function () {
                if (right_a.y > 0 && countr == 6) { right_a.y -= 10; }
                else if (countr < 7) {
                    countr++; right_a.y = window.innerHeight; if (cr == 6) { cat3.animations.play('right3'); cat.animations.play('stay'); cr++ }
                }
            }
                , 1950)

        }, 19610)
        setTimeout(function () {
            if (countl2 == 6) left_a2.y -= 10
            if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                if (cursors.left.isDown) {
                    cat.animations.play('left');
                    points++
                    countl2++
                    left_a2.y = window.innerHeight
                }
            }
            else if (left_a2.y < -206 * 0.8 +80) {
                countl2++
                left_a2.y = window.innerHeight
            }

            setTimeout(function () {
                if (countll2 == 0) left_aa2.y -= 10
                if (left_aa2.y < 206 * 0.8 - 80 && left_aa2.y >= -206 * 0.8 +80) {
                    if (cursors.left.isDown) {
                        cat.animations.play('left')
                        points++
                        countll2++
                        left_aa2.y = window.innerHeight
                    }
                }
                else if (left_aa2.y < -206 * 0.8 +80) {
                    countll2++
                    left_aa2.y = window.innerHeight
                }
                setTimeout(function () {
                    if (countu2 == 6) up_a2.y -= 10
                    if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                        if (cursors.up.isDown) {
                            cat.animations.play('up')
                            points++
                            countu2++
                            up_a2.y = window.innerHeight
                        }
                    }
                    else if (up_a2.y < -206 * 0.8 +80) {
                        countu2++
                        up_a2.y = window.innerHeight
                    }



                    setTimeout(function () {
                        if (countd2 == 6) down_a2.y -= 10
                        if (down_a2.y < 206 * 0.8 - 80 && down_a2.y >= -206 * 0.8 +80) {
                            if (cursors.down.isDown) {
                                cat.animations.play('down')
                                points++
                                countd2++
                                down_a2.y = window.innerHeight
                            }
                        }
                        else if (down_a2.y < -206 * 0.8 +80) {
                            countd2++
                            down_a2.y = window.innerHeight
                        }


                        setTimeout(function () {
                            if (countdd2 == 1) down_aa2.y -= 10
                            if (down_aa2.y < 206 * 0.8 - 80 && down_aa2.y >= -206 * 0.8 +80) {
                                if (cursors.down.isDown) {
                                    cat.animations.play('down')
                                    points++
                                    countdd2++
                                    down_aa2.y = window.innerHeight
                                }
                            }
                            else if (down_aa2.y < -206 * 0.8 +80) {
                                countdd2++
                                down_aa2.y = window.innerHeight
                            }
                            setTimeout(function () {
                                if (countr2 == 6) right_a2.y -= 10
                                if (right_a2.y < 206 * 0.8 - 80 && right_a2.y >= -206 * 0.8 +80) {
                                    if (cursors.right.isDown) {
                                        cat.animations.play('right')
                                        points++
                                        countr2++
                                        right_a2.y = window.innerHeight
                                    }
                                }
                                else if (right_a2.y < -206 * 0.8 +80) {
                                    countr2++
                                    right_a2.y = window.innerHeight
                                }
                                setTimeout(function () {
                                    if (countu2 == 7) up_a2.y -= 10
                                    if (up_a2.y < 206 * 0.8 - 80 && up_a2.y >= -206 * 0.8 +80) {
                                        if (cursors.up.isDown) {
                                            cat.animations.play('up')
                                            points++
                                            countu2++
                                            up_a2.y = window.innerHeight
                                        }
                                    }
                                    else if (up_a2.y < -206 * 0.8 +80) {
                                        countu2++
                                        up_a2.y = window.innerHeight
                                    }
                                    setTimeout(function () {
                                        if (countl2 == 7) left_a2.y -= 10
                                        if (left_a2.y < 206 * 0.8 - 80 && left_a2.y >= -206 * 0.8 +80) {
                                            if (cursors.left.isDown) {
                                                cat.animations.play('left');
                                                points++
                                                countl2++
                                                left_a2.y = window.innerHeight
                                            }
                                        }
                                        else if (left_a2.y < -206 * 0.8 +80) {
                                            countl2++
                                            left_a2.y = window.innerHeight
                                        }

                                    }, 300)
                                }, 300)
                            }, 100)
                        }, 400)
                    }, 500)
                }, 200)
            }, 600)
        }, 21960)
        setTimeout(function () {
            if (points >= 28 && countl2 == 8) {
                setTimeout(function () { currlevel = 3; needed = 100 }, 1000)
            }
            else if (points < 28 && countl2 == 8) {
                levelf.anchor.setTo(0.5)
                levelf.x = Game.width / 2
                setTimeout(function () {
                    window.location.reload();
                },
                    1500)
            }
        }, 26000)
    }
    function Level3() {
        if (level3.x != Game.innerwidth) level3.x += 10
        cat3.y = -window.innerHeight;
        cat4.y = Game.height / 2 + 100;
        if (someother == 2) {
            music2.stop(); music3.play();
            someother = 3;

        }

        setTimeout(function () {
            if (a == 1) clicks.x = Game.width / 2;
            setTimeout(function () {
                if (a == 1) { clicks.x = -1000; a++ }
                if (a == 2) go.x = Game.width / 2;
            }, 4000)
        }, 5000)
        setTimeout(function () {
            if (someother == 3) {
                if (a == 2) { go.x = -1000; a++ }
                if (cursors.up.isDown && countu2 < countd2 + 1 && countu2 < countl2 + 1 && countu2 < countr2 + 1) {
                    cat.animations.play('up', 30)
                    cat4.animations.play('up4', 30)
                    countu2++
                    points++
                }
                else if (cursors.down.isDown && countd2 < countu2 + 1 && countd2 < countl2 + 1 && countd2 < countr2 + 1) {
                    cat.animations.play('down', 30)
                    cat4.animations.play('down4', 30)
                    countd2++
                    points++
                }
                else if (cursors.right.isDown && countr2 < countl2 + 1 && countr2 < countd2 + 1 && countr2 < countu2 + 1) {
                    cat.animations.play('right', 30)
                    cat4.animations.play('right4', 30)
                    countr2++
                    points++
                }
                else if (cursors.left.isDown && countl2 < countr2 + 1 && countl2 < countd2 + 1 && countl2 < countu2 + 1) {
                    cat.animations.play('left', 30)
                    cat4.animations.play('left4', 30)
                    countl2++
                    points++
                }
            }
        }, 10000)
        setTimeout(function () {
            if (points >= 100) {
                someother++
                if (a == 3) win.x = Game.width / 2;
                if (someother == 4) {
                    cat4.animations.play('stay',true)
                    cat.animations.play('up', true)
                }
                setTimeout(function () {
                    if (a == 3) { win.x = -1000; a++ }
                    credits.y = Game.height / 2
                }, 3000)
            }
            else if (points < 100) {
                levelf.anchor.setTo(0.5)
                levelf.x = Game.width / 2
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            }
        }, 20000)

    }
}
