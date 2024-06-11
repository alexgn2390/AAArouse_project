document.addEventListener('DOMContentLoaded', function() {
    // Проверяем инициализацию всех элементов
    const initSelect = (buttonId, optionsId, arrowId, optionClass) => {
        const selectButton = document.getElementById(buttonId);
        const selectOptions = document.getElementById(optionsId);
        const arrowIcon = document.getElementById(arrowId);
        const selectOptionsList = document.querySelectorAll(optionClass);

        if (selectButton && selectOptions && arrowIcon) {
            // Добавляем обработчик событий на кнопку
            selectButton.addEventListener('click', function() {
                if (selectOptions.style.display === 'block') {
                    selectOptions.style.display = 'none';
                    arrowIcon.classList.remove('arrow-up');
                } else {
                    selectOptions.style.display = 'block';
                    arrowIcon.classList.add('arrow-up');
                }
            });

            // Добавляем обработчик событий на опции
            selectOptionsList.forEach(option => {
                option.addEventListener('click', function() {
                    selectButton.innerHTML = `${this.textContent}
                        <svg id="${arrowId}" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.75L10 10.25L18.5 1.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
                    selectOptions.style.display = 'none';
                    arrowIcon.classList.remove('arrow-up');
                });
            });

            // Добавляем обработчик событий на документ
            document.addEventListener('click', function(e) {
                if (!selectButton.contains(e.target) && !selectOptions.contains(e.target)) {
                    selectOptions.style.display = 'none';
                    arrowIcon.classList.remove('arrow-up');
                }
            });
        } else {
            console.error(`Элементы с идентификаторами ${buttonId}, ${optionsId} или ${arrowId} не найдены.`);
        }
    };

    // Инициализация для каждого селекта
    initSelect('select-button', 'select-options', 'arrow-icon', '.select-option');
    initSelect('select-button-2', 'select-options-2', 'arrow-icon-2', '.select-option-2');
    initSelect('select-button-3', 'select-options-3', 'arrow-icon-3', '.select-option-3');
    initSelect('select-button-4', 'select-options-4', 'arrow-icon-4', '.select-option-4');


});

let scrollToTopButton = document.getElementById('scrollToTop');

// Показываем или скрываем кнопку в зависимости от прокрутки
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) { // 300 пикселей - это примерное значение
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Прокрутка наверх при нажатии на кнопку
scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
