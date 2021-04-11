import Phaser from 'phaser';

class Player extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, key) {
        super(scene, x, y, key, 'Player');
    }
}

export {
    Player
}