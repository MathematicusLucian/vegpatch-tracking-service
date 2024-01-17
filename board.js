const { Board, Led } = require("johnny-five");
const board = new Board();
let plantsState = [];

const PLANTS_CONFIG = [
    { plantName: "Potatoes 1", soilSensor: "a7", dryState: "b0", wetState: "b1" },
    { plantName: "Potatoes 2", soilSensor: "a7", dryState: "b0", wetState: "b1" },
    { plantName: "Courgettes 1", soilSensor: "a7", dryState: "b0", wetState: "b1" },
    { plantName: "Courgettes 2", soilSensor: "a7", dryState: "b0", wetState: "b1" }
]

const activated = () => {
    const led = new Led(13); //LED inserted directly into pin 13
    led.on();
    console.log("Vegpatch System Running!");
}

const addPlantState = (plantConfig) => {
    plantsState.push = [
        { 
            name: plantConfig.plantName, 
            soilState: five.Sensor(plantConfig.soilSensor), 
            wetState: new five.Led(plantConfig.wetSensor), 
            dryState: new five.Led(plantConfig.drySensor), 
            bothMoistureStates: new five.Led([plantConfig.dryState, plantConfig.wetState]) 
        }
    ];
}

board.on("ready", () => {
    activated();
    PLANTS_CONFIG.forEach(PLANT => {
        addPlantState(PLANT);
    });
    dry.on();

    /*
    Wet, and soil sensor value < 350, 
    toggle state of both sensors; 
    Dry, and soil sensor value > 350, 
    toggle state of both sensors.
    */

    plantsState.forEach(plantState => {

        plantState.soilSensor.on("change", () => {

            if (plantState.wetState.isOn && plantState.soilSensor.value < 350) {
                plantState.bothMoistureStates.toggle();
            } else {
                if (plantState.dryState.isOn && plantState.soilSensor.value > 350) {
                    plantState.bothMoistureStates.toggle();
                }
            }
        });

    });

    board.on("exit", () => {
      led.off();
    });
});