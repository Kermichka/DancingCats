"use strict"
const Game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload, create, update })
let background, cat, cat2, cat3, cat4;
let cursors;
let l = 0, r = 0, d = 0, u = 0;
let up_a, down_a, left_a, right_a;
let up_a2, down_a2, left_a2, right_a2;
let up_aa, down_aa, left_aa, right_aa;
let up_aa2, down_aa2, left_aa2, right_aa2;
let upg, downg, rightg, leftg;
let upg2, downg2, rightg2, leftg2;
let music1, music2, music3;
let points = 0;
let isRulesShown = false;
let radio, level1, level2, level3, levelf, currlevel = 1, win, credits;
let hitboxEnter = 206 * 0.8 - 80, hitboxExit = -206 * 0.8 + 80;
let currMusic = 0;
const counters = {
    countu: 0, countd: 0, countl: 0, countr: 0,
    countuu: 0, countdd: 0, countll: 0, countrr: 0,
    countu2: 0, countd2: 0, countl2: 0, countr2: 0,
    countuu2: 0, countdd2: 0, countll2: 0, countrr2: 0
}
let needed = 9, clicks, go
function preload() {
    Game.load.spritesheet('cat', 'pictures/cat-spritesheets/cat.png', (383 * 3) / 3, (383 * 6) / 6);
    Game.load.spritesheet('cat2', 'pictures/cat-spritesheets/cat2.png', (383 * 3) / 3, (383 * 6) / 6);
    Game.load.spritesheet('cat3', 'pictures/cat-spritesheets/cat3.png', (383 * 3) / 3, (383 * 6) / 6);
    Game.load.spritesheet('cat4', 'pictures/cat-spritesheets/cat4.png', (383 * 3) / 3, (383 * 6) / 6);
    Game.load.spritesheet('radio', 'pictures/other-props/radio.png', 2313 / 3, 424);
    Game.load.image('background', 'pictures/other-props/background.png');
    Game.load.image('up_a', 'pictures/arrows/up.png');
    Game.load.image('down_a', 'pictures/arrows/down.png');
    Game.load.image('right_a', 'pictures/arrows/right.png');
    Game.load.image('left_a', 'pictures/arrows/left.png');
    Game.load.image('up_a2', 'pictures/arrows/up.png');
    Game.load.image('down_a2', 'pictures/arrows/down.png');
    Game.load.image('right_a2', 'pictures/arrows/right.png');
    Game.load.image('left_a2', 'pictures/arrows/left.png');
    Game.load.image('leftg', 'pictures/arrows/leftgray.png');
    Game.load.image('rightg', 'pictures/arrows/rightgray.png');
    Game.load.image('upg', 'pictures/arrows/upgray.png');
    Game.load.image('downg', 'pictures/arrows/downgray.png');
    Game.load.image('level1', 'pictures/text/LEVEL 1.png');
    Game.load.image('level2', 'pictures/text/LEVEL 2.png');
    Game.load.image('level3', 'pictures/text/LEVEL 3.png');
    Game.load.image('levelf', 'pictures/text/failed.png');
    Game.load.image('clicks', 'pictures/text/clicks.png');
    Game.load.image('win', 'pictures/text/win.png');
    Game.load.image('go', 'pictures/text/go.png');
    Game.load.image('credits', 'pictures/text/credits.png');
    this.load.audio('music1', ['music/level1.mp3']);
    this.load.audio('music2', ['music/level2.mp3']);
    this.load.audio('music3', ['music/level3.mp3']);
}

function create() {
    music1 = this.sound.add('music1');
    music2 = this.sound.add('music2');
    music3 = this.sound.add('music3');
    Game.stage.backgroundColor = '#ffffff';
    background = Game.add.sprite(0, 0, 'background');
    background.width = window.innerWidth;
    background.height = window.innerHeight;

    radio = Game.add.sprite(Game.width / 2, Game.height / 2 + 100, 'radio');
    radio.anchor.setTo(0.5);
    radio.animations.add('dance', [0, 1, 2, 1], 10, true).play();
    radio.scale.setTo(0.9);


    leftg = Game.add.sprite(20, 0, 'leftg');
    downg = Game.add.sprite(150, 0, 'downg');
    upg = Game.add.sprite(280, 0, 'upg');
    rightg = Game.add.sprite(410, 0, 'rightg');
    leftg2 = Game.add.sprite(Game.width / 2 + 180, 0, 'leftg');
    downg2 = Game.add.sprite(Game.width / 2 + 310, 0, 'downg');
    upg2 = Game.add.sprite(Game.width / 2 + 440, 0, 'upg');
    rightg2 = Game.add.sprite(Game.width / 2 + 570, 0, 'rightg');

    leftg.scale.setTo(0.8);
    leftg2.scale.setTo(0.8);
    upg.scale.setTo(0.8);
    upg2.scale.setTo(0.8);
    downg.scale.setTo(0.8);
    downg2.scale.setTo(0.8);
    rightg.scale.setTo(0.8);
    rightg2.scale.setTo(0.8);

    cat = Game.add.sprite((Game.width / 2) + 250, Game.height / 2 + 100, 'cat');
    cat.scale.setTo(1.2);
    cat.anchor.setTo(0.5);

    cat.animations.add('stay1', [0, 1, 2, 1], 5, true).play();
    cat.animations.add('left1', [9, 10, 9, 10], 5, false).play();
    cat.animations.add('down1', [6, 7, 8, 8, 7, 6], 9, false).play();
    cat.animations.add('up1', [3, 4, 5, 5, 4, 3], 9, false).play();
    cat.animations.add('right1', [12, 13, 12, 14, 14], 5, false).play();

    cat2 = Game.add.sprite(Game.width / 2 - 250, Game.height / 2 + 100, 'cat2');
    cat2.scale.setTo(1.2);
    cat2.anchor.setTo(0.5);

    cat2.animations.add('stay2', [0, 1, 2, 1], 5, true).play();
    cat2.animations.add('left2', [10, 11, 10, 11], 6, false).play();
    cat2.animations.add('down2', [8, 7, 6, 6, 7, 8], 9, false).play();
    cat2.animations.add('up2', [5, 4, 3, 3, 4, 5], 9, false).play();
    cat2.animations.add('right2', [14, 13, 14, 13, 12, 12], 7, false).play();

    cat3 = Game.add.sprite(Game.width / 2 - 250, -Game.height / 2 + 100, 'cat3');
    cat3.scale.setTo(1.2);
    cat3.anchor.setTo(0.5);

    cat3.animations.add('stay3', [0, 1, 2, 1], 5, true).play();
    cat3.animations.add('left3', [10, 11, 10, 11], 6, false).play();
    cat3.animations.add('down3', [8, 7, 6, 6, 7, 8], 9, false).play();
    cat3.animations.add('up3', [5, 4, 3, 3, 4, 5], 9, false).play();
    cat3.animations.add('right3', [14, 13, 14, 13, 12, 12], 7, false).play();

    cat4 = Game.add.sprite(Game.width / 2 - 250, -Game.height / 2 + 100, 'cat4');
    cat4.scale.setTo(1.2);
    cat4.anchor.setTo(0.5);

    cat4.animations.add('stay4', [0, 1, 2, 1], 5, true).play();
    cat4.animations.add('left4', [10, 11, 10, 11], 6, false).play();
    cat4.animations.add('down4', [8, 7, 6, 6, 7, 8], 9, false).play();
    cat4.animations.add('up4', [5, 4, 3, 3, 4, 5], 9, false).play();
    cat4.animations.add('right4', [14, 13, 14, 13, 12, 12], 7, false).play();

    up_a = Game.add.sprite(280, window.innerHeight, 'up_a');
    down_a = Game.add.sprite(150, window.innerHeight, 'down_a');
    left_a = Game.add.sprite(20, window.innerHeight, 'left_a');
    right_a = Game.add.sprite(410, window.innerHeight, 'right_a');
    up_a.scale.setTo(0.8);
    left_a.scale.setTo(0.8);
    right_a.scale.setTo(0.8);
    down_a.scale.setTo(0.8);
    up_a2 = Game.add.sprite(Game.width / 2 + 440, window.innerHeight, 'up_a');
    down_a2 = Game.add.sprite(Game.width / 2 + 310, window.innerHeight, 'down_a');
    left_a2 = Game.add.sprite(Game.width / 2 + 180, window.innerHeight, 'left_a');
    right_a2 = Game.add.sprite(Game.width / 2 + 570, window.innerHeight, 'right_a');
    up_a2.scale.setTo(0.8);
    left_a2.scale.setTo(0.8);
    right_a2.scale.setTo(0.8);
    down_a2.scale.setTo(0.8);

    up_aa = Game.add.sprite(280, window.innerHeight, 'up_a');
    down_aa = Game.add.sprite(150, window.innerHeight, 'down_a');
    left_aa = Game.add.sprite(20, window.innerHeight, 'left_a');
    right_aa = Game.add.sprite(410, window.innerHeight, 'right_a');
    up_aa.scale.setTo(0.8);
    left_aa.scale.setTo(0.8);
    right_aa.scale.setTo(0.8);
    down_aa.scale.setTo(0.8);
    up_aa2 = Game.add.sprite(Game.width / 2 + 440, window.innerHeight, 'up_a');
    down_aa2 = Game.add.sprite(Game.width / 2 + 310, window.innerHeight, 'down_a');
    left_aa2 = Game.add.sprite(Game.width / 2 + 180, window.innerHeight, 'left_a');
    right_aa2 = Game.add.sprite(Game.width / 2 + 570, window.innerHeight, 'right_a');
    up_aa2.scale.setTo(0.8);
    left_aa2.scale.setTo(0.8);
    right_aa2.scale.setTo(0.8);
    down_aa2.scale.setTo(0.8);

    level1 = Game.add.sprite(0, Game.height / 2, 'level1');
    level1.anchor.setTo(1, 0.5);
    level1.scale.setTo(0.7);
    level2 = Game.add.sprite(0, Game.height / 2, 'level2');
    level2.anchor.setTo(1, 0.5);
    level2.scale.setTo(0.7);
    level3 = Game.add.sprite(0, Game.height / 2, 'level3');
    level3.anchor.setTo(1, 0.5);
    level3.scale.setTo(0.7);

    levelf = Game.add.sprite(0, Game.height / 2, 'levelf');
    levelf.anchor.setTo(1, 0.5);
    levelf.scale.setTo(0.5);
    clicks = Game.add.sprite(-1000, Game.height / 2, 'clicks');
    clicks.anchor.setTo(0.5);
    clicks.scale.setTo(0.5);
    win = Game.add.sprite(-1000, Game.height / 2, 'win');
    win.anchor.setTo(0.5);
    win.scale.setTo(0.5);
    go = Game.add.sprite(-1000, Game.height / 2, 'go');
    go.anchor.setTo(0.5);
    go.scale.setTo(1.5);
    credits = Game.add.sprite(Game.width / 2, Game.width + 1000, 'credits');
    credits.anchor.setTo(0.5);
    credits.scale.setTo(0.5);
    cursors = Game.input.keyboard.createCursorKeys();
    this.pointsText = this.add.text(Game.width / 2 - 100, 16, 'Points: ', { fontSize: '32px', fill: '#000' });
}

function update() {
    this.pointsText.text = "Points: " + points + "/" + needed + " to pass.";
    radio.animations.play('dance');
    if (currMusic === 0) { music1.play(); currMusic = 1; }

    if (currlevel === 1) Level1();
    else if (currlevel === 2) Level2();
    else if (currlevel === 3) Level3();

    function rightCatArrowKeys(numberOfArrow, direction, speed) {
        const rightCatConsumeArrow = (arrow, catIndex, counterName) => {
            counters[counterName] = counters[counterName] || 0;
            arrow.y -= speed;
            if (arrow.y < hitboxEnter && arrow.y >= hitboxExit) {
                if (cursors[direction].isDown) {
                    const animationName = `${direction}${catIndex}`;
                    cat.animations.play(animationName);
                    points++;
                    counters[counterName]++;
                    arrow.y = window.innerHeight;
                }
            }
            else if (arrow.y < hitboxExit) {
                counters[counterName]++;
                arrow.y = window.innerHeight;
            }
        }
        if (numberOfArrow === 1) {
            if (direction === "up") {
                rightCatConsumeArrow(up_a2, 1, "countu2");
            }
            else if (direction === "down") {
                rightCatConsumeArrow(down_a2, 1, "countd2");
            }
            else if (direction === "right") {
                rightCatConsumeArrow(right_a2, 1, "countr2");
            }
            else if (direction === "left") {
                rightCatConsumeArrow(left_a2, 1, "countl2");
            }
        }
        else if (numberOfArrow === 2) {
            if (direction === "up") {
                rightCatConsumeArrow(up_aa2, 1, "countuu2");
            }
            else if (direction === "down") {
                rightCatConsumeArrow(down_aa2, 1, "countdd2");
            }
            else if (direction === "right") {
                rightCatConsumeArrow(right_aa2, 1, "countrr2");
            }
            else if (direction === "left") {
                rightCatConsumeArrow(left_aa2, 1, "countll2");
            }
        }
    }
    function leftCatArrowKeys(numberOfArrow, direction, speed, whichCat) {
        const leftCatConsumeArrow = (arrow, counterName) => {
            counters[counterName] = counters[counterName] || 0;
            if (arrow.y > 0) {
                arrow.y -= speed;
            }
            else {
                const animationName = `${direction}${whichCat}`;
                counters[counterName]++;
                arrow.y = window.innerHeight;
                if (whichCat === 2) cat2.animations.play(animationName);
                else if (whichCat === 3) cat3.animations.play(animationName);
            }
        }
        if (numberOfArrow === 1) {
            if (direction === "up") {
                leftCatConsumeArrow(up_a, "countu");
            }
            else if (direction === "down") {
                leftCatConsumeArrow(down_a, "countd");
            }
            else if (direction === "right") {
                leftCatConsumeArrow(right_a, "countr");
            }
            else if (direction === "left") {
                leftCatConsumeArrow(left_a, "countl");
            }
        }
        if (numberOfArrow === 2) {
            if (direction === "up") {
                leftCatConsumeArrow(up_aa, "countuu");
            }
            else if (direction === "down") {
                leftCatConsumeArrow(down_aa, "countdd");
            }
            else if (direction === "right") {
                leftCatConsumeArrow(right_aa, "countrr");
            }
            else if (direction === "left") {
                leftCatConsumeArrow(left_aa, "countll");
            }
        }
    }

    function Level1() {
        if (level1.x != Game.innerwidth) level1.x += 10;
        setTimeout(function () {
            if (counters["countu"] === 0) {
                leftCatArrowKeys(1, "up", 5, 2);
            }
        }, 6100)
        setTimeout(function () {
            if (counters["countd"] === 0) {
                leftCatArrowKeys(1, "down", 5, 2);
            }
        }
            , 7100)
        setTimeout(function () {
            if (counters["countu2"] === 0) {
                rightCatArrowKeys(1, "up", 5);
            }
            setTimeout(function () {
                if (counters["countd2"] === 0) {
                    rightCatArrowKeys(1, "down", 5);
                }
            }, 1000)
        }, 8000)
        setTimeout(function () {
            if (counters["countl"] === 0) {
                leftCatArrowKeys(1, "left", 5, 2);
            }
            setTimeout(function () {
                if (counters["countr"] === 0) {
                    leftCatArrowKeys(1, "right", 5, 2);
                }
            }
                , 800)
        }, 9800)
        setTimeout(function () {
            if (counters["countl2"] === 0) {
                rightCatArrowKeys(1, "left", 5);
            }
            setTimeout(function () {
                if (counters["countr2"] === 0) {
                    rightCatArrowKeys(1, "right", 5);
                }
            }, 900)
        }, 11800)
        setTimeout(function () {
            if (counters["countl"] === 1) {
                leftCatArrowKeys(1, "left", 5, 2);
            }
            setTimeout(function () {
                if (counters["countr"] === 1) {
                    leftCatArrowKeys(1, "right", 5, 2);
                }
            }
                , 1000)
            setTimeout(function () {
                if (counters["countu"] === 1) {
                    leftCatArrowKeys(1, "up", 5, 2);
                }
            }
                , 2000)
            setTimeout(function () {
                if (counters["countd"] === 1) {
                    leftCatArrowKeys(1, "down", 5, 2);
                }
            }
                , 3000)
        }, 13400)
        setTimeout(function () {
            if (counters["countl2"] === 1) {
                rightCatArrowKeys(1, "left", 5);
            }
            setTimeout(function () {
                if (counters["countr2"] === 1) {
                    rightCatArrowKeys(1, "right", 5);
                }
                setTimeout(function () {
                    if (counters["countu2"] === 1) {
                        rightCatArrowKeys(1, "up", 5);
                    }
                    setTimeout(function () {
                        if (counters["countd2"] === 1) {
                            rightCatArrowKeys(1, "down", 5);
                        }
                    }, 900)
                }, 900)
            }, 900)
        }, 17200)
        setTimeout(function () {
            if (counters["countr"] === 2) {
                leftCatArrowKeys(1, "right", 5, 2);
            }
            setTimeout(function () {
                if (counters["countd"] === 2) {
                    leftCatArrowKeys(1, "down", 5, 2);
                }
            }
                , 1000)
            setTimeout(function () {
                if (counters["countl"] === 2) {
                    leftCatArrowKeys(1, "left", 5, 2);
                }
            }
                , 2000)
            setTimeout(function () {
                if (counters["countu"] === 2) {
                    leftCatArrowKeys(1, "up", 5, 2);
                }
            }
                , 3000)

        }, 20500)
        setTimeout(function () {
            if (counters["countr2"] === 2) {
                rightCatArrowKeys(1, "right", 5);
            }
            setTimeout(function () {
                if (counters["countd2"] === 2) {
                    rightCatArrowKeys(1, "down", 5);
                }
                setTimeout(function () {
                    if (counters["countl2"] === 2) {
                        rightCatArrowKeys(1, "left", 5);
                    }
                    setTimeout(function () {
                        if (counters["countu2"] === 2) {
                            rightCatArrowKeys(1, "up", 5);
                        }
                    }, 900)
                }, 900)
            }, 900)
        }, 24500)
        setTimeout(function () {
            if (points >= 9 && counters["countu2"] === 3) {
                currlevel = 2;
                needed = 28;
            }
            else if (points < 9 && counters["countu2"] === 3) {
                levelf.anchor.setTo(0.5);
                levelf.x = Game.width / 2;
                setTimeout(function () {
                    window.location.reload();
                },
                    1000)
            }
        }, 34000)

    }

    function Level2() {
        if (level2.x != Game.innerwidth) level2.x += 10;
        cat2.y = -window.innerHeight;
        cat3.y = Game.height / 2 + 100;
        if (currMusic === 1) {
            music1.stop(); music2.play();
            currMusic = 2;
        }
        setTimeout(function () {
            if (counters["countr"] === 3) {
                leftCatArrowKeys(1, "right", 10, 3);
            }
            setTimeout(function () {
                if (counters["countd"] === 3) {
                    leftCatArrowKeys(1, "down", 10, 3);
                }
            }
                , 650)
            setTimeout(function () {
                if (counters["countu"] === 3) {
                    leftCatArrowKeys(1, "up", 10, 3);
                }
            }
                , 1050)
            setTimeout(function () {
                if (counters["countuu"] === 0) {
                    leftCatArrowKeys(2, "up", 10, 3);
                }
            }
                , 1550)
            setTimeout(function () {
                if (counters["countl"] === 3) {
                    leftCatArrowKeys(1, "left", 10, 3);
                }
            }
                , 1950)

        }, 4110)
        setTimeout(function () {
            if (counters["countr2"] === 3) {
                rightCatArrowKeys(1, "right", 10);
            }
            setTimeout(function () {
                if (counters["countd2"] === 3) {
                    rightCatArrowKeys(1, "down", 10);
                }
                setTimeout(function () {
                    if (counters["countu2"] === 3) {
                        rightCatArrowKeys(1, "up", 10);
                    }
                    setTimeout(function () {
                        if (counters["countuu2"] === 0) {
                            rightCatArrowKeys(2, "up", 10);
                        }
                        setTimeout(function () {
                            if (counters["countl2"] === 3) {
                                rightCatArrowKeys(1, "left", 10);
                            }
                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 6860)
        setTimeout(function () {
            if (counters["countd"] === 4) {
                leftCatArrowKeys(1, "down", 10, 3);
            }

            setTimeout(function () {
                if (counters["countl"] === 4) {
                    leftCatArrowKeys(1, "left", 10, 3);
                }
            }
                , 650)
            setTimeout(function () {
                if (counters["countr"] === 4) {
                    leftCatArrowKeys(1, "right", 10, 3);
                }
            }
                , 1050)
            setTimeout(function () {

                if (counters["countrr"] === 0) {
                    leftCatArrowKeys(2, "right", 10, 3);
                }
            }
                , 1550)
            setTimeout(function () {
                if (counters["countu"] === 4) {
                    leftCatArrowKeys(1, "up", 10, 3);
                }
            }
                , 1950)

        }, 9610)
        setTimeout(function () {

            if (counters["countd2"] === 4) {
                rightCatArrowKeys(1, "down", 10);
            }
            setTimeout(function () {
                if (counters["countl2"] === 4) {
                    rightCatArrowKeys(1, "left", 10);
                }
                setTimeout(function () {
                    if (counters["countr2"] === 4) {
                        rightCatArrowKeys(1, "right", 10);
                    }

                    setTimeout(function () {
                        if (counters["countrr2"] === 0) {
                            rightCatArrowKeys(2, "right", 10);
                        }
                        setTimeout(function () {
                            if (counters["countu2"] === 4) {
                                rightCatArrowKeys(1, "up", 10);
                            }
                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 11860)
        setTimeout(function () {
            if (counters["countu"] === 5) {
                leftCatArrowKeys(1, "up", 10, 3);
            }
            setTimeout(function () {
                if (counters["countr"] === 5) {
                    leftCatArrowKeys(1, "right", 10, 3);
                }
            }
                , 650)
            setTimeout(function () {
                if (counters["countd"] === 5) {
                    leftCatArrowKeys(1, "down", 10, 3);
                }
            }
                , 1050)
            setTimeout(function () {
                if (counters["countdd"] === 0) {
                    leftCatArrowKeys(2, "down", 10, 3);
                }
            }
                , 1550)
            setTimeout(function () {
                if (counters["countl"] === 5) {
                    leftCatArrowKeys(1, "left", 10, 3);
                }
            }
                , 1950)

        }, 14610)
        setTimeout(function () {
            if (counters["countu2"] === 5) {
                rightCatArrowKeys(1, "up", 10);
            }
            setTimeout(function () {
                if (counters["countr2"] === 5) {
                    rightCatArrowKeys(1, "right", 10);
                }
                setTimeout(function () {
                    if (counters["countd2"] === 5) {
                        rightCatArrowKeys(1, "down", 10);
                    }
                    setTimeout(function () {
                        if (counters["countdd2"] === 0) {
                            rightCatArrowKeys(2, "down", 10);
                        }
                        setTimeout(function () {
                            if (counters["countl2"] === 5) {
                                rightCatArrowKeys(1, "left", 10);
                            }
                        }, 400)
                    }, 500)
                }, 500)
            }, 650)
        }, 17060)
        setTimeout(function () {
            if (counters["countl"] === 6) {
                leftCatArrowKeys(1, "left", 10, 3);
            }
            setTimeout(function () {
                if (counters["countu"] === 6) {
                    leftCatArrowKeys(1, "up", 10, 3);
                }
            }
                , 650)
            setTimeout(function () {
                if (counters["countd"] === 6) {
                    leftCatArrowKeys(1, "down", 10, 3);
                }
            }
                , 1050)
            setTimeout(function () {

                if (counters["countdd"] === 1) {
                    leftCatArrowKeys(2, "down", 10, 3);
                }
            }
                , 1550)
            setTimeout(function () {
                if (counters["countr"] === 6) {
                    leftCatArrowKeys(1, "right", 10, 3);
                }
            }
                , 1950)

        }, 19610)
        setTimeout(function () {
            if (counters["countl2"] === 6) {
                rightCatArrowKeys(1, "left", 10);
            }

            setTimeout(function () {
                if (counters["countll2"] === 0) {
                    rightCatArrowKeys(2, "left", 10);
                }
                setTimeout(function () {
                    if (counters["countu2"] === 6) {
                        rightCatArrowKeys(1, "up", 10);
                    }
                    setTimeout(function () {
                        if (counters["countd2"] === 6) {
                            rightCatArrowKeys(1, "down", 10);
                        }
                        setTimeout(function () {
                            if (counters["countdd2"] === 1) {
                                rightCatArrowKeys(2, "down", 10);
                            }
                            setTimeout(function () {
                                if (counters["countr2"] === 6) {
                                    rightCatArrowKeys(1, "right", 10);
                                }
                                setTimeout(function () {
                                    if (counters["countu2"] === 7) {
                                        rightCatArrowKeys(1, "up", 10);
                                    }
                                    setTimeout(function () {
                                        if (counters["countl2"] === 7) {
                                            rightCatArrowKeys(1, "left", 10);
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
            if (points >= 28 && counters["countl2"] === 8) {
                setTimeout(function () { 
                    currlevel = 3; needed = 100 }
                , 1000)
            }
            else if (points < 28 && counters["countl2"] === 8) {
                levelf.anchor.setTo(0.5);
                levelf.x = Game.width / 2;
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
        if (currMusic === 2) {
            music2.stop(); music3.play();
            currMusic = 3;
        }

        setTimeout(function () {
            if (!isRulesShown) {
                clicks.x = Game.width / 2;
                isRulesShown = true;
            }
            setTimeout(function () {
                if (isRulesShown) { clicks.x = -1000; }
                go.x = Game.width / 2;
            }, 4000)
        }, 5000)
        setTimeout(function () {
            if (currMusic === 3) {
                if (cursors.up.isDown &&
                    counters["countu2"] < counters["countd2"] + 1 &&
                    counters["countu2"] < counters["countr2"] + 1 &&
                    counters["countu2"] < counters["countl2"] + 1) {
                    go.y = -1000;
                    cat.animations.play('up1', 30);
                    cat4.animations.play('up4', 30);
                    counters["countu2"]++;
                    points++;
                }
                else if (cursors.down.isDown &&
                    counters["countd2"] < counters["countu2"] + 1 &&
                    counters["countd2"] < counters["countl2"] + 1 &&
                    counters["countd2"] < counters["countr2"] + 1) {
                    go.y = -1000;
                    cat.animations.play('down1', 30);
                    cat4.animations.play('down4', 30);
                    counters["countd2"]++;
                    points++;
                }
                else if (cursors.right.isDown &&
                    counters["countr2"] < counters["countl2"] + 1 &&
                    counters["countr2"] < counters["countd2"] + 1 &&
                    counters["countr2"] < counters["countu2"] + 1) {
                    go.y = -1000;
                    cat.animations.play('right1', 30);
                    cat4.animations.play('right4', 30);
                    counters["countr2"]++;
                    points++;
                }
                else if (cursors.left.isDown &&
                    counters["countl2"] < counters["countr2"] + 1 &&
                    counters["countl2"] < counters["countd2"] + 1 &&
                    counters["countl2"] < counters["countu2"] + 1) {
                    go.y = -1000;
                    cat.animations.play('left1', 30);
                    cat4.animations.play('left4', 30);
                    counters["countl2"]++;
                    points++;
                }
            }
        }, 10000)
        setTimeout(function () {
            if (points >= 100) {

                currMusic++
                if (currMusic === 4) {
                    win.x = Game.width / 2;
                    currMusic++;
                }
                setTimeout(function () {
                    credits.y = Game.height / 2;
                }, 3000)
            }
            else if (points < 100) {
                levelf.anchor.setTo(0.5);
                levelf.x = Game.width / 2;
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            }
        }, 20000)

    }
}
