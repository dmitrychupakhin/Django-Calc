const calc = document.querySelector('.calc');
const result = document.querySelector('#result');

calc.addEventListener('click', function (event) {
    if (!event.target.classList.contains('calc__btn')) return;

    let value = event.target.innerText;

    switch (value) {
        case 'C':
            result.innerText = '';
            break;

        case '=':
            result.innerText = parseFloat(eval(result.innerText).toFixed(10));
            break;

        default:
            result.innerText += value;

    }
    setOrReplaceCookie("calcData", document.getElementById('result').innerText, 7);
});

window.onload = loadCalc;

function loadCalc() {
    var calcData = getCookie("calcData");
    document.getElementById('result').innerText = calcData;
    console.log(calcData);
}

function getCookie(name) {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        // Проверяем, начинается ли cookie с указанного имени
        if (cookie.indexOf(name + "=") === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return null;
}

function setOrReplaceCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }

    // Устанавливаем cookie, заменяя существующий с тем же именем
    document.cookie = name + "=" + value + expires + "; path=/";
}