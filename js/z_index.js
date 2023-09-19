// 10を基準にする
let z_index_num = 10;

/**
 * アイコン、モーダルをクリックするとz_index_numを+1する処理
 * @param app アプリ名
 */
function z_index(app) {
  z_app = document.querySelector('#' + app);
  z_app.style.zIndex = z_index_num;
  z_index_num += 1;
}