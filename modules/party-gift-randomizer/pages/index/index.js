Page({
  ...require('../../base/app.js'),

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    buttonUrl: undefined
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      id: (options.id == undefined ? 0 : options.id),
      imageBaseUrl: this.imageBaseUrl,
      buttonUrl: options.id == undefined ? '/resources/images/halloween/btn_enter.png' : '/resources/images/halloween/btn_begin.png'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  onCreateWithUserInfo: function(userInfoRes) {
    this.getUserInfo(userInfoRes, userInfo => {
      wx.request({
        url: this.gateway.create,
        method: 'POST',
        data: userInfo,
        success: res => {
          this.setGlobalData({
            party: res.data
          })
          wx.redirectTo({
            url: '../share/share',
          })
        }
      })
    })
  },

  onJoinWithUserInfo: function(userInfoRes) {
    this.getUserInfo(userInfoRes, userInfo => {
      wx.request({
        url: this.gateway.join,
        method: "POST",
        data: {
          id: parseInt(this.data.id),
          ...userInfo
        },
        success: res => {
          this.setGlobalData({
            party: res.data
          })
          wx.redirectTo({
            url: '../participants/participants',
          })
        }
      })
    })
  },

  getUserInfo: function(userInfoRes, callback) {
    wx.login({
      success: loginInfoRes => {
        // 发送 res.code 到后台换取 openId, sessionKey
        wx.request({
          url: this.gateway.sessionInfo + '?code=' + loginInfoRes.code,
          method: "GET",
          success: sessionInfoRes => {
            // 返回 openid
            let userInfo = JSON.parse(userInfoRes.detail.rawData);
            userInfo.openid = sessionInfoRes.data.openid;
            // store userInfo
            this.setGlobalData({
              userInfo: userInfo
            })
            callback(userInfo)
          }
        })
      }
    })
  }
});