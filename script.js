document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('counter-btn');
    const counter = document.getElementById('counter');
    if (!btn || !counter) return;

    let count = 0;
    btn.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });
});
