class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.spritesheet('playMenuButton', 'Box/box_back_sprite.png', {
            frameWidth: 224,
            frameHeight: 209
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
        this.load.image('box_front', 'Box/box_front_sprite.png')
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
        this.anims.create({
            key:'open',
            frameRate: 24,
            repeat:0,

            frames: this.anims.generateFrameNumbers('playMenuButton', {
                start: 0,
                end: 24
            })

        })
        
        this.add.text(game.CENTER_X - 50, (game.config.height / 2)- 200, "Ashagotchi", {
            align: "center"
        })

        let playButton = new MenuButton(this, game.CENTER_X - 10, 300, 'playMenuButton')
        playButton.scale = 1.5
        let front = this.add.image(game.CENTER_X, 300, 'box_front')
        front.scale = 1.5


        playButton.on('animationcomplete', () => {
            this.scene.start('playScene')
        })

    }
}