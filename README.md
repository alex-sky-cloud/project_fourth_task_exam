# project_fourth_task_exam

### Домашка к уроку «Погружение в JavaScript»

В этом домашнем задании сделаем увеличение изображений автомобилей
при наведении в карточках с помощью CSS а также добавим Parallax-эффекты
для больших изображений в блоках с помощью JavaScript.

В проекте, с которым работали во время урока, осуществите следующие шаги:

1. Найдите следующие строчки кода в файле **style.css**

       .car-item-image img {
       vertical-align: bottom;
       }

Удалите их и вставьте вместо них следующий код:

        .car-item-image:hover img {
        transform: scale(1.1);
        }
        .car-item-image img {
        vertical-align: bottom;
        transition: all .3s;
        }

2. Обновите страницу и проверьте, что при наведении на изображения автомобилей они плавно немного увеличиваются в
   размерах.

3. Вставьте следующий код в конец файла script.js:

     ```js script
      import './dist/script-additional.js'
   
    document.addEventListener("DOMContentLoaded", function () {
     let layer = document.querySelector('.price-image');
     document.addEventListener('mousemove', (event) => {
         layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
     });

     const elem = document.querySelector(".main");
     document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
      })
   });
   
     ```


4. Проверьте, что на главном экране фон передвигается при скроллинге страницы 
(картинка с автомобилем смещается вправо
   при скроллинге вниз)

5. Проверьте, что в последнем экране сайта автомобиль изменяет свою позицию 
при перемещении курсора мыши в разные стороны.

6. Числа **0.3** и **8** в этом коде – _коэффициенты_, влияющие на смещение объектов. 
 Попробуйте изменять их на другие значения и   посмотрите, что будет после обновления страницы.

7. Подберите значения коэффициентов, которые вам кажутся наиболее эффектными и оставьте их в коде.