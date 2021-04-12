import * as actions from '../actions'
import Cred from '../cred/cred'
import * as api from '../api'



class Game extends Phaser.Scene {
  constructor() {
    super("play");
  }

  enemyKilled(beam, enemy) {
    Cred.score += 10;
    this.scoreText.setText("Score: " + Cred.score);
    beam.anims.play("explode");
    setTimeout(() => {
      beam.destroy();
    }, 50);
    enemy.destroy();
  }

  gameOver(player, enemy) {
    this.physics.pause();
    Cred.gameOverB = true
    api.setScore(Cred.name, Cred.score)
    this.scene.start("over");
  };

  create() {
    Cred.score = 0

    // KEYS
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.cursors = this.input.keyboard.createCursorKeys();

    // Make Background, Ground and score dashboard
    this.background = this.add.tileSprite(0, 0, 700, 390, "bg").setOrigin(0, 0);
    this.scoreText = this.add.text(16, 16, "score: 0", { fontSize: "32px", fill: "#000" });
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(350, 522, "ground").setScale(1);

    // Make player and his collider
    this.player = this.physics.add.sprite(100, 255, "player").setScale(0.15);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(400);
    this.physics.add.collider(this.player, this.platforms);

    // Create Enemies
    actions.addTanks(this, 'tank2', .3)
    actions.addEnemies(this, 'soldier', .8)
    actions.addRocks(this, 'nyzk', 0.05)

    // Group enemies
    this.tanks = this.physics.add.group();
    this.rocks = this.physics.add.group();
    this.enemies = this.physics.add.group();

    // Add colliders.. All can walk, enemies can kill our maaaaaaan
    actions.colliders(this)
  }

  update() {
    if (Cred.gameOverB == false) {
      // Enemies move towards
      actions.moveEnemies(this)

      // Player moves in all directions && Jumps
      actions.watchKeyboard(this)

      // Player fires any time in left and right
      actions.attackBoom(this)

      // Double jump when score bigger than 200
      actions.doubleJump(this)
    }
  }
}

export default Game;
