class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    create() {
        let bg = this.add.image(game.CENTER_X, game.CENTER_Y, 'shell')
        bg.scale = 1.5

        let ash = new Creature(this,game.CENTER_X,game.CENTER_Y,'ashSprite')
        ash.play('idle', true)
        ash.init()

        this.creature = ash

        let quitButton = new MenuButton(this, 600, 450, 'quitMenuButton')

        this.time = new Date()
        this.timeText = this.add.text(game.CENTER_X + 50, (game.config.height / 4), this.time.getHours(), {
            align: "center",
            color: "black"
        })
        this.resetDate(this.timeText)
        setInterval(this.resetDate, 1000, this.timeText)


        let foodButton = new MenuButton(this, game.CENTER_X -135, 415, 'eatButton')
        foodButton.scale = 1.2
        let sleepButton = new MenuButton(this, game.CENTER_X -50, 413, 'sleepButton')
        sleepButton.scale = 1.2
        let playButton = new MenuButton(this, this.game.CENTER_X + 36, 413, 'playButton')
        playButton.scale = 1.2
        let statsButton = new MenuButton(this, this.game.CENTER_X + 127, 413, 'statsButton')
        statsButton.scale = 1.2
    }

    resetDate(timeText) {
        this.time = new Date()

        let militaryHours = this.time.getHours()
        let hours = 0
        let ampm = 'PM'
        if (militaryHours > 12) {
            hours = militaryHours - 12
        }
        else if (militaryHours == 0) {
            hours = 12
            ampm = 'AM'
        }
        else {
            hours = militaryHours
            ampm = 'AM'
        }
        let minutes =  this.time.getMinutes()

        if (minutes < 10) {
            minutes = ('0' + minutes)
        }

        timeText.text = (hours + ':' + minutes + ' ' + ampm)
    }

    replenishStat(stat, amnt) {
        console.log(stat)
        this.creature.addToStat(stat, amnt)
    }

    toggleDisplayStats(toggle) {

    }
}