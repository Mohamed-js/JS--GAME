const addTanks = (scene, enemy, scale) => {
    setInterval(() => {
        const ob = scene.physics.add.image(1000, 300, enemy).setScale(scale);
        scene.tanks.add(ob)
        ob.setGravityY(600)
    }, 3000);
}

const addEnemies = (scene, enemy, scale) => {
    setInterval(() => {
        const sold = scene.physics.add.sprite(800, 325, enemy).setScale(scale);
        sold.play("soldier_anim");
        scene.enemies.add(sold)
        sold.setGravityY(600)
    }, 2000);
}

const addRocks = (scene, enemy, scale) => {
    setInterval(() => {
        const value = Phaser.Math.Between(0, 500);
        const rock = scene.physics.add.sprite(value, -30, enemy).setScale(scale);
        rock.play("nyzk_anim");
        scene.rocks.add(rock)
        rock.setGravityY(400)
    }, 1300);
}

export { addEnemies, addTanks, addRocks }
