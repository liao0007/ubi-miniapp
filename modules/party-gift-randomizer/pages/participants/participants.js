Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        participants: [],
        isShowReadyModal: false,
        userHeight: '123',
        userWeight: '1234',

        isShowStartButton: false,
        isReadyButtonDisabled: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.setParty({"status":"created","host":{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},"gifts":[],"participants":[{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12},{"partyId":12,"openid":"1","nickName":"Liao","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/7f764ad9acb56819382030103f11b12c.jpg"}],"id":37},{"partyId":12,"openid":"2","nickName":"Liao","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/8797479dfb05ef33cf4bf2e8372e3778.jpg"}],"id":38},{"partyId":12,"openid":"3","nickName":"Liao","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/4dda728bd0306591d7da9d8a8cbd6f4d.jpg"}],"id":39}],"qrcode":null,"id":12})
        // this.setUserInfo({"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12})

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

    hideReadyModal: function () {
        this.setData({
            isShowReadyModal: false
        })
    },

    onClickViewCostume: function () {
        wx.navigateTo({
            url: '../gifts/gifts',
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

    onClickReady: function () {
        this.setData({
            isShowReadyModal: true
        })
    },

    onClickCancel: function () {
        this.hideReadyModal();
    },

    onClickConfirm: function () {
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
                    participants: res.data.participants
                }, this.hideReadyModal());

            }
        })
    },

    onClickStart: function () {
        wx.showModal({
            title: '提示',
            content: '确定开始后，没加入的朋友就不能加入了哦～',
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
                                participants: res.data.participants
                            }, this.hideReadyModal());
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
                isShowStartButton: true
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
            wx.reLaunch({
                url: '../chooseGift/chooseGift'
            })
        }
    }

});