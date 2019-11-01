const app = getApp();
import { request } from "../../request/index.js";
Page({
  data: {
    // 左侧菜单数据
    leftList: [],
    // 右侧商品数据
    rightList: [],
    currentIndex: 0
  },
  catesData: [],
  onLoad() {
    this.getCategoryList();
  },
  getCategoryList() {
    request({
      url: "/categories"
    }).then(res => {
      this.catesData = res;
      console.log(this.catesData);
      const leftList = this.catesData.map((item, index) => {
        return item.cat_name;
      });
      const rightList = this.catesData[this.data.currentIndex].children
      console.log("rightList", rightList);
      this.setData({
        leftList,
        rightList
      });
    });
  },
  handleItemClick(e) {
    const { index } = e.currentTarget.dataset;
    const rightList = this.catesData[index].children;
    this.setData({
      currentIndex: index,
      rightList
    });
  }
});
