import Cred from "../cred/cred";

class Over2 extends Phaser.Scene {
  constructor() {
    super("over2");
  }

  create() {
    this.add.text(210, 20, "PRESS SPACE TO PLAY AGAIN!", { fontSize: "22px", fill: "red", fontFamily: 'bold', backgroundColor: 'white' });
    this.add.text(160, 50, "ANDAL FIGHTERS", { fontSize: "48px", fill: "red", fontFamily: 'bold' });
    this.add.text(257, 120, "GAME OVER", { fontSize: "32px", fill: "white", fontFamily:'bold' });
    this.add.text(267, 160, "ANDAL WON! :-`)", { fontSize: "18px", fill: "red" });
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.space)) {
        location.reload()
        Cred.gameOverB = false 
        Cred.speed = 180
        Cred.score = 0
        Cred.rockSpeed = 1300
    }
  }
}

export default Over2
