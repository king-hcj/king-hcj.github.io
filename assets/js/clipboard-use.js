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
    var colors = ['#ff4545', '#3eff00', '#ADFF2F', '#B0C4DE', '#00FA9A'];
    var showToast = (content = '') => {
      const toastDOM = document.createElement('div');
      toastDOM.style.position = 'fixed';
      toastDOM.style.left = '50%';
      toastDOM.style.bottom = '33.33vh';
      toastDOM.style.transform = 'translate(-50%, -50%)';
      toastDOM.style.maxWidth = '80vw';
      toastDOM.style.width = 'max-content';
      toastDOM.style.textAlign = 'center';
      toastDOM.style.borderRadius = '8px';
      toastDOM.style.backgroundColor = 'rgba(33, 44, 52, 0.8)';
      toastDOM.style.padding = `6px 8px`;
      toastDOM.style.color = colors[Math.floor(Math.random() * colors.length)];
      toastDOM.style.fontSize = '14px';
      toastDOM.innerText = content;

      document.body.appendChild(toastDOM);
      setTimeout(() => {
        document.body.removeChild(toastDOM);
      }, 3000);

      return content;
    };
    var clipboard = new ClipboardJS('.btn-copy', {
      target: function (trigger) {
        return trigger.nextElementSibling;
      }
    });
    clipboard.on('success', function (e) {
      showToast("天若有情天亦老，复制黏贴下班早，复制成功君走好～");
    });
  }
  initCopyCode();
}(window, document);