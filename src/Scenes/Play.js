class Play extends Phaser.Scene {
    constructor() {
        super("playScene")

    }

    create() {
        let ash = new Creature(this,game.CENTER_X,game.CENTER_Y,'ashSprite')
        ash.play('idle', true)

        let quitButton = new MenuButton(this, 600, 300, 'quitButton')

    }
}