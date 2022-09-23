document.getElementById("main-action").onclick = function () {
    /*Плавное перемещение, при нажатии на кнопку, к секции -  'cars'*/
    document.getElementById("cars").scrollIntoView({behavior: "smooth"});
};

/*получаем доступ к массиву элементов, с классом "car-button"*/
let buttons = document.getElementsByClassName("car-button");

/*При инициализации страницы, запускается цикл, которые перебирает кнопки в указанном массиве
* и затем на каждую кнопку "прикрепляет" обработчик события*/
for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = function (){
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

    if(isFieldNameValid){
        alert(infoMessage.concat(fieldName));
    }else if (isFieldPhoneValid) {
        alert(infoMessage.concat(fieldPhone));
    }else if (isFieldCarValid) {
        alert(infoMessage.concat(fieldCar));
    }else {
        alert("Спасибо за заявку. Мы скоро свяжемся с вами");
    }
};
