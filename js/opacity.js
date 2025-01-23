// 画像の要素を取得
const images = document.querySelectorAll('.social-image');

// 画像にマウスが重なったときの処理
images.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '1'; // 透明度を0%（完全に不透明）に変更
    });

    // マウスが外れたときの処理
    image.addEventListener('mouseout', () => {
        image.style.opacity = '0.5'; // 透明度を50%に戻す
    });
});
