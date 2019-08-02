let systems = {};
const csvSystems = readCSV();

console.log(csvSystems);

function readCSV() {
    let csvSystems = {}
    const fs = require('fs')

    fs.readFile('Converted.txt', (err, data) => {
        if (err) throw err;
        let csvData = [];
        let nameData = [];
        let xCoors = [];
        let yCoors = [];
        let planetData = data.toString().split('\n');

        for (let i = 0; i < planetData.length; i++) {
            csvData.push(planetData[i].split(','));
            csvData[i].pop();
            csvData[i].pop();
            j = csvData[i];
            
            if (j[3] == 2764) {
                csvSystems[i] = {
                    name: j[0],
                    position : {
                        x : (.90 * j[1]) * -1,
                        y : (.90 * j[2]) * -1
                    },
                    spawn : false,
                    initializer : null,
                    prevent_hyperlane : false,
                    id : i,                
                };
            }
        }
    });
    return csvSystems;
}

function readPlainText() {
    const fs = require('fs')
    const systems = {}

    fs.readFile('plaintext.txt', (err, data) => {
        if (err) throw err;
        const quickData = [];
        const nameData = [];
        const loyalty = [];
        const xCoors = [];
        const yCoors = [];
    
        const planetData = data.toString().split('\n');
    
        for (let i = 0; i < planetData.length; i++) {
            quickData.push(planetData[i].split(' '));
            let j = quickData[i];
            //creating planet loyalty list
            loyalty.push(j[2]);
            let name = [];
    
            //create name list
            for (let k = 9; k < j.length; k++) {
                name.push(j[k] + " ");
            }
            nameData.push(name.join(""));
    
            // create x coor list
            let beforeSplitX = j[4].split("");
            beforeSplitX.shift();
            beforeSplitX.pop();
            xCoors.push(beforeSplitX.join(""));
    
            //create y coor list
            let beforeSplitY = j[6].split("");
            beforeSplitY.pop();
            yCoors.push(beforeSplitY.join(""));
    
            systems[i] = {
                "name" : nameData[i],
                "position" : {
                    "x" : (.90 * xCoors[i]) * -1,
                    "y" : (.90 * yCoors[i]) * -1
                },
                "spawn" : false,
                "initializer" : null,
                "prevent_hyperlane" : false,
                "id" : i,
                "alligience" : loyalty[i]
            };
    
        }
    });
    return systems;
}

function createMapData() {
    const fs = require('fs')
    let logger = fs.createWriteStream('copydata.txt');

    for (let i = 0; i < 1934; i++) {
        logger.write("system: = {\n");
        logger.write("  id = " + systems[i].id + "\n");
        logger.write("  name = " + systems[i].name + "\n");
        logger.write("  position = {\n");
        logger.write("      x = " + systems[i].position.x + "\n");
        logger.write("      y = " + systems[i].position.y + "\n");
        logger.write("  }\n");
        switch (systems[i].alligience) {
            case "FWLPlanet":
                logger.write("  initializer = FWLPlanet\n");
                break;
            case "LCPLanet":
                logger.write("  initializer = LCPlanet\n");
                break;
            case "FSPlanet":
                logger.write("  initializer = FSPlanet\n");
                break;
            case "DCPlanet":
                logger.write("  initializer = DCPlanet\n");
                break;
            case "CCPlanet":
                logger.write("  initializer = CCPlanet\n");
                break;
            case "Planet":
                logger.write("  initializer = Planet\n");
                break;
        }
        logger.write("}\n");
    }
}