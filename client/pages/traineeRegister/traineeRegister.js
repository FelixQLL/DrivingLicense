Page({
  data: {
    // text:"这是一个页面"
    array: ['徐松林', '李明', '张贤', '陈思璇', '张树森'],
    index: 0,
    date: '2018年 05月 26日'
  },

  /**
   * 监听普通picker选择器
   */
  bindTimeChange: function (e) {
    //改变index值，通过setData()方法重绘界面
    this.setData({
      index: e.detail.value
    });
  },

  /**
   * 监听时间picker选择器
   */
  listenerTimePickerSelected: function (e) {
    //调用setData()重新绘制
    this.setData({
      time: e.detail.value,
    });
  },

  /**
   * 监听日期picker选择器
   */
  listenerDatePickerSelected: function (e) {
    this.setDate({
      date: e.detail.value
    })
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})