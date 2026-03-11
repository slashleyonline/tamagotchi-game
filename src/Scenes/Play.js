class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    create() {
        let bg = this.add.image(game.CENTER_X, game.CENTER_Y, 'shell')
        bg.scale = 1.5

        let ash = new Creature(this,game.CENTER_X,game.CENTER_Y,'ashSprite')
        ash.play('idle', true)

        let quitButton = new MenuButton(this, 600, 300, 'quitButton')

        this.time = new Date()
        this.timeText = this.add.text(game.CENTER_X + 70, (game.config.height / 4), this.time.getHours(), {
            align: "center",
            color: "black"
        })
        this.resetDate(this.timeText)
        setInterval(this.resetDate, 1000, this.timeText)
        setInterval(ash.incrementTime, 1000)
    }

    resetDate(timeText) {
        this.time = new Date()

        let hours = this.time.getHours()
        let minutes = this.time.getMinutes()

        timeText.text = new String(hours + ':' + minutes)
    }
}