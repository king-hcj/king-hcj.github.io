/*页面载入完成后，创建复制按钮*/
!function (e, t, a) {
  /* code */
  var initCopyCode = function () {
    var copyHtml = '';
    copyHtml += '<button style="margin-left:calc(100% - 82px)" class="btn-copy" data-clipboard-snippet="">';
    copyHtml += '  <i class="fa fa-globe"></i><span>复制代码</span>';
    copyHtml += '</button>';
    // 因为使用的是谷歌代码插件样式，每个pre标签外再嵌套一层code
    // $("pre").wrap("<code></code>");
    // $("code pre").before(copyHtml);
    $(".highlight pre").before(copyHtml);
    new ClipboardJS('.btn-copy', {
      target: function (trigger) {
        return trigger.nextElementSibling;
      }
    });
  }
  initCopyCode();
}(window, document);