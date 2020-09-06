// 右上のプルダウンメニュー
$(function () {
  $('.dropdwn li').hover(function () {
    $("ul:not(:animated)", this).slidedown();
  }, function () {
    $("ul.dropdwn_menu", this).slideUp();
  });
});
