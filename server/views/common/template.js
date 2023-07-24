// （Unified handling of data on template pages）统一处理模板页面的数据
var templatePage = {
  id: '',
  template: '',
  userInfo: {},
  init() {
    this.id = getUrlParam('id');
    this.template = getUrlParam('template');
    if (!this.id) {
      myAlert('no staff');
    } else {
      this.getData();
    }
  },

  getData() {
    var that = this;
    axios.get(`${location.origin}/api/users/item/${this.id}`, {}).then((res) => {
      console.log('res=>', res);
      var data = res.data;
      if (res.status === 200) {
        // window.staffEditInfo = data.userInfo;
        // // （Fill in the filled in sections）填充已填写的部分
        // localStorage.setItem('userId', data.userInfo.id);
        // localStorage.setItem('userName', data.userInfo.name);
        // localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        // func();
        // window.location.reload();
        // （Different templates use different rendering functions）不同的模板使用不同的渲染函数
        // [that.renderPage1, that.renderPage2][that.template - 1](data.userInfo);
        that.renderPage && that.renderPage(data.userInfo);
      } else {
        myAlert(data.msg);
      }
    });
  },
};
