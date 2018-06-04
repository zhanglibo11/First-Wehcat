// pages/home/home.js
//引入本地json数据
var caseData = require("../../data/casedata.js");
Page({
  data: {
    caselist:"",
    phone:13939399999
  },
  //中汽会展简介
  about:function(){
    wx.navigateTo({
      url: '../description/index',
    })
  },
  //商务合作跳转
  touch:function(){
    wx.navigateTo({
      url: '../cooperate/index',
    })
  },
  //联系我们跳转
  contact:function(){
    //跳转的页面在TabBar时 wx.navgateto 和wx.redirecto无效
    wx.switchTab({
      url: '../contact/index'
    })
  },
  onLoad:function(options){
   // console.log(caseData);
   this.setData({
     caselist:caseData.initData
   })
  },
  godetail:function(event){
    var caseid = event.currentTarget.dataset.caseid;
    wx.navigateTo({
      url: '../anli/index?caseid='+ caseid
    })
  }
})
