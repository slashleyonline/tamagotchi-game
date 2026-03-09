class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        this.load.path = "./assets/"
        this.load.spritesheet('playButton', 'playButton.png', {
            frameWidth: 303,
            frameHeight: 175
        })
    }

    create() {
        this.add.text((game.config.width / 2) - 100, (game.config.height / 2)- 200, "Postcard Tamagotchi", {
            align: "center"
        })

        //let playButton = new MenuButton(this, 0, 0, 'playButton')
    }
}