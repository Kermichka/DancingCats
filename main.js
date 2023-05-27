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
let needed = 9, clicks, go
let currMusic = 0;
const countersLeft = {
    up: [0, 0],
    down: [0, 0],
    left: [0, 0],
    right: [0, 0],
};
const countersRight = {
    up: [0, 0],
    down: [0, 0],
    left: [0, 0],
    right: [0, 0],
};

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
    //else if (currlevel === 3) Level3();

    function rightCatArrowKeys(numberOfArrow, direction, speed) {
        const rightCatConsumeArrow = (arrow, catIndex, countersPropertyPath) => {
            countersRight[countersPropertyPath] = countersRight[countersPropertyPath] || 0;
            arrow.y -= speed;
            if (arrow.y < hitboxEnter && arrow.y >= hitboxExit) {
                if (cursors[direction].isDown) {
                    const animationName = `${direction}${catIndex}`;
                    cat.animations.play(animationName);
                    points++;
                    countersRight[countersPropertyPath][numberOfArrow - 1]++;
                    arrow.y = window.innerHeight;
                }
            }
            else if (arrow.y < hitboxExit) {
                countersRight[countersPropertyPath][numberOfArrow - 1]++;
                arrow.y = window.innerHeight;
            }
        }
        if (numberOfArrow === 1) {
            if (direction === "up") {
                rightCatConsumeArrow(up_a2, 1, "up");
            }
            else if (direction === "down") {
                rightCatConsumeArrow(down_a2, 1, "down");
            }
            else if (direction === "right") {
                rightCatConsumeArrow(right_a2, 1, "right");
            }
            else if (direction === "left") {
                rightCatConsumeArrow(left_a2, 1, "left");
            }
        }
        else if (numberOfArrow === 2) {
            if (direction === "up") {
                rightCatConsumeArrow(up_aa2, 1, "up");
            }
            else if (direction === "down") {
                rightCatConsumeArrow(down_aa2, 1, "down");
            }
            else if (direction === "right") {
                rightCatConsumeArrow(right_aa2, 1, "right");
            }
            else if (direction === "left") {
                rightCatConsumeArrow(left_aa2, 1, "left");
            }
        }
    }
    function leftCatArrowKeys(numberOfArrow, direction, speed, whichCat) {
        const leftCatConsumeArrow = (arrow, countersPropertyPath) => {
            countersLeft[countersPropertyPath] = countersLeft[countersPropertyPath] || 0;
            if (arrow.y > 0) {
                arrow.y -= speed;
            }
            else {
                const animationName = `${direction}${whichCat}`;
                countersLeft[countersPropertyPath][numberOfArrow - 1]++;
                arrow.y = window.innerHeight;
                if (whichCat === 2) cat2.animations.play(animationName);
                else if (whichCat === 3) cat3.animations.play(animationName);
            }
        }
        if (numberOfArrow === 1) {
            if (direction === "up") {
                leftCatConsumeArrow(up_a, "up");
            }
            else if (direction === "down") {
                leftCatConsumeArrow(down_a, "down");
            }
            else if (direction === "right") {
                leftCatConsumeArrow(right_a, "right");
            }
            else if (direction === "left") {
                leftCatConsumeArrow(left_a, "left");
            }
        }
        if (numberOfArrow === 2) {
            if (direction === "up") {
                leftCatConsumeArrow(up_aa, "up");
            }
            else if (direction === "down") {
                leftCatConsumeArrow(down_aa, "down");
            }
            else if (direction === "right") {
                leftCatConsumeArrow(right_aa, "right");
            }
            else if (direction === "left") {
                leftCatConsumeArrow(left_aa, "left");
            }
        }
    }
    const colors = {
        white: 1,
        gray: 2,
        orange: 3,
        black: 4,
    }
    function Level1() {
        if (level1.x != Game.innerwidth) {
            level1.x += 10;
        }

        const stepsLevel1 = [
            //left - 2
            {
                cat: "left",
                direction: "up",
                stepPx: 5,
                timeoutMs: 6100,
                counterValue: 0,
                numberOfArrow: 1,
                color: "gray",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 5,
                timeoutMs: 7100,
                counterValue: 0,
                numberOfArrow: 1,
                color: "gray",
                counterName: "down"
            },
            //right - 2
            {
                cat: "right",
                direction: "up",
                stepPx: 5,
                timeoutMs: 8000,
                counterValue: 0,
                numberOfArrow: 1,
                color: "white",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 5,
                timeoutMs: 9000,
                counterValue: 0,
                numberOfArrow: 1,
                color: "white",
                counterName: "down"
            },
            //left - 2
            {
                cat: "left",
                direction: "left",
                stepPx: 5,
                timeoutMs: 9800,
                counterValue: 0,
                numberOfArrow: 1,
                color: "gray",
                counterName: "left"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 5,
                timeoutMs: 10600,
                counterValue: 0,
                numberOfArrow: 1,
                color: "gray",
                counterName: "right"
            },
            //right - 2
            {
                cat: "right",
                direction: "left",
                stepPx: 5,
                timeoutMs: 11800,
                counterValue: 0,
                numberOfArrow: 1,
                color: "white",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 5,
                timeoutMs: 12600,
                counterValue: 0,
                numberOfArrow: 1,
                color: "white",
                counterName: "right"
            },
            //left - 4
            {
                cat: "left",
                direction: "left",
                stepPx: 5,
                timeoutMs: 13400,
                counterValue: 1,
                numberOfArrow: 1,
                color: "gray",
                counterName: "left"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 5,
                timeoutMs: 14400,
                counterValue: 1,
                numberOfArrow: 1,
                color: "gray",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 5,
                timeoutMs: 15400,
                counterValue: 1,
                numberOfArrow: 1,
                color: "gray",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 5,
                timeoutMs: 16400,
                counterValue: 1,
                numberOfArrow: 1,
                color: "gray",
                counterName: "down"
            },
            //right - 4
            {
                cat: "right",
                direction: "left",
                stepPx: 5,
                timeoutMs: 17200,
                counterValue: 1,
                numberOfArrow: 1,
                color: "white",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 5,
                timeoutMs: 18100,
                counterValue: 1,
                numberOfArrow: 1,
                color: "white",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 5,
                timeoutMs: 19000,
                counterValue: 1,
                numberOfArrow: 1,
                color: "white",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 5,
                timeoutMs: 19900,
                counterValue: 1,
                numberOfArrow: 1,
                color: "white",
                counterName: "down"
            },
            //left - 4
            {
                cat: "left",
                direction: "right",
                stepPx: 5,
                timeoutMs: 20500,
                counterValue: 2,
                numberOfArrow: 1,
                color: "gray",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 5,
                timeoutMs: 21500,
                counterValue: 2,
                numberOfArrow: 1,
                color: "gray",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "left",
                stepPx: 5,
                timeoutMs: 22500,
                counterValue: 2,
                numberOfArrow: 1,
                color: "gray",
                counterName: "left"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 5,
                timeoutMs: 23500,
                counterValue: 2,
                numberOfArrow: 1,
                color: "gray",
                counterName: "up"
            },
            //right - 4
            {
                cat: "right",
                direction: "right",
                stepPx: 5,
                timeoutMs: 24500,
                counterValue: 2,
                numberOfArrow: 1,
                color: "white",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 5,
                timeoutMs: 25400,
                counterValue: 2,
                numberOfArrow: 1,
                color: "white",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 5,
                timeoutMs: 26300,
                counterValue: 2,
                numberOfArrow: 1,
                color: "white",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 5,
                timeoutMs: 27200,
                counterValue: 2,
                numberOfArrow: 1,
                color: "white",
                counterName: "up"
            },

        ]
        for (const step of stepsLevel1) {
            setTimeout(function () {
                if (step.cat === "left") {
                    if (countersLeft[step.counterName][step.numberOfArrow-1] === step.counterValue) {
                        const colorNumber = colors[step.color];
                        leftCatArrowKeys(step.numberOfArrow, step.direction, step.stepPx, colorNumber);
                    }
                } else if (step.cat === "right") {
                    if (countersRight[step.counterName][step.numberOfArrow-1] === step.counterValue) {
                        rightCatArrowKeys(step.numberOfArrow, step.direction, step.stepPx);
                    }
                }
            }, step.timeoutMs)
        }

        setTimeout(function () {
            if (points >= 9 && countersRight.up[0] === 3) {
                currlevel = 2;
                needed = 28;
            }
            else if (points < 9 && countersRight.up[0] === 3) {
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
        const stepsLevel2 = [
            //left - 5
            {
                cat: "left",
                direction: "right",
                stepPx: 10,
                timeoutMs: 4110,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 4660,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 10,
                timeoutMs: 5160,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 10,
                timeoutMs: 5660,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "left",
                stepPx: 10,
                timeoutMs: 6060,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            //right - 5
            {
                cat: "right",
                direction: "right",
                stepPx: 10,
                timeoutMs: 6860,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 7260,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 7760,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 8260,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 8910,
                counterValue: 3,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            //left - 5
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 9610,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "left",
                stepPx: 10,
                timeoutMs: 10260,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 10,
                timeoutMs: 10660,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 10,
                timeoutMs: 11160,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 10,
                timeoutMs: 11560,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            //right - 5
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 11860,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 12260,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 10,
                timeoutMs: 12760,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 10,
                timeoutMs: 13260,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 13910,
                counterValue: 4,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            //left - 5
            {
                cat: "left",
                direction: "up",
                stepPx: 10,
                timeoutMs: 14610,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 10,
                timeoutMs: 15260,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 15760,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 16160,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "left",
                stepPx: 10,
                timeoutMs: 16560,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            //right - 5
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 17060,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 10,
                timeoutMs: 17460,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 17960,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 18460,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 19110,
                counterValue: 5,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            //left - 5
            {
                cat: "left",
                direction: "left",
                stepPx: 10,
                timeoutMs: 19610,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            {
                cat: "left",
                direction: "up",
                stepPx: 10,
                timeoutMs: 20260,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 20760,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "down",
                stepPx: 10,
                timeoutMs: 21260,
                counterValue: 1,
                numberOfArrow: 2,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "left",
                direction: "right",
                stepPx: 10,
                timeoutMs: 21660,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            //right - 8
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 21960,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 22260,
                counterValue: 0,
                numberOfArrow: 2,
                color: "orange",
                counterName: "left"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 22560,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 22760,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "down",
                stepPx: 10,
                timeoutMs: 23060,
                counterValue: 2,
                numberOfArrow: 2,
                color: "orange",
                counterName: "down"
            },
            {
                cat: "right",
                direction: "right",
                stepPx: 10,
                timeoutMs: 23560,
                counterValue: 6,
                numberOfArrow: 1,
                color: "orange",
                counterName: "right"
            },
            {
                cat: "right",
                direction: "up",
                stepPx: 10,
                timeoutMs: 23760,
                counterValue: 7,
                numberOfArrow: 1,
                color: "orange",
                counterName: "up"
            },
            {
                cat: "right",
                direction: "left",
                stepPx: 10,
                timeoutMs: 24360,
                counterValue: 7,
                numberOfArrow: 1,
                color: "orange",
                counterName: "left"
            },

        ]
        for (const step of stepsLevel2) {
            setTimeout(function () {
                if (step.cat === "left") {
                    if (countersLeft[step.counterName][step.numberOfArrow-1] === step.counterValue) {
                        const colorNumber = colors[step.color];
                        leftCatArrowKeys(step.numberOfArrow, step.direction, step.stepPx, colorNumber);
                    }
                } else if (step.cat === "right") { 
                    if (countersRight[step.counterName][step.numberOfArrow-1] === step.counterValue) {
                        rightCatArrowKeys(step.numberOfArrow, step.direction, step.stepPx);
                    }
                }
            }, step.timeoutMs)
        }

        setTimeout(function () {
            if (points >= 28 && countersRight.left[0] === 8) {
                setTimeout(function () {
                    currlevel = 3; needed = 100
                }
                    , 1000)
            }
            else if (points < 28 && countersRight.left[0] === 8) {
                levelf.anchor.setTo(0.5);
                levelf.x = Game.width / 2;
                setTimeout(function () {
                    window.location.reload();
                },
                    1500)
            }
        }, 26000)
    }
    /*
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
                    countersRight.up[0] < countersRight.down[0] + 1 &&
                    countersRight.up[0] < countersRight.right[0] + 1 &&
                    counters[countersRight.up[0]] < counters[countersRight.left[0]] + 1) {
                    go.y = -1000;
                    cat.animations.play('up1', 30);
                    cat4.animations.play('up4', 30);
                    countersRight.up[0]++;
                    points++;
                }
                else if (cursors.down.isDown &&
                    countersRight.down[0] < countersRight.up[0] + 1 &&
                    countersRight.down[0] < countersRight.left[0] + 1 &&
                    countersRight.down[0] < countersRight.right[0] + 1) {
                    go.y = -1000;
                    cat.animations.play('down1', 30);
                    cat4.animations.play('down4', 30);
                    countersRight.down[0]++;
                    points++;
                }
                else if (cursors.right.isDown &&
                    countersRight.right[0] < countersRight.left[0] + 1 &&
                    countersRight.right[0] < countersRight.down[0] + 1 &&
                    countersRight.right[0] < countersRight.up[0] + 1) {
                    go.y = -1000;
                    cat.animations.play('right1', 30);
                    cat4.animations.play('right4', 30);
                    countersRight.right[0]++;
                    points++;
                }
                else if (cursors.left.isDown &&
                    countersRight.left[0] < countersRight.right[0] + 1 &&
                    countersRight.left[0] < countersRight.down[0] + 1 &&
                    countersRight.left[0] < countersRight.up[0] + 1) {
                    go.y = -1000;
                    cat.animations.play('left1', 30);
                    cat4.animations.play('left4', 30);
                    countersRight.left[0]++;
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

    }*/
}
