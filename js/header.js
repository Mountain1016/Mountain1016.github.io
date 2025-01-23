// ヘッダーにロゴを表示する．
document.addEventListener("DOMContentLoaded", function () {
    const currentPath = window.location.pathname;
    const logoPath = currentPath.includes('/html/') ? '/img/logo.png' : 'img/logo.png';

    const header = document.createElement("header");
    header.innerHTML = `
        <a href="${currentPath.includes('/html/') ? '/top.html' : 'top.html'}">
            <img src="${logoPath}" alt="ロゴ" style="max-width: 150px; transition: opacity 0.3s;">
        </a>
    `;
    document.body.insertBefore(header, document.body.firstChild);

    // ロゴの半透明処理
    const logo = header.querySelector("img");
    logo.addEventListener("mouseover", () => {
        logo.style.opacity = "0.5"; // 半透明にする
    });
    logo.addEventListener("mouseout", () => {
        logo.style.opacity = "1"; // 元に戻す
    });
});