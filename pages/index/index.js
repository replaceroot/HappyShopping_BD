/**
 * @file index.js
 * @author swan
 */
const app = getApp();
import { request } from "../../request/index.js";
Page({
  data: {
    // 轮播图数据列表
    swiperList: [],
    // 分类导航数据列表
    navCateList: []
  },
  onLoad() {
    this.getSwiperList();
    this.getNavCateList();
  },
  // 获取轮播图数据方法
  getSwiperList() {
    request({
      url: "/home/swiperdata"
    }).then(res => {
      let swiperList = res;
      this.setData({
        swiperList
      });
    });
  },

  // 获取分类导航数据方式
  getNavCateList() {
    request({
      url: "/home/catitems"
    }).then(res => {
      let navCateList = res;
      this.setData({
        navCateList
      });
    });
  }
});
