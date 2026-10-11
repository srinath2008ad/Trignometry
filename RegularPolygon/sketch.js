const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {

    const polygon = {
        x: 200,
        y: 200,
        noOfSides: 10,
        radius: 100
    }

    r.InitWindow(400, 400, "Polygon")
    r.SetTargetFPS(60)

    return { polygon }
}

function update() {
    // change the state
}

function toRadians(degree) {
    return degree * (Math.PI / 180)
}

function giveCoordinates(theta, polygon) {
    return {
        x: polygon.x + polygon.radius * Math.sin(toRadians(theta)),
        y: polygon.y + polygon.radius * Math.cos(toRadians(theta))
    }
}

function draw(world) {
    r.BeginDrawing();

    r.ClearBackground(r.BLACK)

    for (let angle = 0; angle < 360; angle += 360 / world.polygon.noOfSides) {

        const vector1 = giveCoordinates(angle, world.polygon);
        const vector2 = giveCoordinates(angle + 360 / world.polygon.noOfSides, world.polygon)

        r.DrawLineEx(vector1, vector2, 2, r.WHITE)

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