import Cred from './cred/cred';

const addTanks = (scene, enemy, scale) => {
  setInterval(() => {
    if (Cred.gameOverB == false) {
      const ob = scene.physics.add.image(1000, 340, enemy).setScale(scale);
      scene.tanks.add(ob);
      ob.setGravityY(600);
    }
  }, 3000);
};

const addEnemies = (scene, enemy, scale) => {
  setInterval(() => {
    if (Cred.gameOverB == false) {
      const sold = scene.physics.add.sprite(800, 350, enemy).setScale(scale);
      sold.play("soldier_anim");
      scene.enemies.add(sold);
      sold.setGravityY(600);
    }
  }, 2000);
};

const addRocks = (scene, enemy, scale) => {
  setInterval(() => {
    if (Cred.gameOverB == false) {
      const value = Phaser.Math.Between(0, 500);
      const rock = scene.physics.add.sprite(value, -30, enemy).setScale(scale);
      rock.play("nyzk_anim");
      scene.rocks.add(rock);
      rock.setGravityY(400);
    }
  }, 1300);
};

const moveTank = (ship, speed) => {
  ship.x -= speed;
};

const moveEnemies = (scene) => {
  scene.tanks.children.entries.forEach(enemy => {
    moveTank(enemy, 1.8);
  }); 
  scene.enemies.children.entries.forEach(enemy => {
    moveTank(enemy, 1.8);
  });
}

const watchKeyboard = (scene) => {
  if (scene.cursors.left.isDown) {
    scene.player.setVelocityX(-Cred.speed);
    scene.player.anims.play("left", true);
  } else if (scene.cursors.right.isDown) {
    scene.player.setVelocityX(Cred.speed);
    scene.player.anims.play("right", true);
    if ((scene.player.x > 100) & (scene.player.x < 300)) {
      scene.background.tilePositionX += 0.4;
    } else if ((scene.player.x > 300)) {
      scene.background.tilePositionX += 0.8;
    }
  } else {
    scene.player.setVelocityX(0);
    scene.player.anims.play("stand");
  }

  if (scene.cursors.up.isDown && scene.player.body.touching.down) {
    scene.player.setVelocityY(-330);
  }
}

const attackBoom = (scene) => {
  if (Phaser.Input.Keyboard.JustDown(scene.space)) {
    let beam = scene.physics.add.sprite(scene.player.x, scene.player.y, "boom");
    scene.physics.add.collider(beam,scene.tanks,scene.enemyKilled,null,scene);
    scene.physics.add.collider(beam,scene.enemies,scene.enemyKilled,null,scene);
    beam.setScale(0.5);
    if (scene.player.anims.currentAnim.key === "left") {
      beam.play("boom_anim_left");
      beam.setVelocityX(-200);
    } else {
      beam.play("boom_anim");
      beam.setVelocityX(200);
    }
    setTimeout(() => {
      beam.anims.play("explode");
      setTimeout(()=>{ beam.destroy()}, 80)
    }, 1500);
    return beam;
  }
}

const colliders = (scene) => {
  scene.physics.add.collider(scene.tanks, scene.platforms);
  scene.physics.add.collider(scene.enemies, scene.platforms);
  scene.physics.add.collider(scene.player, scene.rocks, scene.gameOver, null, scene);
  scene.physics.add.collider(scene.player, scene.tanks, scene.gameOver, null, scene);
  scene.physics.add.collider(scene.player, scene.enemies, scene.gameOver, null, scene);
}

const doubleJump = (scene) => {
  if (Cred.score >= 200) {
    Cred.speed = 240
  }
  if (Cred.score >= 400) {
    Cred.speed = 280
  }
  if (Cred.score >= 600) {
    Cred.speed = 350
  }
}

export { addEnemies, addTanks, addRocks, moveTank, moveEnemies, watchKeyboard, attackBoom, colliders, doubleJump };