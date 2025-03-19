const modelA = require('./modelA');  // Importing modelA (creates cyclic dependency)

let dataB = 'Data from Model B';

function getDataB() {
    return dataB;
}

function fetchDataFromModelA() {
    return modelA.getDataA();  // Calling ModelA method
}

module.exports = {
    getDataB,
    fetchDataFromModelA,
};
