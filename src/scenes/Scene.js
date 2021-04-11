class Scene extends Phaser.Scene {
    constructor() {
        super('loader')
    }

    preload() {
        this.load.image('bg', 'assets/imgs/bg.png');
        this.load.image('ground', 'assets/imgs/ground.png');
        this.load.image('tank1', 'assets/imgs/tank1.png');
        this.load.image('tank2', 'assets/imgs/tank2.png');
        this.load.spritesheet('soldier', 'assets/imgs/soldier.png',{
            frameWidth: 85,
            frameHeight: 73
        })
        this.load.spritesheet('player', 'assets/imgs/player.png',{
            frameWidth: 540,
            frameHeight: 512,
        })

        this.load.spritesheet('explosion', 'assets/imgs/explosion.png',{
            frameWidth: 16,
            frameHeight: 16,
        })
        this.load.spritesheet('boom', 'assets/imgs/beam.png',{
            frameWidth: 16,
            frameHeight: 16,
        })
    }

    create() {
        this.scene.start('animator')
    }
}

export default Scene