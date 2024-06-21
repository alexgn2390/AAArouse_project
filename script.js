

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        // Функция для инициализации элементов
        function initSelect(buttonId, optionsId, arrowId, optionClass) {
            const selectButton = document.getElementById(buttonId);
            const selectOptions = document.getElementById(optionsId);
            const arrowIcon = document.getElementById(arrowId);
            const selectOptionsList = document.querySelectorAll(optionClass);

            if (selectButton && selectOptions && arrowIcon) {
                selectButton.addEventListener('click', function () {
                    const isVisible = selectOptions.style.display === 'block';
                    selectOptions.style.display = isVisible ? 'none' : 'block';
                    arrowIcon.classList.toggle('arrow-up', !isVisible);
                });

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

                document.addEventListener('click', function (e) {
                    if (!selectButton.contains(e.target) && !selectOptions.contains(e.target)) {
                        selectOptions.style.display = 'none';
                        arrowIcon.classList.remove('arrow-up');
                    }
                });
            }
        }

        ['1', '2', '3', '4', '5'].forEach(num => {
            initSelect(`select-button-${num}`, `select-options-${num}`, `arrow-icon-${num}`, `.select-option-${num}`);
        });

        // Прокрутка наверх
        const scrollToTopButton = document.getElementById('scrollToTop');
        if (scrollToTopButton) {
            window.addEventListener('scroll', function () {
                scrollToTopButton.classList.toggle('visible', window.scrollY > 300);
            });

            scrollToTopButton.addEventListener('click', function () {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        // Меню и последние статьи
        const menuToggle = document.getElementById("menu-toggle");
        const menuClose = document.getElementById("menu-close");
        const mobileMenu = document.getElementById("mobile-menu");
        const toggleButton = document.getElementById('toggleButton');
        const recentArticles = document.getElementById('recentArticles');
        const recentClose = document.getElementById('recent-close');

        if (menuToggle && menuClose && mobileMenu) {
            menuToggle.addEventListener("click", () => mobileMenu.style.display = "block");
            menuClose.addEventListener("click", () => mobileMenu.style.display = "none");
        }

        if (toggleButton && recentArticles && recentClose) {
            toggleButton.addEventListener('click', () => recentArticles.style.display = 'block');
            recentClose.addEventListener('click', () => recentArticles.style.display = 'none');
        }

// Функция для управления видимостью элементов и их заголовков
        function manageVisibility(elementId, headerSelector) {
            const element = document.querySelector(elementId);
            const header = document.querySelector(headerSelector);

            if (!element || !header) return;

            // Устанавливаем начальное состояние видимости в зависимости от ширины окна
            element.classList.toggle('hidden', window.innerWidth < 430);

            // Добавляем обработчик клика на заголовок
            header.addEventListener('click', function (event) {
                if (window.innerWidth < 430) {
                    element.classList.toggle('hidden');
                }
                // Отменяем действие по умолчанию (переход по ссылке или другие действия)
                event.preventDefault();
            });

            // Добавляем обработчик для изменения видимости при изменении размера окна
            window.addEventListener('resize', function () {
                if (window.innerWidth >= 430) {
                    element.classList.remove('hidden');
                } else {
                    element.classList.add('hidden');
                }
            });
        }

// Управление первым блоком элементов
        manageVisibility('#officeLocation', '.office');
        manageVisibility('#ourServices', '.our_service');
        manageVisibility('#ourLocations', '.our_location');
        manageVisibility('#ourBlog', '.blog');

// Управление вторым блоком элементов
        manageVisibility('#ourServices2', '.our_service-2');
        manageVisibility('#ourLocations2', '.our_location-2');
        manageVisibility('#ourBlog2', '.blog-2');



        // Перенаправление
        const checkButton = document.getElementById('check');
        if (checkButton) {
            checkButton.addEventListener('click', function () {
                const zipCode = document.querySelector('.form-control').value;
                if (zipCode) {
                    window.location.href = `estimate.html?zip=${encodeURIComponent(zipCode)}`;
                } else {
                    alert("Please enter a ZIP code");
                }
            });
        }
    });
})();
