// pages/anli/index.js
var caseData = require("../../data/casedata.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // detailData:[]
  },
  onLoad:function(options){
    //获取携带参数
    //console.log(options);
    //console.log(caseData.initData[options.caseid]);
    this.setData(caseData.initData[options.caseid])
  }
})