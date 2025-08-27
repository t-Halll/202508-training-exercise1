fetch('../json/RowAndCols.json') // JSON ファイルを読み込む

    .then(response => response.json()) // JSON としてパースする
    .then(data => {
        const gridRowsValue = data.gridStyles.gridTemplateRows; // JSON から値を取得
        const element = document.getElementById('my-grid-container'); // スタイルを適用したい要素を取得
        if (element) {
            element.style.gridTemplateRows = gridRowsValue; // 要素にスタイルを適用
        }
    });