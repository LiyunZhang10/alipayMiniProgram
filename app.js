App({
  onLaunch(options) {
    // 第一次打开
    console.info('App onLaunch');
  },
  onShow(options) {
    // 小程序启动，或从后台被重新打开
  },
  onHide() {
    // 小程序从前台进入后台
  },
  onError(msg) {
    // 小程序发生脚本错误或 API 调用出现报错
    console.log(msg);
  },
  globalData: {
  // 全局数据
    name: 'alipay',
  },
});