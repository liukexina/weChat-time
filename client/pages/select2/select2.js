// pages/select2/select2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: [
      {
        logo: '../image/timeo.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "市图书馆",
        numall: '20',
        numsur: '10',
        size: "哈尔滨市图书馆",
        user: "软件学院",
      }, {
        logo: '../image/11.jpg',
        time: '2018-3-30 11:00-14:00',
        title: "招恩敬老院",
        numall: '25',
        numsur: '10',
        size: "哈尔滨",
        user: "电工学院",
      }, {
        logo: '../image/22.png',
        time: '2018-3-10 8:00-14:00',
        title: "三下乡",
        numall: '20',
        numsur: '10',
        size: "绥化市望奎县",
        user: "数学学院",
      }, {
        logo: '../image/miao.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        numall: '20',
        numsur: '10',
        size: "哈尔滨",
        user: "张三",
      }, {
        logo: '../image/11.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        numall: '20',
        numsur: '10',
        size: "哈尔滨",
        user: "张三",
      }, {
        logo: '../image/11.jpg',
        time: '2018-3-14 13:00-14:00',
        title: "K歌",
        numall: '20',
        numsur: '10',
        size: "哈尔滨",
        user: "张三",
      }
    ]
  },
  find: function () {
    wx.navigateTo({
      url: 'select2'
    })
  },
  contant: function () {
    wx.navigateTo({
      url: '../details2/details2'
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