// 右上のプルダウンメニュー
$(dropdown).hover(
  function () {
    $(this).children('.dropdown').addclass('open');
  }, function () {
    $(this).children('.dropdown').addclass('close');
  }
