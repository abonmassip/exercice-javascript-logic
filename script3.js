var button3 = document.getElementById("convert");
var input3 = document.getElementById("colorcode");
var output3 = document.getElementById("output_color")

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const decHex = (num) => { // convert number. DEC to HEX
    const quotient = (num - (num % 16)) / 16;
    const remainder = num % 16;
    return [String(hex[quotient]), String(hex[remainder])];
}

const rgbHex = (a, b, c) => { // convert color code. RGB to HEX
    const num1 = decHex(a);
    const num2 = decHex(b);
    const num3 = decHex(c);
    let array = num1.concat(num2).concat(num3);
    array.unshift("#");
    output3.appendChild(document.createTextNode(array.join('')));
    return array.join('');
}

const hexDec = (par) => { // convert number. HEX to DEC
    let parArray = par.split("");
    let decArray = [];
    parArray.forEach(n => {
        hex.forEach((value, index) => {
            if (value.toString() === n.toString()) {
                decArray.push(index);
            }
        });
    })
    return (decArray[0] * 16) + decArray[1];
}

const hexRgb = (par) => { // convert color code. HEX to RGB
    let hexArray = par.split("");
    const num1 = hexDec(hexArray[0].toUpperCase().concat(hexArray[1]).toUpperCase());
    const num2 = hexDec(hexArray[2].toUpperCase().concat(hexArray[3]).toUpperCase());
    const num3 = hexDec(hexArray[4].toUpperCase().concat(hexArray[5]).toUpperCase());
    output3.appendChild(document.createTextNode(`rgb(${num1}, ${num2}, ${num3})`));
    return (`rgb(${num1}, ${num2}, ${num3})`);
}

const convertColor = (color1, color2, color3) => { // check if RGB or HEX is inserted and convert
    if (color1 && color2 && color3) {
        return rgbHex(color1, color2, color3);
    } else if (!color2 && !color3) {
        return hexRgb(color1);
    } else {
        return "Insert an RGB (xxx,xxx,xxx) or HEX('XXXXXX') color code"
    }
}


const inputToConvert = par => {
    output3.innerHTML = "";
    if (par.includes("#") === true) {
        convertColor(par.replace("#", ""));
    } else {
        array = par.replace("rgb(", "").replace(")", "").split(",");
        newArray = array.map(num => Number(num))
        convertColor(newArray[0], newArray[1], newArray[2]);
    }

}

button3.addEventListener("click", function () {
    inputToConvert(input3.value);
});