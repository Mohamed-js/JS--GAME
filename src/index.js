import Phaser from 'phaser'
import Scene1 from './scenes/Scene1'
import Scene2 from './scenes/Scene2'


window.onload = function () {
    const config = {
        type: Phaser.AUTO,
        width: 700,
        height: 390,
        backgroundColor: 'black',
        scene: [Scene1, Scene2]
    }

    const game = new Phaser.Game(config)


}

