// pages/main/main.js
Page({
  data: {
    num:0,
    nameList:[
      {
         name:'张三'
      },{
        name: '李四'
      },{
        name: '宾狗'
      },{
        name: 'hello'
      },{
        name: 'what'
      },{
        name: 'dog'
      },{
        name: 'cat'
      },{
        name: 'rabbit'
      }
    ],
    logoList:[]
  },
  exchange: function () {
    var aa = this.data.num;
    var cc = this.data.nameList.lenght;
    this.setData({
        num: aa + 1
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
    wx.request({
      url: 'https://fqqnxvh6.qcloud.la/../recommend/get_rec_list',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: res => {
        // console.log(res.data)
        this.setData({
          logoList: res.data
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