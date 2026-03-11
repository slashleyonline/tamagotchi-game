class Creature extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key)

        //instantiate to scene
        this.parentScene = scene
        this.parentScene.add.existing(this)
        this.scale = 0.4


        this.health = 100
        //overall health of the creature
        //the average of all stats
        //if it reaches 0, game over

        this.happiness = 10
        //increases gradually but the rate of increasing is maintained by playing with creature

        this.sleep = 100
        //refilled by sleeping
        
        this.hunger = 20
        //refilled by eating

    }

    resetHealth() {
        this.health = (this.happiness + this.sleep + this.hunger) / 3
    }

    incrementTime() {
        this.happiness -= 0.1
        this.sleep -= 0.1
        this.hunger = 0.1

        this.resetHealth()
        if (this.health == 0) {
            console.log('game over!')
        }
    }

    addToStat(stat, amnt) {
        if (stat == 'hunger') {
            this.hunger += amnt
        }
        else if (stat == 'sleep') {
            this.sleep += amnt
        }
        else if (stat == 'happiness') {
            this.happiness += amnt
        }

        this.resetHealth()
    }
    
}