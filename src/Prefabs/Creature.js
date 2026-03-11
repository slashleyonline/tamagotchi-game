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
    init() {
            setInterval(() => {
            this.happiness -= 1
            this.sleep -= 1
            this.hunger -= 1

            this.resetHealth()
            if (this.health <= 0) {
                console.log('game over!')
            }
        }, 1000)

    }
    resetHealth() {
        this.health = (this.happiness + this.sleep + this.hunger) / 3
    }

    incrementTime() {
        happiness -= 1
        sleep -= 1
        hunger -= 1

        this.health = (this.happiness + this.sleep + this.hunger) / 3
        if (this.health <= 0) {
            console.log('game over!')
        }
    }

    addToStat(stat, amnt) {
        console.log('adding ' + amnt + ' to ' + stat)
        if ((stat == 'hunger') && ( (this.hunger + amnt) < 100)) {
            this.hunger += amnt
        }
        else if ((stat == 'sleep') && ( (this.sleep + amnt) < 100)) {
            this.sleep += amnt
        }
        else if ((stat == 'happiness') && ( (this.happiness + amnt) < 100)) {
            this.happiness += amnt
        }

        this.resetHealth()
    }
    
}