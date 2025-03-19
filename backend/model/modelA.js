const modelB = require('./modelB');  // Importing modelB (creates cyclic dependency)

let dataA = 'Data from Model A';

function getDataA() {
    return dataA;
}

function fetchDataFromModelB() {
    return modelB.getDataB();  // Calling ModelB method
}

module.exports = {
    getDataA,
    fetchDataFromModelB,
};
