import Phaser from 'phaser'

class Scene1 extends Phaser.Scene {
    constructor() {
        super('bootGame')
    }

    preload() {
        this.load.image('bg', 'assets/imgs/bg.png');
        this.load.image('tank1', 'assets/imgs/tank1.png');
        this.load.image('tank2', 'assets/imgs/tank2.png');
        this.load.spritesheet('soldier', 'assets/imgs/soldier.png',{
            frameWidth: 85,
            frameHeight: 73
        })
        this.load.spritesheet('player', 'assets/imgs/player.png',{
            frameWidth: 540,
            frameHeight: 550,
        })
        this.load.spritesheet('explosion', 'assets/imgs/explosion.png',{
            frameWidth: 16,
            frameHeight: 16,
        })
    }

    create() {
        this.add.text(20, 20, 'Loading...')
        this.scene.start('play')
    }
}

export default Scene1