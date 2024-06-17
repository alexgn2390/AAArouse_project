document.addEventListener('DOMContentLoaded', function () {
    // Проверяем инициализацию всех элементов
    const initSelect = (buttonId, optionsId, arrowId, optionClass) => {
        const selectButton = document.getElementById(buttonId);
        const selectOptions = document.getElementById(optionsId);
        const arrowIcon = document.getElementById(arrowId);
        const selectOptionsList = document.querySelectorAll(optionClass);

        if (selectButton && selectOptions && arrowIcon) {
            // Добавляем обработчик событий на кнопку
            selectButton.addEventListener('click', function () {
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
                option.addEventListener('click', function () {
                    selectButton.innerHTML = `${this.textContent}
                        <svg id="${arrowId}" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.5 1.75L10 10.25L18.5 1.75" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`;
                    selectOptions.style.display = 'none';
                    arrowIcon.classList.remove('arrow-up');
                });
            });

            // Добавляем обработчик событий на документ
            document.addEventListener('click', function (e) {
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
window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // 300 пикселей - это примерное значение
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Прокрутка наверх при нажатии на кнопку
scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuClose = document.getElementById("menu-close");
    const mobileMenu = document.getElementById("mobile-menu");
    let recentClose = document.getElementById('recent-close');
    const toggleButton = document.getElementById('toggleButton')
    let recentArticles = document.getElementById('recentArticles');


    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = "block";
    });

    menuClose.addEventListener("click", function () {
        mobileMenu.style.display = "none";
    });
    menuClose.addEventListener("click", function () {
        mobileMenu.style.display = "none";
    });

    toggleButton.addEventListener('click', function () {
        recentArticles.style.display = 'block'

    });

    recentClose.addEventListener('click', function () {
        recentArticles.style.display = 'none'
    });


});




document.addEventListener('DOMContentLoaded', function() {
    const officeLocation = document.getElementById('officeLocation');
    const officeHeader = document.querySelector('.office');
    const ourServices = document.getElementById('ourServices');
    const ourService = document.querySelector('.our_service');
    const ourLocations = document.getElementById('ourLocations');
    const ourLocation = document.querySelector('.our_location');
    const ourBlog = document.getElementById('ourBlog');
    const blog = document.querySelector('.blog');


    // Функция для проверки размера экрана и управления видимостью блока
    function checkScreenWidth() {
        if (window.innerWidth < 430) {
            officeLocation.classList.add('hidden');
            ourServices.classList.add('hidden');
            ourLocations.classList.add('hidden');
            ourBlog.classList.add('hidden');


        } else {
            officeLocation.classList.remove('hidden');
            ourServices.classList.remove('hidden');
            ourLocations.classList.remove('hidden');
            ourBlog.classList.remove('hidden');


        }
    }

    // Добавляем обработчик клика на заголовок
    officeHeader.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            officeLocation.classList.toggle('hidden');
        }
    });

    ourService.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourServices.classList.toggle('hidden');
        }
    });
    ourLocation.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourLocations.classList.toggle('hidden');
        }
    });

    blog.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourBlog.classList.toggle('hidden');
        }
    });



    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', checkScreenWidth);

    // Проверяем начальную ширину экрана
    checkScreenWidth();
});
document.addEventListener('DOMContentLoaded', function() {
    const ourServices = document.getElementById('ourServices2');
    const ourLocations = document.getElementById('ourLocations');
    const ourBlog = document.getElementById('ourBlog');

    const serviceHeader = document.querySelector('.our_service-2');
    const locationHeader = document.querySelector('.our_location');
    const blogHeader = document.querySelector('.blog');

    // Функция для проверки размера экрана и управления видимостью блоков
    function checkScreenWidth() {
        if (window.innerWidth < 430) {
            ourServices.classList.add('hidden');
            ourLocations.classList.add('hidden');
            ourBlog.classList.add('hidden');
        } else {
            ourServices.classList.remove('hidden');
            ourLocations.classList.remove('hidden');
            ourBlog.classList.remove('hidden');
        }
    }

    // Добавляем обработчики кликов на заголовки
    serviceHeader.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourServices.classList.toggle('hidden');
        }
    });

    locationHeader.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourLocations.classList.toggle('hidden');
        }
    });

    blogHeader.addEventListener('click', function() {
        if (window.innerWidth < 430) {
            ourBlog.classList.toggle('hidden');
        }
    });

    // Добавляем обработчик изменения размера окна
    window.addEventListener('resize', checkScreenWidth);

    // Проверяем начальную ширину экрана
    checkScreenWidth();
});
