// footer.js

// 1. HTML-код вашего футера, сохраненный как строка
const footerHTML = `
    <ul>
        <li class="break-words"><p class="source-text">Інформатика 8 клас (Нова Українська Школа). (2 години/тиждень, 70 годин/рік).</p></li>
        <li class="break-words"><p class="source-text"><a href="https://mon.gov.ua/static-objects/mon/sites/1/zagalna%20serednya/Navchalni.prohramy/2023/Model.navch.prohr.5-9.klas/Inform.osv.haluz.2023/Informatyka.7-9.kl.Bondarenko.ta.in.25.09.2023.pdf" target="_blank" class="text-blue-300 hover:underline">Модельна навчальна програма «Інформатика. 7-9 класи» для закладів загальної середньої освіти (автори Бондаренко О. О., Ластовецький В. В., Пилипчук О. П., Шестопалов Є. А.). Рекомендовано Міністерством освіти і науки України (наказ Міністерства освіти і науки України від 06.09.2023 № 1090).</a></p></li>
        <li class="break-words"><p class="source-text"><a href="https://ua.izzi.digital/DOS/1183864/1409692.html" target="_blank" class="text-blue-300 hover:underline">Навчальний посібник: Інформатика : підруч. для 8 кл. закл. загал. серед. освіти / [О. О. Бондаренко, В. В. Ластовецький, О. П. Пилипчук, Є. А. Шестопалов]. – Харків : Вид-во «Ранок», 2025. – 272 с. : іл.</a></p></li>
        <li class="break-words"><p class="source-text">Автор сайту: Лисенко Галина Олександрівна, 2025 рік.</p></li>         
    </ul>
`;

// 2. Находим контейнер в DOM
const footerContainer = document.getElementById('footer-container');

// 3. Вставляем HTML-код в контейнер
if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
}