// header.js

// 1. HTML-код шапки сайта, сохраненный как строка
const headerHTML = `
    <a href="/"><img src="./images/logo.png" alt="Логотип сайту" class="h-10 logo-main"></a>
    <div class="text-xl font-bold main-title-text">Інформатика 8 клас</div>
    <nav class="space-x-4">
        <ul class="main-navigation2">
            <li class="main-navigation"><a href="#" class="hover:text-slate-300 transition-colors duration-200">Основна сторінка</a></li>
            <li class="main-navigation"><a href="./index.html" class="hover:text-slate-300 transition-colors duration-200">8 клас</a></li>
        </ul>
    </nav>
`;

// 2. Находим контейнер в DOM
const headerContainer = document.getElementById('header-container');

// 3. Вставляем HTML-код в контейнер
if (headerContainer) {
    headerContainer.innerHTML = headerHTML;
}