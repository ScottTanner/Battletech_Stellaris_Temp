const fs = require('fs')

fs.readFile('plaintext.txt', (err, data) => { 
    if (err) throw err;
    const quickData = [];
    const nameData = [];
    const loyalty = [];
    const xCoors = [];
    const yCoors = [];
    let systems = {};

    const planetData = data.toString().split('\n');

    for (let i = 0; i < planetData.length; i++) {
        quickData.push(planetData[i].split(' '));        
        let j = quickData[i];
        //creating planet loyalty to list
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

        // systems[i] = {
        //         "name" : nameData[i],
        //         "position" : {
        //             "x" : xCoors[i] * -1,
        //             "y" : yCoors[i] * -1
        //         },
        //         "spawn" : false,
        //         "initializer" : null,
        //         "prevent_hyperlane" : false,
        //         "id" : i
        // };

        systems[i] = {
            "name" : nameData[i],
            "id" : i,
            "position" : {
                "x" : (.75 * xCoors[i]) * -1,
                "y" : (.75 * yCoors[i]) * -1
            }
        };

    }

    // console.log(systems);

    var writer = fs.createWriteStream("log.txt", systems);

    for ( let i = 0; i < 1935; i++) {
        writer.write('  system = {\n');
        writer.write('      name = ' + systems[i].name);
        writer.write('     id = ' + systems[i].id + '\n');
        writer.write('      position = {\n');
        writer.write('          x = ' + systems[i].position.x + '\n');
        writer.write('          y = ' + systems[i].position.y + '\n');
        writer.write('      }\n');
        writer.write('  }\n');
        writer.write('\n');
    }

});