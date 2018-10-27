Page({
  ...require('../../base/app.js'),
  
  /**
   * 页面的初始数据
   */
  data: {
    gifts: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imageBaseUrl: this.imageBaseUrl
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
    this.setData({
      gifts : this.getGlobalData().party.gifts
    })
    this.connectSocket(this.getGlobalData().party.id, (party) => {
      this.setData({
        participants: party.participants
      }, this.checkStartStatus(party))
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.closeSocket()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    this.closeSocket()
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
  
  },

  onBuyButtonClicked: function () {
    wx.showModal({
      content: 'are you sure?',
      confirmText: '确定',
      cancelText: '取消',
      success: function() {
        wx.redirectTo({
          url: '../getGift/getGift',
        })
      }
    })
  }
});