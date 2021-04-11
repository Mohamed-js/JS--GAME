class Scene2 extends Phaser.Scene {
  constructor() {
    super("play");
  }

  resetPos(ship) {
    let randomX = Phaser.Math.Between(700, 2000)
    ship.x = randomX
  }

  moveTank(ship, speed) {
    ship.x -= speed;
    if (ship.x <= -200) {
      this.resetPos(ship);
    }
  }

  enemyKilled(beam, enemy) {
    beam.anims.play('explode')
    setTimeout(() => { beam.destroy() }, 100);
    setTimeout(() => { enemy.destroy() }, 50);
  }

  create() {
    // Make Background and Ground
    this.add.image(350, 195, "bg");
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(350, 522, "ground").setScale(1);

    // Make player and his collider
    this.player = this.physics.add.sprite(100, 255, "player").setScale(0.15);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);
    this.physics.add.collider(this.player, this.platforms);

    // Make Enemies
    this.tank1 = this.physics.add.image(900, 300, "tank2");
    this.tank1.setScale(0.3);
    this.soldier1 = this.physics.add.sprite(1000, 325, "soldier");
    this.soldier1.setScale(0.8);

    // Add Animations
    this.soldier1.play("soldier_anim");

    // Group enemies
    this.enemies = this.physics.add.group();
    this.enemies.add(this.soldier1);
    this.enemies.add(this.tank1);

    // Set enemies props
    this.tank1.body.setGravityY(600);
    this.soldier1.body.setGravityY(600);

    // The tank and soldiers kill us && Can touch the ground
    const playerKilled = (player, enemy) => {
      this.physics.pause();
      player.destroy();
      enemy.destroy();
    };

    this.physics.add.collider(this.enemies, this.platforms);

    this.physics.add.collider(
      this.player,
      this.enemies,
      playerKilled,
      null,
      this
    );

    this.space = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.moveTank(this.tank1, 1)
    this.moveTank(this.soldier1, 1.5)

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);

      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);

      this.player.anims.play("right", true);
    } else {
      this.player.setVelocityX(0);

      this.player.anims.play("stand");
    }

    if (Phaser.Input.Keyboard.JustDown(this.space)) {
      let beam = this.physics.add.sprite(this.player.x, this.player.y, "boom");
      this.physics.add.collider(
        beam,
        this.enemies,
        this.enemyKilled,
        null,
        this
      );
      beam.play("boom_anim");
      beam.setVelocityX(200);
      return beam;
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}

export default Scene2;
