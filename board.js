const { Board, Led } = require("johnny-five");
const board = new Board();

const activated = () => {
    const led = new Led(13); //LED inserted directly into pin 13
    led.on();
    console.log("Vegpatch System Running!");
}

board.on("ready", () => {
    activated();
});