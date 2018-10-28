Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        gifts: [],
        userInfo: {},
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        /*
        this.setParty({
            "status": "created",
            "qrcodeI": 241,
            "host": {
                "partyId": 1,
                "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                "nickName": "廖亮",
                "status": "joined",
                "avatar": [{
                    "locale": null,
                    "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg"
                }],
                "id": 1
            },
            "gifts": [{
                "partyId": 1,
                "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{
                    "locale": null,
                    "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg"
                }],
                "id": 1
            }, {
                "partyId": 1,
                "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器",
                "channel": "jd",
                "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar",
                "thumbnail": [{
                    "locale": null,
                    "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg"
                }],
                "participant": {
                    "partyId": 1,
                    "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                    "nickName": "廖亮",
                    "status": "joined",
                    "avatar": [{
                        "locale": null,
                        "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg"
                    }],
                    "id": 1
                },
                "id": 1
            }],
            "participants": [{
                "partyId": 1,
                "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc",
                "nickName": "廖亮",
                "status": "joined",
                "avatar": [{
                    "locale": null,
                    "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg"
                }],
                "id": 1
            }, {
                "partyId": 1,
                "openid": "1",
                "nickName": "Liao",
                "height": "100",
                "weight": "200",
                "status": "ready",
                "avatar": [{
                    "locale": null,
                    "url": "2018/10/27/60ea87e7578b83249a70a74e992c7918.jpg"
                }],
                "id": 2
            }, {
                "partyId": 1,
                "openid": "2",
                "nickName": "Liao",
                "height": "100",
                "weight": "200",
                "status": "ready",
                "avatar": [{
                    "locale": null,
                    "url": "2018/10/27/b72ea968be2faea76318d3a5a210dd28.jpg"
                }],
                "id": 3
            }],
            "qrcode": [{
                "locale": null,
                "url": "2018/10/27/0b78b216fc6a5059a731551c8ea557a4.png"
            }],
            "id": 1
        })
        this.setUserInfo({"partyId":12,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","height":"12","weight":"12","status":"joined","avatar":[{"locale":null,"url":"2018/10/28/f4854014885902278a5a56564806453f.jpg"}],"id":12})
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
        this.setData({
            gifts: this.getParty().gifts,
            userInfo: this.getUserInfo()
        });

        this.connectSocket(this.getParty().id, (res) => {
            this.setData({
                gifts: res.gifts
            })
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

    }
});