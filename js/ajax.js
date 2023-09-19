/**
 * contents内にクリックされたページを入れる処理
 * @param App アプリ名
 * @param contents コンテンツ名
 */
function App_ajax(App, contents) {
  $.ajax({
    type: 'GET',
    url: 'views/' + App + '.html',
    dataType: 'html',
    success: function(data) {
      // ajax通信成功時の処理
      $('#' + contents).html(data);
    },
    error: function(xhr, status, error) {
      // ajax通信成失敗の処理
      console.log('通信エラーが発生しました。');
    }
  });
}