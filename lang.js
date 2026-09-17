(function () {
    // Применяем сохранённый язык как можно раньше
    const savedLang = localStorage.getItem('lang') || 'ru';
    document.documentElement.lang = savedLang;
})();

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-btn');
    const savedLang = localStorage.getItem('lang') || 'ru';

    function applyLang(lang) {
        document.querySelectorAll('[data-ru]').forEach(el => {
            const text = el.getAttribute('data-' + lang);
            if (text) {
                // Если у элемента есть дети с id — сохраняем их
                if (el.children.length === 0) {
                    el.textContent = text;
                } else {
                    // меняем только текстовые узлы
                    el.childNodes.forEach(node => {
                        if (node.nodeType === 3 && node.textContent.trim()) {
                            node.textContent = text;
                        }
                    });
                }
            }
        });
        document.documentElement.lang = lang;
        if (langBtn) langBtn.textContent = lang === 'ru' ? 'EN' : 'RU';
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const current = localStorage.getItem('lang') || 'ru';
            const next = current === 'ru' ? 'en' : 'ru';
            localStorage.setItem('lang', next);
            applyLang(next);
        });
    }

    applyLang(savedLang);
});
