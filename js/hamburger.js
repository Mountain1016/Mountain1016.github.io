// ハンバーガーボタンのクリックイベント
document.querySelector('.hamburger').addEventListener('click', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});