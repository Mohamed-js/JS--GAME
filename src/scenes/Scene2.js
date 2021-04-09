import Phaser from 'phaser'
// import { config } from 'webpack'

class Scene2 extends Phaser.Scene {
    constructor() {
        super('play')
    }

    create() {

        this.anims.create({
            key: 'soldier_anim',
            frames: this.anims.generateFrameNumbers('soldier'),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'player_anim',
            frames: this.anims.generateFrameNumbers('player'),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: 'explode',
            frames: this.anims.generateFrameNumbers('explosion', { start:2 , end:5}),
            frameRate: 10,
            repeat: 0,
            hideOnComplete: true
        })

        this.background = this.add.tileSprite(0,0, 700, 390, 'bg')
        this.background.setOrigin(0,0)
        
        this.tank1 = this.add.image(1200, 360, 'tank1')
        this.tank1.setScale(1.2)
        this.tank1.setInteractive()
        this.tank2 = this.add.image(700, 337, 'tank2')
        this.tank2.setScale(.3)
        this.tank2.setInteractive()

        this.soldier1 = this.add.sprite(1000, 335, 'soldier')
        this.soldier1.setInteractive()
        this.soldier2 = this.add.sprite(900, 335, 'soldier')
        this.soldier2.setInteractive()
        this.soldier3 = this.add.sprite(700, 335, 'soldier')
        this.soldier3.setInteractive()
        this.soldier4 = this.add.sprite(1500, 335, 'soldier')
        this.soldier4.setInteractive()
        
        this.soldier1.play('soldier_anim')
        this.soldier2.play('soldier_anim')
        this.soldier3.play('soldier_anim')
        this.soldier4.play('soldier_anim')

        this.player = this.add.sprite(100, 345, 'player')
        this.player.setInteractive()
        this.player.setScale(.15)
        this.player.play('player_anim')

        this.input.on('gameobjectdown', this.destroyTank, this)

    }

    moveTank(ship, speed) {
        ship.x -= speed
        if (ship.x <= -200) {
            this.resetPos(ship)
        }
    }

    resetPos(ship) {
        let randomX = Phaser.Math.Between(700, 2000)
        ship.x = randomX
    }

    destroyTank(pointer, gameObject) {
        gameObject.setTexture('explosion')
        gameObject.play('explode')
    }

    update() {
        this.moveTank(this.tank1, .6)
        this.moveTank(this.tank2, 1)
        this.moveTank(this.soldier1, 1.7)
        this.moveTank(this.soldier2, 1.4)
        this.moveTank(this.soldier3, 1.6)
        this.moveTank(this.soldier4, 1.5)

        this.background.tilePositionX += .2
    }
}

export default Scene2