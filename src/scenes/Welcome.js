import Cred from '../cred/cred'

class Welcome extends Phaser.Scene {
  constructor() {
    super("animator");
  }

  create() {
    var music = this.sound.add("andal");
    music.volume = 0.2;
    // music.play();
    
    // Create welcome text
    this.add.text(160, 50, "ANDAL FIGHTERS", { fontSize: "48px", fill: "red", fontFamily: 'bold' });
    this.add.text(207, 120, "Enter your name please", { fontSize: "22px", fill: "green" });

    // Create form
    const input = document.createElement('input')
    input.id = 'input'
    const btn = document.createElement('button')
    btn.id = 'btn'
    btn.type = 'button'
    btn.textContent = 'Start'
    document.body.appendChild(input)
    document.body.appendChild(btn)

    // Create animations
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
  }

  update() {
    // Watch for starting game
    document.getElementById('btn').onclick = () => {
      if (document.getElementById('input').value != '') {
        this.name = document.getElementById('input').value
        Cred.name = this.name
        this.scene.start("play");
        document.getElementById('input').remove()
        document.getElementById('btn').remove()
      } else {
        this.add.text(90, 320, "It cannot be empty, please name yourself!", { fontSize: "22px", fill: "red" });
      }
    }
  }
}

export default Welcome;
