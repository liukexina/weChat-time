// pages/public/public.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    List: []
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
      wx.request({
        url: 'https://fqqnxvh6.qcloud.la/../publics/get_public_list',
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: res => {
          this.setData({
            List: res.data
          })
        }
      })
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