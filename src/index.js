import Phaser from "phaser";
import Loader from "./scenes/Loader";
import Welcome from "./scenes/Welcome";
import Game from "./scenes/Game";

window.onload = function () {
  const config = {
    type: Phaser.AUTO,
    width: 700,
    height: 390,
    scene: [Loader, Welcome, Game],
    parent: 'divId',
    dom: {
      createContainer: true,
    },
    audio: { disableWebAudio: true, loop: false },
    physics: {
      default: "arcade",
      arcade: {
        /* debug: true */
      },
    },
  };

  const game = new Phaser.Game(config);
};
