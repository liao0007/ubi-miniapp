Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        id: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: (options.scene === undefined ? 0 : options.scene),
            imageBaseUrl: this.imageBaseUrl
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.innerAudioContext = wx.createInnerAudioContext();
        this.innerAudioContext.src = 'http://secret-party.oss-cn-beijing.aliyuncs.com/anpai.mp3'
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
    onShareAppMessage: function (options) {
        return {
            title: '百万单身青年都在安排的小程序-秘密派对',
            path: "modules/party-gift-randomizer/pages/index/index",
            success: function (res) {
                // 转发成功
                wx.showModal({
                    title: '提示',
                    content: '如果需要邀请Ta加入当前派对，请找群主索取并分享二维码',
                    showCancel: false,
                    confirmText: "知道了"
                });
            }
        }
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
                        success: () => {
                            this.innerAudioContext.play()
                        }
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
                                    success: () => {
                                        this.innerAudioContext.play()
                                    }
                                })
                            }
                        })
                    } else if (party.status === this.partyStatus.started) {
                        /*party started, if participant then redirect to choose gift page*/
                        let beneficiary = this.getParticipantById(this.getMeParticipant().beneficiaryId)
                        if (beneficiary.giftId !== undefined && beneficiary.giftId > 0) {
                            wx.reLaunch({
                                url: '../result/result',
                                success: () => {
                                    this.innerAudioContext.play()
                                }
                            })
                        } else {
                            wx.reLaunch({
                                url: '../chooseGift/chooseGift',
                                success: () => {
                                    this.innerAudioContext.play()
                                }
                            })
                        }
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
    },

    scanCode: function (res) {
        wx.scanCode({
            success: (res) => {
                console.log(res)
            }
        })
    }
});