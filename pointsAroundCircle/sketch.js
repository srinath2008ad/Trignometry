const r = require("raylib")

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    const circleCoordinates = {
        x: 200,
        y: 200,
        radius: 150
    }

    r.InitWindow(400, 400, "Points Around Circle")
    r.SetTargetFPS(60)

    return { circleCoordinates }
}

function update() {
    // change the state
}

function toRadians(degree) {
    return degree * (Math.PI / 180)
}

function giveCoordinates(theta, circleObject) {
    return {
        x: circleObject.x + circleObject.radius * Math.cos(toRadians(theta)),
        y: circleObject.y + circleObject.radius * Math.sin(toRadians(theta))
    }
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK);
    r.DrawCircleV(world.circleCoordinates, world.circleCoordinates.radius, r.RED)
    for (let angle = 0; angle < 360; angle += 30) {
        r.DrawCircleV(giveCoordinates(angle, world.circleCoordinates), 10, r.YELLOW)
    }

    r.EndDrawing();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};