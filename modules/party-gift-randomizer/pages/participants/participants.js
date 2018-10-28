Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        participants: [],
        isModalHidden: true,
        userHeight: '',
        userWeight: '',

        isStartButtonHidden: true,
        isReadyButtonDisabled: false
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
        let party = this.getParty();
        this.setData({
            participants: party.participants
        }, this.checkStartStatus(party));

        this.connectSocket(party.id, (party) => {
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

    onClickViewCostume: function () {
        wx.navigateTo({
            url: '../gifts/gifts',
        })
    },

    onClickReady: function () {
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

    onClickReadyConfirm: function () {
        wx.request({
            url: this.gateway.getReady,
            method: "POST",
            data: {
                id: parseInt(this.getParty().id),
                openid: this.getUserInfo().openid,
                height: this.data.userHeight,
                weight: this.data.userWeight
            },
            success: (res) => {
                this.setParty(res.data);
                this.setData({
                    isModalHidden: true,
                    participants: res.data.participants
                })
            }
        })
    },

    onClickReadyCancel: function () {
        this.setData({
            isModalHidden: true
        })
    },

    onClickStart: function () {
        wx.showModal({
            title: '提示',
            content: '确定开始后，没加入的朋友就不能加入了哦～～',
            confirmText: '确定',
            cancelText: '取消',
            success: (res) => {
                if (res.confirm) {
                    wx.request({
                        url: this.gateway.start,
                        method: "POST",
                        data: {
                            id: parseInt(this.getParty().id),
                            openid: this.getUserInfo().openid
                        },
                        success: (res) => {
                            this.setParty(res.data);
                            this.setData({
                                isModalHidden: true,
                                participants: res.data.participants
                            })
                        }
                    })
                }
            }
        })
    },

    checkStartStatus: function (party) {
        /*show start button to host*/
        if (this.getHost().openid === this.getUserInfo().openid) {
            this.setData({
                isStartButtonHidden: false
            })
        }
        /*show started button when created*/
        if (this.getMeParticipant().status === this.participantStatus.ready) {
            this.setData({
                isReadyButtonDisabled: true
            })
        }
        /*redirect to chooseGift when party started*/
        if (party.status === this.partyStatus.started) {
            wx.redirectTo({
                url: '../chooseGift/chooseGift'
            })
        }
    }

});