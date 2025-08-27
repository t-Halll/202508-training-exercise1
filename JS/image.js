// 参照する画像ファイル数の指定
const numberOfImagesToShow = 9; // ここで表示するファイル数を指定

// 参照する画像ファイルの数だけ画像を表示
fetch('json/images.json') // JSONファイルを読み込む
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('image-container');
        // 指定した数だけ画像をループ処理する
        for (let i = 0; i < Math.min(data.length, numberOfImagesToShow); i++) {
            const imageData = data[i];
            const img = document.createElement('img'); // img要素を作成
            img.src = imageData.path; // 画像のパスを設定
            container.appendChild(img); // コンテナに画像要素を追加
        }
    })
    .catch(error => {
        console.error('JSONファイルの読み込みまたは処理中にエラーが発生しました:', error);
    });