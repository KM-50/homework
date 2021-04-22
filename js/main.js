window.onload = function () {
    let inputs = document.getElementsByClassName('input-text');
    inputs[0].onkeypress = (event) => {
        let number = parseInt(event.key);
        if (isNaN(number)) {
        } else {
            return false;
        }
    };

    inputs[1].onkeypress = (event) => {
        let inputTwo = event.key;
        if (inputTwo === '.' || inputTwo === ',') {
            alert('Запрещенный символ')
            return false;
        }
    };

    let checkbox = document.getElementsByTagName('input')[5];
    checkbox.onclick = () => {
        if (checkbox.checked) {
            console.log('Согласен');
        } else {
            console.log('Не согласен');
        }
    };

    document.getElementById('button').addEventListener('click', () => {
        if (inputs[0].value === '') {
            alert('Заполните поле Full Name');
            return false;
        } else if (inputs[1].value === '') {
            alert('Заполните поле Your username');
            return false;
        } else if (inputs[2].value === '') {
            alert('Заполните поле E-mail');
            return false;
        } else if (inputs[3].value === '') {
            alert('Заполните поле Password');
            return false;
        } else if (inputs[4].value === '') {
            alert('Заполните поле Repeat Password');
            return false;
        } else if (inputs[3].value !== inputs[4].value) {
            alert('Пароли не совпадают');
            return false;
        } else if (checkbox.checked === false) {
            alert('Не выбрано согласие на обработку данных');
            return false;
        } else {
            alert('OKAY');
            return true;
        }
    });

    document.getElementById('message').addEventListener('click', () => {
        document.getElementById('message').innerText = 'Log in to the system';

        let inputsDelete = document.getElementsByClassName("form-info");
        while (inputsDelete[0].firstChild) {
            inputsDelete[0].removeChild(inputsDelete[0].firstChild);
        }
        while (inputsDelete[2].firstChild) {
            inputsDelete[2].removeChild(inputsDelete[2].firstChild);
        }
        while (inputsDelete[4].firstChild) {
            inputsDelete[4].removeChild(inputsDelete[4].firstChild);
        }
        let consent = document.getElementById("form-agree");
        while (consent.firstChild) {
            consent.removeChild(consent.firstChild);
        }

        document.getElementById('button').innerText = 'Sign In';

        let href = document.getElementById("form-message");
        while (href.firstChild) {
            href.removeChild(href.firstChild);
        }
    });
}
