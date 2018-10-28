Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        id: 0,
        buttonUrl: ''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: (options.id === undefined ? 0 : options.id),
            imageBaseUrl: this.imageBaseUrl,
            buttonUrl: options.id === undefined ? '/resources/images/halloween/btn_begin.png' : '/resources/images/halloween/btn_enter.png'
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

    },

    onClickCreate: function (userInfoRes) {
        this.setOpenidWithUserInfoWithCallback(userInfoRes, (userInfoWithOpenid) => {
            /*create party and redirect to share page*/
            wx.request({
                url: this.gateway.create,
                method: 'POST',
                data: userInfoWithOpenid,
                success: (res) => {
                    this.setParty(res.data);
                    wx.reLaunch({
                        url: '../share/share',
                    })
                }
            })
        })
    },

    onClickJoin: function (userInfoRes) {
        this.setOpenidWithUserInfoWithCallback(userInfoRes, (userInfoWithOpenid) => {
            /*check party status*/
            wx.request({
                url: this.gateway.get,
                method: "POST",
                data: {
                    id: parseInt(this.data.id),
                    openid: userInfoWithOpenid.openid,
                },
                success: (res) => {
                    let party = res.data;
                    this.setParty(party);
                    /*join party*/
                    if (party.status === this.partyStatus.created) {
                        wx.request({
                            url: this.gateway.join,
                            method: "POST",
                            data: {id: parseInt(this.data.id), ...userInfoWithOpenid},
                            success: (res) => {
                                this.setParty(res.data);
                                wx.reLaunch({
                                    url: '../participants/participants',
                                })
                            }
                        })
                    } else if (party.status === this.partyStatus.started) {
                        /*party started, if participant then redirect to choose gift page*/
                        wx.reLaunch({
                            url: '../chooseGift/chooseGift',
                        })
                    }
                }
            })


        })
    },

    setOpenidWithUserInfoWithCallback: function (userInfoRes, callback) {
        wx.login({
            success: loginRes => {
                // 发送 res.code 到后台换取 openId, sessionKey
                wx.request({
                    url: this.gateway.sessionInfo,
                    method: "GET",
                    data: {
                        code: loginRes.code
                    },
                    success: sessionRes => {
                        let userInfo = {...JSON.parse(userInfoRes.detail.rawData), openid: sessionRes.data.openid};
                        this.setUserInfo(userInfo);
                        callback(userInfo)
                    }
                })
            }
        })
    }
});