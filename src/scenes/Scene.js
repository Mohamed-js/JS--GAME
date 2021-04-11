class Scene extends Phaser.Scene {
    constructor() {
        super('loader')
    }

    preload() {
        this.load.audio('andal', 'assets/audios/andal.mp3')
        this.load.image('bg', 'assets/imgs/bg.png');
        this.load.image('ground', 'assets/imgs/ground.png');
        this.load.image('tank1', 'assets/imgs/tank1.png');
        this.load.image('tank2', 'assets/imgs/tank2.png');
        this.load.spritesheet('soldier', 'assets/imgs/soldier.png',{
            frameWidth: 85,
            frameHeight: 73
        })
        this.load.spritesheet('nyzk', 'assets/imgs/nyzk.png',{
            frameWidth: 620,
            frameHeight: 850
        })
        this.load.spritesheet('player', 'assets/imgs/player.png',{
            frameWidth: 535,
            frameHeight: 455,
        })

        this.load.spritesheet('explosion', 'assets/imgs/explosion.png',{
            frameWidth: 16,
            frameHeight: 16,
        })
        this.load.spritesheet('boom', 'assets/imgs/boom.png',{
            frameWidth: 77,
            frameHeight: 55,
        })
        this.load.spritesheet('boom_left', 'assets/imgs/boom2.png',{
            frameWidth: 77,
            frameHeight: 55,
        })
        
    }

    create() {
        this.add.text(16, 16, 'Loading Assets', { fontSize: '32px', fill: 'yellow' })
        this.scene.start('animator')
    }
}

export default Scene