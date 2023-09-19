/**
 * アイコンを押してアプリを表示
 * 赤丸を押してアプリを削除
 * @param app アプリ名
 */
function modal(app) {
  document.querySelector('#app_icon_' + app).addEventListener('click', function () {
    //読み込み用の時間
    window.setTimeout(time, 1000)
    function time() {
      // hideを削除
      document.querySelector('#' + app).classList.remove('hide');
    }
  });
}

//ウィンドウ閉じるボタンが押されたときの処理
function modal_red(app) {
  document.querySelector('#' + app + '_red_button').addEventListener('click', function () {
    //hideを追加
    document.querySelector('#' + app).classList.add('hide');

    const node = document.querySelector('#' + app + '_contents');

    //firstChild は最初の子要素を表す
    //子要素を1つずつ消す
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    //drag削除
    document.querySelector('#' + app).classList.remove('drag');

    //ない
    document.querySelector('#app_bottom_' + app + '+span>span').classList.add('hide');
  });
}

modal('App1');
modal_red('App1');
modal('App2');
modal_red('App2');
modal('App3');
modal_red('App3');