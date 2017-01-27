//index.js
//获取应用实例
var app = getApp()
var amapFile = require('../../libs/amap-wx.js');//v1.1.0
Page({
  data: {
    src: ''
  },
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: "此处输入您申请的高德地图小程序key" });
    wx.getSystemInfo({
      success: function (data) {
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          zoom: 8,
          size: size,
          scale: 2,
          markers: "mid,0xFF0000,A:116.37359,39.92437;116.47359,39.92437",
          success: function (data) {
            that.setData({
              src: data.url
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })
      }
    })
  }
})
