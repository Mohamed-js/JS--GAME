import Phaser from "phaser";
import Loader from "./scenes/Loader";
import Welcome from "./scenes/Welcome";
import Game from "./scenes/Game";
import Over from "./scenes/Over";

window.onload = function () {
  const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 390,
    scene: [Loader, Welcome, Game, Over],
    parent: 'divId',
    dom: {
      createContainer: true,
    },
    audio: { disableWebAudio: true, loop: false },
    physics: {
      default: "arcade"
    },
  };

  const game = new Phaser.Game(config);
};
