var button2 = document.getElementById("submit_array2");
var input2 = document.getElementById("array2");
var input2Target = document.getElementById("target");
var output2 = document.getElementById("output_array2");

const answer4 = (array, target) => {
    for (value of array) {
        for (sumValue of array) {
            if (value + sumValue === target) {
                let result2 = [value, sumValue];
                output2.innerHTML = "";
                output2.appendChild(document.createTextNode(JSON.stringify(result2)));
                return;
            }
        }
    }
}

// answer4([1, 2, 3], 4)
// Array [ 1, 3 ]

const inputToAnswer4 = par => {
    const newPar = par.map(num => parseInt(num, 10));
    answer4(newPar, parseInt(input2Target.value, 10));
}

button2.addEventListener("click", function () {
    inputToAnswer4(input2.value.split(","));
});