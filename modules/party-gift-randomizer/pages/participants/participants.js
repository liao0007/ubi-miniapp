const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    participantsList: undefined,
    isModalHidden: true,
    userHeight: '',
    userWeight: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      participantsList: app.globalData.party.participants
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

  onClickViewCostume: function() {
    wx.redirectTo({
      url: '../gifts/gifts',
    })
  },

  onClickReady: function() {
    this.setData({
      isModalHidden: false
    })
  },

  onInputHeight: function (e) {
    this.setData({
      userHeight: e.detail.value
    })
  },

  onInputWeight: function (e) {
    this.setData({
      userWeight: e.detail.value
    })
  },

  onClickConfirm: function () {
    // call api
    console.log(this.data.userHeight)
  },

  onClickCancel: function () {
    this.setData({
      isModalHidden: true
    })
  },

  onClickStart: function () {
    wx.showModal({
      title: 'Alert',
      content: '一旦开始，没有进来的朋友就不能进来了',
      confirmText: 'Yes',
      cancelText: 'No',
      success: function (res) {
        if (res.confirm) {
          // call api
        }
      }
    })
  }
})