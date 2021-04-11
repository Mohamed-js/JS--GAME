import Phaser from "phaser";
import Scene from './scenes/Scene'
import Scene1 from "./scenes/Scene1";
import Scene2 from "./scenes/Scene2";

window.onload = function () {
  

  const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 390,
    scene: [Scene, Scene1, Scene2],
    audio: { disableWebAudio: true, loop: false },
    physics: { default: 'arcade', arcade: { /* debug: true */ }
    }
  };

  const game = new Phaser.Game(config);
  
  
};
