 
function calculateTotal(price, tax) {
    return price + (price * tax);
}

function calculateTotalDuplicate(price, tax) {
    return price + (price * tax);
}

 
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(num => num * num);

const duplicateSquaredNumbers = numbers.map(num => num * num);

 
function fetchData() {
    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

function fetchDataAgain() {
    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

 
button.addEventListener("click", () => {
    console.log("Button clicked!");
});

button.addEventListener("click", () => {
    console.log("Button clicked!");
});

 
function toggleActive() {
    element.classList.toggle("active");
}

function toggleActiveAgain() {
    element.classList.toggle("active");
}
