let a = "";
let b = "";
let sign = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["X", "+", "-", "/"];

const out = document.querySelector(".calc-screen p");

function clearAll() {
    a = "";
    b = "";
    sign = "";
    finish = false;
    out.textContent = 0;
}

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
    //нажата не кнопка
    if (!event.target.classList.contains("btn")) return;
    //нажата ac
    if (event.target.classList.contains("ac")) return;

    out.textContent = "";
    //получаю нажатую кнопу
    const key = event.target.textContent;

    //если нажата 0-9 или .
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            if (key === '.' && a.includes('.')) {
                a += '';
                out.textContent = a;
            } else {
                a += key;
                out.textContent = a;
            }
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
        } else {
            if (key === '.' && b.includes('.')) {
                b += '';
                out.textContent = b;
            } else {
                b += key;
                out.textContent = b;
            }
        }
        return;
    }

    //если нажата клавиша + - / *
    if (action.includes(key)) {
        sign = key;
        out.taxtContent = sign;
        return;
    }

    //нажата =
    if (key === "=") {
        if (b === "") b = a;
        switch (sign) {
            case "+":
                a = +a + +b;
                break;
            case "-":
                a = a - b;
                break;
            case "X":
                a = a * b;
                break;
            case "/":
                if (b === "0") {
                    out.textContent = "Error";
                    a = "";
                    b = "";
                    sign = "";
                    return;
                }
                a = a / b;
                break;
        }
        finish = true;
        out.textContent = a;
        console.log(a, b, sign);
    }
};
