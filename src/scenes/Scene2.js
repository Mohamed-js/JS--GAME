class Scene2 extends Phaser.Scene {
  constructor() {
    super("play");
  }

  create() {
    this.add.image(350, 195, "bg");
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(350, 522, "ground").setScale(1);

    this.player = this.physics.add.sprite(100, 255, "player").setScale(0.15);
    // this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);
    this.player.body.setGravityY(300);

    this.physics.add.collider(this.player, this.platforms);

    this.cursors = this.input.keyboard.createCursorKeys();

  }

  update(){
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
  
      if (this.cursors.up.isDown && this.player.body.touching.down) {
          this.player.setVelocityY(-330);
      }
  }
}

export default Scene2;
