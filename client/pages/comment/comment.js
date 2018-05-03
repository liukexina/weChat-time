// pages/comment/comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   List:[
     {
       name:'rabbit',
       comment:'very good!!'
     },
     {
       name: 'monkey',
       comment: 'happy new year!!'
     },
     {
       name: 'tigger',
       comment: 'what’s your name!!'
     },
     {
       name: 'row',
       comment: 'heiheiheihie'
     }
   ]
  },
  contant: function () {
    wx.navigateTo({
      url: 'comment',
      success: function (res) {
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        })
      }
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