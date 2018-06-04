//index.js
Page({
  data: {
    
  },
  onLoad: function () {
    setTimeout(function () {
      wx.switchTab({
        url: '../home/home'
      })
    },3000)
  }
})