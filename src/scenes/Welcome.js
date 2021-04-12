import InputText from 'phaser3-rex-plugins/plugins/inputtext.js';
class Welcome extends Phaser.Scene {
  constructor() {
    super("animator");
  }

  create() {
    var music = this.sound.add("andal");
    music.volume = 0.2;
    // music.play();
    
    this.add.text(120, 100, "Welcome to Mega Fighter...", { fontSize: "32px", fill: "green" });
    

    this.anims.create({
      key: "nyzk_anim",
      frames: this.anims.generateFrameNumbers("nyzk"),
      frameRate: 30,
      repeat: -1,
    });

    this.anims.create({
      key: "soldier_anim",
      frames: this.anims.generateFrameNumbers("soldier"),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "boom_anim",
      frames: this.anims.generateFrameNumbers("boom"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "boom_anim_left",
      frames: this.anims.generateFrameNumbers("boom_left"),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: "stand",
      frames: this.anims.generateFrameNumbers("player"),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 5, end: 9 }),
      frameRate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "explode",
      frames: this.anims.generateFrameNumbers("explosion", {
        start: 2,
        end: 5,
      }),
      frameRate: 10,
      repeat: 0,
      hideOnComplete: true,
    });
    this.physics.world.setBounds(0, 0, 700, 390);

    if (true) {
      this.scene.start("play");
    }
  }
}

export default Welcome;
