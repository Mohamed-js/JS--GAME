import * as actions from '../actions'

class Scene2 extends Phaser.Scene {
  constructor() {
    super("play");
    this.score = 0;
  }

  resetPos(ship) {
    let randomX = Phaser.Math.Between(700, 2000);
    ship.x = randomX;
  }

  moveTank(ship, speed) {
    ship.x -= speed;
    if (ship.x <= -200) {
      this.resetPos(ship);
    }
  }

  moveRock(ship, speed) {
    ship.y += speed;
  }

  enemyKilled(beam, enemy) {
    this.score += 10;
    this.scoreText.setText("Score: " + this.score);
    beam.anims.play("explode");
    setTimeout(() => {
      beam.destroy();
    }, 50);
    enemy.destroy();
  }

  create() {
    

    // Make Background, Ground and score dashboard
    this.background = this.add.tileSprite(0, 0, 700, 390, "bg").setOrigin(0, 0);
    this.scoreText = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      fill: "#000",
    });

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(350, 522, "ground").setScale(1);

    // Make player and his collider
    this.player = this.physics.add.sprite(100, 255, "player").setScale(0.15);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(400);
    this.physics.add.collider(this.player, this.platforms);

    // Make Enemies
    let s = this;
    actions.addTanks(s, 'tank2', .3)
    actions.addEnemies(s, 'soldier', .8)
    actions.addRocks(s, 'nyzk', 0.05)

    // this.rock = this.physics.add.sprite(200, -30, "nyzk").setScale(0.05);
    // this.rock.body.setGravityY(400);
    // this.rock.anims.play("nyzk_anim");


    // Group enemies
    this.tanks = this.physics.add.group();

    this.rocks = this.physics.add.group();

    this.enemies = this.physics.add.group();



    // The tank and soldiers kill us && Can touch the ground
    const playerKilled = (player, enemy) => {
      this.physics.pause();
      player.destroy();
      enemy.destroy();
    };

    this.physics.add.collider(this.tanks, this.platforms);
    this.physics.add.collider(this.enemies, this.platforms);

    this.physics.add.collider(this.player, this.rocks, playerKilled, null, this);
    this.physics.add.collider(this.player, this.tanks, playerKilled, null, this);
    this.physics.add.collider(this.player, this.enemies, playerKilled, null, this);

    this.space = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SPACE
    );
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    
    this.tanks.children.entries.forEach(enemy => {
      this.moveTank(enemy, 1.8);
    }); 
    this.enemies.children.entries.forEach(enemy => {
      this.moveTank(enemy, 1.8);
    });

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-180);
      this.player.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(180);
      this.player.anims.play("right", true);
      if ((this.player.x > 100) & (this.player.x < 300)) {
        this.background.tilePositionX += 0.4;
      } else if ((this.player.x > 300)) {
        this.background.tilePositionX += 0.8;
      }
    } else {
      this.player.setVelocityX(0);
      this.player.anims.play("stand");
    }

    if (Phaser.Input.Keyboard.JustDown(this.space)) {
      let beam = this.physics.add.sprite(this.player.x, this.player.y, "boom");
      this.physics.add.collider(beam,this.tanks,this.enemyKilled,null,this);
      this.physics.add.collider(beam,this.enemies,this.enemyKilled,null,this);
      beam.setScale(0.5);
      if (this.player.anims.currentAnim.key === "left") {
        beam.play("boom_anim_left");
        beam.setVelocityX(-200);
      } else {
        beam.play("boom_anim");
        beam.setVelocityX(200);
      }
      setTimeout(() => {
        beam.anims.play("explode");
        setTimeout(()=>{ beam.destroy()}, 50)
      }, 1500);
      return beam;
    }

    if (this.cursors.up.isDown && this.player.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
}

export default Scene2;
