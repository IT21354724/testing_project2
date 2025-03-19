// Dead functions that are never called
function unusedFunction() {
    console.log("This function is never used.");
}

function anotherUnusedFunction() {
    return "Unused Return Value";
}

// Unused variables
const unusedVariable = 42;
const anotherUnusedVariable = "Hello";

// Unused event listener
window.addEventListener("resize", () => {
    console.log("This listener does nothing relevant.");
});

// Unreachable code
function testFunction() {
    return;
    console.log("This line is never reached.");
}

// Redundant declaration
const redundantVar = "I exist but do nothing.";
const redundantVar = "Re-declared but not used.";

// Unused imports (if in a module)
import { unusedModuleFunction } from "./utils";

// Old commented-out code that never gets deleted
// function oldFeature() {
//     console.log("This was part of an old feature.");
// }

// A loop that does nothing useful
for (let i = 0; i < 10; i++) {
    // Nothing happens here
}

// Function that never gets called
function outdatedMethod() {
    console.log("This is outdated.");
}

// Unused class
class UnusedClass {
    constructor() {
        this.name = "I am never instantiated";
    }
}
