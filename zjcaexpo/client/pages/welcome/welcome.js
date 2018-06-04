// pages/welcome/welcome.js
var app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onLoad: function(){
    setTimeout(function(){
      wx.redirectTo({
        url: '../index/index'
      })
    },3000)
  }
})