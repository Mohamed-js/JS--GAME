import * as actions from "../actions";
import Cred from "../cred/cred";

const enemyMock = jest.fn().mockReturnValue({
    x: 20
});

// Testing moveTank method
it("Should move the enemy object by 10 speed", () => {
  actions.moveTank(enemyMock(), 10);
  expect(enemyMock().x).toBe(10);
});

it("Should decrease the enemy's x by 5 speed only", () => {
    actions.moveTank(enemyMock(), 5);
    expect(enemyMock().x).not.toBe(14);
});


// Testing levelUp method
it("Should make Cred speed 240 on levelUp", () => {
    Cred.speed = 140
    Cred.score = 150
    actions.levelUp()
    expect(Cred.speed).toBe(240);
});

it("Should make rockSpeed 1100 on levelUp", () => {
    Cred.rockSpeed = 1300
    Cred.score = 150
    actions.levelUp()
    expect(Cred.rockSpeed).toBe(1100);
});

it("Should make Cred rockGrav 450 on levelUp", () => {
    Cred.rockGrav = 400
    Cred.score = 150
    actions.levelUp()
    expect(Cred.rockGrav).toBe(450);
});

it("Should make Cred enemyT 1500 non levelUp", () => {
    Cred.enemyT = 2000
    Cred.score = 150
    actions.levelUp()
    expect(Cred.enemyT).toBe(1500);
});

it("Should make Cred enemyS 1.9 on levelUp", () => {
    Cred.enemyS = 1.8
    Cred.score = 150
    actions.levelUp()
    expect(Cred.enemyS).toBe(1.9);
});

it("Should change Cred rockGrave", () => {
    Cred.rockGrav = 400
    Cred.score = 150
    actions.levelUp()
    expect(Cred.rockGrav).not.toBe(400);
});
