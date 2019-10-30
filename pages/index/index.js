/**
 * @file index.js
 * @author swan
 */
const app = getApp()
import { request } from "../../request/index.js";
Page({
    data: {
        // 轮播图数据列表
        swiperList: []
    },
    onLoad() {
        request({
            url: '/home/swiperdata'
        }).then(res => {
            console.log(res);
            let swiperList = res;
            this.setData({
                swiperList
            })
        })
    }
})
