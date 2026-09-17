// Тема
(function () {
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    }
})();

document.addEventListener('DOMContentLoaded', () => {
    const themeBtn = document.getElementById('theme-btn');
    if (!themeBtn) return;

    const isDark = document.body.classList.contains('dark');
    themeBtn.textContent = isDark ? '☀️' : '🌙';

    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        const nowDark = document.body.classList.contains('dark');
        themeBtn.textContent = nowDark ? '☀️' : '🌙';
        localStorage.setItem('theme', nowDark ? 'dark' : 'light');
    });
});
