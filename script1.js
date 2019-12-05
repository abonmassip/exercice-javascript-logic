var button1 = document.getElementById("submit_array1");
var input1 = document.getElementById("array1");
var output1 = document.getElementById("output_array1")

const answer3 = giveArray => { // combining both answers, array with two arrays inside, one for numbers and one for strings, and they have inside groups of arrays for repeated elements
    let numbersArray = [];
    let stringsArray = [];
    let newNumbersArray = [];
    let newStringsArray = [];
    giveArray.forEach(item => {
        if ((typeof item) === 'number') {
            numbersArray.push(item);
        } else if ((typeof item) === 'string') {
            stringsArray.push(item);
        }
    });
    numbersArray.sort((a, b) => a - b);
    stringsArray.sort();
    [...new Set(numbersArray)].forEach(item => {
        const numberGroup = numbersArray.filter(num => num === item);
        if (numberGroup.length === 1) {
            newNumbersArray.push(numberGroup[0]);
        } else {
            newNumbersArray.push(numberGroup);
        }
    });
    [...new Set(stringsArray)].forEach(item => {
        const numberGroup = stringsArray.filter(num => num === item);
        if (numberGroup.length === 1) {
            newStringsArray.push(numberGroup[0]);
        } else {
            newStringsArray.push(numberGroup);
        }
    });
    let result1 = [newNumbersArray, newStringsArray];
    output1.innerHTML = "";
    output1.appendChild(document.createTextNode(JSON.stringify(result1)));
}

const inputToAnswer3 = par => {
    const newPar = par.map(num => {
        if (num.includes('"') === true) {
            return num.replace(/['" ]+/g, '');
        } else {
            return parseInt(num, 10)
        }
    })
    answer3(newPar);
}

button1.addEventListener("click", function () {
    inputToAnswer3(input1.value.split(","));
});