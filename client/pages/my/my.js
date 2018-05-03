// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"Jasper",
    contant:'18846180523',
    sex:'男',
    actnum:10
    },
  collection: function () {
    wx.navigateTo({
      url: '../collection/collection'
    })
  },
  myaction: function () {
    wx.navigateTo({
      url: '../myaciton/myaction'
    })
  },
  join: function () {
    wx.navigateTo({
      url: '../join/join'
    })
  },
  mydata: function () {
    wx.navigateTo({
      url: '../mydata/mydata'
    })
  },
  setting: function () {
    wx.navigateTo({
      url: '../setting/setting'
    })
  },
  change: function () {
    wx.navigateTo({
      url: '../change/change'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})