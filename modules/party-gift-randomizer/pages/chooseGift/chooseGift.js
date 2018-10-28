Page({
    ...require('../../base/app.js'),

    /**
     * 页面的初始数据
     */
    data: {
        beneficiary: {},
        gifts: [],
        selectedGiftId: 7
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //this.setParty({ "status": "created", "host": { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, "gifts": [{ "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 2 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }, { "partyId": 1, "name": "TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器", "channel": "jd", "link": "https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar", "thumbnail": [{ "locale": null, "url": "2018/10/27/223c84d789186b9bab4e5583ccf1fa2c.jpg" }], "participant": { "partyId": 1, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/27/26d5ed00fe06e7fd12e871d351020477.jpg" }], "id": 1 }, "id": 1 }], "participants": [{ "beneficiaryId": 12, "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 }, { "partyId": 12, "openid": "1", "nickName": "Liao", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/7f764ad9acb56819382030103f11b12c.jpg" }], "id": 37 }, { "partyId": 12, "openid": "2", "nickName": "Liao", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/8797479dfb05ef33cf4bf2e8372e3778.jpg" }], "id": 38 }, { "partyId": 12, "openid": "3", "nickName": "Liao", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/4dda728bd0306591d7da9d8a8cbd6f4d.jpg" }], "id": 39 }], "qrcode": null, "id": 12 })
        //this.setUserInfo({ "partyId": 12, "openid": "o14OW5FRmh-sCu0Q0yt1u1fcW0uc", "nickName": "廖亮", "height": "12", "weight": "12", "status": "joined", "avatar": [{ "locale": null, "url": "2018/10/28/f4854014885902278a5a56564806453f.jpg" }], "id": 12 })
        
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
        this.setData({
            gifts: this.getParty().gifts,
            beneficiary: beneficiary
        });
        this.connectSocket(this.getParty().id, (party) => {
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

    onClickGift: function(e) {
        this.setData({
            selectedGiftId: e.target.dataset.id
        })
    },
    onClickBuy: function () {
        wx.showModal({
            content: 'are you sure?',
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
                        wx.redirectTo({
                            url: '../getGift/getGift',
                        })
                    }
                })
            }
        })
    }
});