const constant = require('../../base/constant.js');
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    giftInfo: ''
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
  
  },
  bindTextAreaChange: function(e) {
    this.setData({
      giftInfo: e.detail.value
    })
  },
  onAddGiftButtonClicked: function(e) {
    // let giftInfo = this.data.giftInfo
    wx.request({
      url: constant.gateway.addGift,
      method: "POST",
      data: {
        id: app.globalData.party.id,
        openid: app.globalData.userInfo.openid,
        giftInfo: this.data.giftInfo
      },
      success: (res) => {
        console.log(res)
        app.globalData.party = res.data
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
});