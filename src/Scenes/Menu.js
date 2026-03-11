class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.spritesheet('playMenuButton', 'Buttons/playMenuButton.png', {
            frameWidth: 303,
            frameHeight: 175
        })
        this.load.spritesheet('quitMenuButton', 'Buttons/quitMenuButton.png', {
            frameWidth: 303,
            frameHeight: 175
        })
        this.load.spritesheet('ashSprite', 'Ash/AshSpritesheet.png', {
            frameWidth: 640,
            frameHeight: 480
        })
        this.load.spritesheet('playButton', 'Buttons/playButton.png', {
            frameWidth: 38
        })
        this.load.spritesheet('eatButton', 'Buttons/eatButton.png', {
            frameWidth: 38
        })
        this.load.spritesheet('sleepButton', 'Buttons/sleepButton.png', {
            frameWidth: 38
        })
        this.load.spritesheet('statsButton', 'Buttons/statsButton.png', {
            frameWidth: 38
        })
        this.load.image('shell', 'consoleShellRender.png')
        this.load.audio('press', 'Sounds/Press.wav')
    }

    create() {
        //animations
        this.anims.create({
            key: 'idle',
            frameRate: 2,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('ashSprite', {
                start: 0,
                end: 1
            })
        })
        
        this.add.text(game.CENTER_X - 50, (game.config.height / 2)- 200, "Ashagotchi", {
            align: "center"
        })

        let playButton = new MenuButton(this, game.CENTER_X, 300, 'playMenuButton')

    }
}