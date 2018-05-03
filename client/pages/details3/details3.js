// pages/details2/details2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    logo: '../image/timeo.jpg',
    time: '2018-3-14 13:00-14:00',
    title: "市图书馆",
    numall: '20',
    numsur: '10',
    size: "哈尔滨市图书馆",
    college: "软件学院",
    other:'没错就是这样！！！！！！！！！',
    contant: '18846180523',
    user:'Jasper'
  },
  submitname: function () {
    wx.navigateTo({
      url: '../submitname/submitname'
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