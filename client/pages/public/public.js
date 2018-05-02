// pages/public/public.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [
      {
        logo: '../image/11.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        size: "哈尔滨",
        user: "张三",
      }, {
        logo: '../image/22.png',
        time: '2018-3-15 14:00-15:00',
        title: "爬山",
        size: "帽儿山",
        user: "李四",
      }, {
        logo: '../image/timeo.jpg',
        time: '2018-3-16 11:00-14:00',
        title: "学习",
        size: "黑龙江大学图书馆",
        user: "monkey",
      }, {
        logo: '../image/miao.jpg',
        time: '2018-3-20 9:00-14:00',
        title: "逛街",
        size: "中央大街",
        user: "pig",
      }, {
        logo: '../image/11.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        size: "哈尔滨",
        user: "张三",
      }, {
        logo: '../image/11.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        size: "哈尔滨",
        user: "张三",
      }
    ]
  },
  select: function () {
    wx.navigateTo({
      url: '../select1/select1'
    })
  },
  launch: function () {
    wx.navigateTo({
      url: '../launch1/launch1'
    })
  },
  contant: function () {
    wx.navigateTo({
      url: '../details1/details1'
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