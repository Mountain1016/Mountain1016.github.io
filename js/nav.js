document.addEventListener("DOMContentLoaded", function() {
    const navHtml = `
        <nav>
            <a href="/html/who.html">自己紹介</a>
            <a href="/html/works/game.html">ゲーム</a>
            <a href="/html/works/music.html">音楽</a>
            <a href="/html/works/picture.html">絵</a>
            <a href="/html/diary.html">日記</a>
            <a href="/html/histry.html">更新履歴</a>
        </nav>
    `;

    // 'nav-container' は任意の ID に変更可能
    document.getElementById('nav-container').innerHTML = navHtml;
});