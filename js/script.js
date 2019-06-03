// Дожидаемся, что бы загрузилась вся страница до начала выполнения скрипта

window.addEventListener('DOMContentLoaded', function (){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');


// Скрываем весь контент, кроме первого 
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    // Т.к. передаем 1, то первый контент всегда отображаетя при загрузке страницы
    hideTabContent(1); 

    // Выбранному контенту добавляем класс show
        function showTabContent (b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

// Делигирование события, привязываем вкладку к контенту
    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
    // Определяем, какой контент выбран
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
})