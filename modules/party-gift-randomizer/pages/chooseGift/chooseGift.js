Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        beneficiary: {},
        gifts: [],
        selectedGiftId: 0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*
        this.setParty({
            "status": "started",
            "qrcodeI": 445,
            "host": {
                "partyId": 81,
                "openid": "o14OW5GMQoTSdpZ1rKionGivL6xc",
                "nickName": "Adam",
                "height": "170",
                "weight": "1300",
                "beneficiaryId": 90,
                "status": "ready",
                "avatar": [{"locale": null, "url": "2018/10/28/e6534a4723c05172a9b1183d11fc16a0.jpg"}],
                "id": 89
            },
            "gifts": [{
                "partyId": 81,
                "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{"locale": null, "url": "2018/10/28/bae02eec1a5b436c070977be96be7922.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                    "nickName": "廖亮",
                    "height": "180",
                    "weight": "80",
                    "beneficiaryId": 89,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/f9b7ec29a7c102b4d7b10e948619c31f.jpg"}],
                    "id": 90
                },
                "id": 17
            }, {
                "partyId": 81,
                "name": "卡帝乐鳄鱼（CARTELO)跑步运动休闲男板鞋子 男士商务皮面低帮系带韩版时尚潮流 CQ8291 深灰 43码",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/5437380.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{"locale": null, "url": "2018/10/28/44f70b47e27335650390261690c59e4a.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                    "nickName": "廖亮",
                    "height": "180",
                    "weight": "80",
                    "beneficiaryId": 89,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/f9b7ec29a7c102b4d7b10e948619c31f.jpg"}],
                    "id": 90
                },
                "id": 18
            }, {
                "partyId": 81,
                "name": "面包预拌粉手工意大利面粉 硬质小麦面包粉 意大利面粉1kg/袋",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/28039962525.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&",
                "thumbnail": [{"locale": null, "url": "2018/10/28/b76e11b1a7dc81ed4581cda44fc08ce1.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5GMQoTSdpZ1rKionGivL6xc",
                    "nickName": "Adam",
                    "height": "170",
                    "weight": "1300",
                    "beneficiaryId": 90,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/e6534a4723c05172a9b1183d11fc16a0.jpg"}],
                    "id": 89
                },
                "id": 19
            }, {
                "partyId": 81,
                "name": "卡帝乐鳄鱼（CARTELO)跑步运动休闲男板鞋子 男士商务皮面低帮系带韩版时尚潮流 CQ8291 深灰 43码",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/5437380.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{"locale": null, "url": "2018/10/28/3169e2503587924d4805d295b74a0d20.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                    "nickName": "廖亮",
                    "height": "180",
                    "weight": "80",
                    "beneficiaryId": 89,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/f9b7ec29a7c102b4d7b10e948619c31f.jpg"}],
                    "id": 90
                },
                "id": 20
            }, {
                "partyId": 81,
                "name": "面包预拌粉手工意大利面粉 硬质小麦面包粉 意大利面粉1kg/袋",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/28039962525.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&",
                "thumbnail": [{"locale": null, "url": "2018/10/28/7e7b79c6399a5d9e5114a71bfade9605.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5GMQoTSdpZ1rKionGivL6xc",
                    "nickName": "Adam",
                    "height": "170",
                    "weight": "1300",
                    "beneficiaryId": 90,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/e6534a4723c05172a9b1183d11fc16a0.jpg"}],
                    "id": 89
                },
                "id": 21
            }, {
                "partyId": 81,
                "name": "面包预拌粉手工意大利面粉 硬质小麦面包粉 意大利面粉1kg/袋",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/28039962525.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&",
                "thumbnail": [{"locale": null, "url": "2018/10/28/739fd998dcaff608ec0a3e563e1d5a81.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5GMQoTSdpZ1rKionGivL6xc",
                    "nickName": "Adam",
                    "height": "170",
                    "weight": "1300",
                    "beneficiaryId": 90,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/e6534a4723c05172a9b1183d11fc16a0.jpg"}],
                    "id": 89
                },
                "id": 22
            }, {
                "partyId": 81,
                "name": "卡帝乐鳄鱼（CARTELO)跑步运动休闲男板鞋子 男士商务皮面低帮系带韩版时尚潮流 CQ8291 深灰 43码",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/5437380.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{"locale": null, "url": "2018/10/29/a6c49f978631c2a0666a5dda9f535ee4.jpg"}],
                "participant": {
                    "partyId": 81,
                    "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                    "nickName": "廖亮",
                    "height": "180",
                    "weight": "80",
                    "beneficiaryId": 89,
                    "status": "ready",
                    "avatar": [{"locale": null, "url": "2018/10/28/f9b7ec29a7c102b4d7b10e948619c31f.jpg"}],
                    "id": 90
                },
                "id": 23
            }],
            "participants": [{
                "partyId": 81,
                "openid": "o14OW5GMQoTSdpZ1rKionGivL6xc",
                "nickName": "Adam",
                "height": "170",
                "weight": "1300",
                "beneficiaryId": 90,
                "status": "ready",
                "avatar": [{"locale": null, "url": "2018/10/28/e6534a4723c05172a9b1183d11fc16a0.jpg"}],
                "id": 89,
                "giftId": 18,
            }, {
                "partyId": 81,
                "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                "nickName": "廖亮",
                "height": "180",
                "weight": "80",
                "beneficiaryId": 89,
                "status": "ready",
                "avatar": [{"locale": null, "url": "2018/10/28/f9b7ec29a7c102b4d7b10e948619c31f.jpg"}],
                "id": 90
            }],
            "qrcode": [{"locale": null, "url": "2018/10/28/e465ebbabdff96b93044521c7d680099.png"}],
            "id": 81
        })
        this.setUserInfo({
            "partyId": 12,
            "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
            "nickName": "廖亮",
            "height": "12",
            "weight": "12",
            "status": "joined",
            "avatar": [{"locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg"}],
            "id": 12
        })
        */

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
        let beneficiary = this.getParticipantById(this.getMeParticipant().beneficiaryId);
        let selectedGiftIds = this.getParty().participants.filter(it => it.giftId > 0).map(it => it.giftId);
        this.setData({
            gifts: this.getParty().gifts.map(gift => {
                gift.selected = selectedGiftIds.indexOf(gift.id) > -1;
                return gift
            }),
            beneficiary: beneficiary,

        });
        /* need validate gift choose */
        this.connectSocket(this.getParty().id, (party) => {
            let selectedGiftIds = this.getParty().participants.filter(it => it.giftId > 0).map(it => it.giftId);
            this.setData({
                gifts: party.gifts.map(gift => {
                    gift.selected = selectedGiftIds.indexOf(gift.id) > -1;
                    return gift
                }),
                beneficiary: beneficiary
            });
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

    onClickGift: function (e) {
        this.setData({
            selectedGiftId: e.target.dataset.id
        })
    },
    onClickBuy: function () {
        wx.showModal({
            content: '确定为Ta安排改件商品？',
            confirmText: '确定',
            cancelText: '再想想',
            success: (res) => {
                wx.request({
                    url: this.gateway.chooseGift,
                    method: "POST",
                    data: {
                        id: this.getParty().id,
                        openid: this.getUserInfo().openid,
                        giftId: this.data.selectedGiftId,
                        beneficiaryId: this.data.beneficiary.id
                    },
                    success: (res) => {
                        this.setParty(res.data);
                        wx.redirectTo({
                            url: '../result/result',
                        })
                    }
                })
            }
        })
    }
});