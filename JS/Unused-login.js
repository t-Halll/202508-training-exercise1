fetch('json/login.json') // 外部JSONファイルのURLを指定
    .then(response => response.json()) // レスポンスをJSON形式に変換
    .then(login =>{
    // 取得したJSONデータを変数に格納
    const ID = login.ID;
    const PW = login.PW;
    console.log("ID：",ID); // 取得したJSONデータの内容を表示
    })
    .catch(error => {
        console.error('JSONの取得中にエラーが発生しました:', error);
    });