document.getElementById("main-action").onclick = function () {
    /*Плавное перемещение, при нажатии на кнопку, к секции -  'cars'*/
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
};

/*получаем доступ к массиву элементов, с классом "car-button"*/
let buttons = document.getElementsByClassName("car-button");

/*При инициализации страницы, запускается цикл, которые перебирает кнопки в указанном массиве
* и затем на каждую кнопку "прикрепляет" обработчик события*/
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        /*Плавное перемещение, при нажатии на кнопку, к секции -  'price'*/
        document.getElementById("price").scrollIntoView({behavior: "smooth"});
    };
}

document.getElementById("price-action").onclick = function () {

    let infoMessage = "Заполните поле :  ";
    let fieldName = "name";
    let isFieldNameValid = document.getElementById(fieldName).value === "";

    let fieldPhone = "phone";
    let isFieldPhoneValid = document.getElementById(fieldPhone).value === "";

    let fieldCar = "car";
    let isFieldCarValid = document.getElementById(fieldCar).value === "";

    if (isFieldNameValid) {
        alert(infoMessage.concat(fieldName));
    } else if (isFieldPhoneValid) {
        alert(infoMessage.concat(fieldPhone));
    } else if (isFieldCarValid) {
        alert(infoMessage.concat(fieldCar));
    } else {
        alert("Спасибо за заявку. Мы скоро свяжемся с вами");
    }
};

// noinspection DuplicatedCode
/* `window.scrollY` - возвращает количество пикселей, на которые документ в данный момент
прокручивается вдоль вертикальной оси (то есть вверх или вниз) со значением 0.0,
что указывает на то, что верхний край Document в настоящее время выровнен
по верхнему краю области содержимого окна.*/
document.addEventListener("DOMContentLoaded", function () {

    const elem = document.querySelector(".main");

    /*Как только Listener зафиксирует событие скроллинга мыши,
    * тогда запускается функция движения картинки вправо по оси x*/
    document.addEventListener('scroll', () => {
        let coefficientOffset = 0.2;
        let amountPixelsScaled = coefficientOffset * window.scrollY;
        elem.style.backgroundPositionX = '0' + (amountPixelsScaled) + 'px';
    })

    let layer = document.querySelector('.price-image');

    document.addEventListener('mousemove', (event) => {

        let offsetByX = (event.clientX * 0.4) / 8;
        let offsetByY = (event.clientY * 0.7) / 8;
        layer.style.transform = 'translate3d(' + ( offsetByX ) + 'px,' + (offsetByY) + 'px,0px)';
    });


});
