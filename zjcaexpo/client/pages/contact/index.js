// pages/contact/index.js
//引入本地json数据
var cooData = require("../../data/cooperation.js");
Page({

  /**
   * 页面的初始数据120.123166,30.330487
   */
  data: {
    coodata:"",
    markers: [{
      latitude: 30.323401,
      longitude: 120.115494, 
      iconPath: '../../images/location.png',
      width: 32,
      height: 32
    }]
   },
  //拨打电话
  call: function () {
    wx.makePhoneCall({
      phoneNumber: '13636333333',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  //  // console.log(cooData);
  //   this.setData({
  //     coodata:cooData.initData,
  //     sdfsdf:markers
  //   })
  }
})