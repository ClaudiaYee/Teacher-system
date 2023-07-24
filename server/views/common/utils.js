$('body')
  .append(`<button type="button" class="btn btn-primary" id="liveToastBtn" style="display: none">Show live toast</button>

<div class="toast-container position-fixed top-0 end-0 p-3">
  <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="toast-body" id="toast-body"></div>
  </div>
</div>`);

const toastTrigger = document.getElementById('liveToastBtn');
const toastLiveExample = document.getElementById('liveToast');

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}

function myAlert(message) {
  $('#toast-body').text(message);
  $('#liveToastBtn').click();
}

function refreshUserInfo(func = () => {}) {
  //（Get information about the current user） 获取当前的用户的信息
  var userId = localStorage.getItem('userId');
  if (userId) {
    axios.get(`${location.origin}/api/users/item/${userId}`, {}).then((res) => {
      console.log('res=>', res);
      var data = res.data;
      if (res.status === 200) {
        window.staffEditInfo = data.userInfo;

        // （Fill in the filled in sections)填充已填写的部分
        localStorage.setItem('userId', data.userInfo.id);
        localStorage.setItem('userName', data.userInfo.name);
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        func();
        // window.location.reload();
      } else {
        alert(data.msg);
      }
    });
  }
}

function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)'); //(Constructing a Regular Expression Object with Target Parameters)构造一个含有目标参数的正则表达式对象\
  var r = window.location.search.substr(1).match(reg); //(Matching target parameters)匹配目标参数
  if (r != null) return unescape(r[2]);
  return null; //(Returns the value of the parameter)返回参数值
}

// (Jump to staff info page)跳转staff info 页面

function toStaffInfo(template, id) {
  location.href =
    ['', '../main/individual-staff.html', '../template/staff-information.html'][template] +
    `?id=${id}&template=${template}`;
}
