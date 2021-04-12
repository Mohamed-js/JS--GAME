import * as api from "../api";
import Cred from "../cred/cred";

class Over extends Phaser.Scene {
  constructor() {
    super("over");
  }

  create() {
    this.add.text(210, 20, "PRESS SPACE TO PLAY AGAIN!", { fontSize: "22px", fill: "red", fontFamily: 'bold', backgroundColor: 'white' });
    this.add.text(160, 50, "ANDAL FIGHTERS", { fontSize: "48px", fill: "red", fontFamily: 'bold' });
    this.add.text(257, 120, "GAME OVER", { fontSize: "32px", fill: "white", fontFamily:'bold' });
    this.add.text(267, 160, "ANDAL WON! :-`)", { fontSize: "18px", fill: "red" });
    this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    const scores = async() => {
        return await api.getScores()
    }

    const display = async() => {
        const scs = await scores()
        scs.sort((a,b) => b.score - a.score)
        for (let i = 0; i < 10; i++) {
            this.add.text(207, 185 + (i * 20), scs[i].user , { fontSize: "22px", fill: "yellow" });
            this.add.text(437, 185 + (i * 20), ' - ' + scs[i].score , { fontSize: "22px", fill: "yellow" });
        }
    }
    display()
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

export default Over
