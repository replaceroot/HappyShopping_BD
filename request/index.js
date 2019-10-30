export const request = params => {
  swan.showLoading({
    title: "玩命加载中...",
    mask: true
  });
  // 统一的接口前缀
  const baseUrl = "https://www.uinav.com/api/public/v1";
  return new Promise((reslove, reject) => {
    swan.request({
      // 解构params参数
      ...params,
      url: baseUrl + params.url,
      success: result => {
        //  调用回调函数返回数据
        if (result.data.meta.status === 200) {
          reslove(result.data.message);
        } else {
          reslove("获取数据失败!");
        }
      },
      fail: error => {
        // 返回失败的信息
        reject(error);
      },
      complete: () => {
        swan.hideLoading();
      }
    });
  });
};
