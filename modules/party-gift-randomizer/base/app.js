const environment = "prod";
const schema = environment === "prod" ? "s" : "";
const baseUrl = environment === "prod" ? "www.youbohudong.com/" : "localhost:9000/";
const baseGateway = baseUrl + "api/biz/party-gift-randomizer/";

let globalData = {...getApp().globalData}; // inject globalData to local app
function setGlobalData (data) {
    globalData = {...globalData, ...data}
}

module.exports = {
    baseUrl: baseUrl,
    imageBaseUrl: "http" + schema + "://" + baseUrl + "uploaded/",
    gateway: {
        connect: "ws" + schema + "://" + baseGateway + "connect",
        sessionInfo: "http" + schema + "://" + baseGateway + "session-info",
        get: "http" + schema + "://" + baseGateway + "get",
        create: "http" + schema + "://" + baseGateway + "create",
        qrcode: "http" + schema + "://" + baseGateway + "qrcode",
        join: "http" + schema + "://" + baseGateway + "join",
        getReady: "http" + schema + "://" + baseGateway + "get-ready",
        start: "http" + schema + "://" + baseGateway + "start",
        addGift: "http" + schema + "://" + baseGateway + "add-gift"
    },
    partyStatus: {
        created: 'created',
        started: 'started',
        closed: 'closed'
    },
    participantStatus: {
        joined: 'joined',
        ready: 'ready'
    },
    /*global data operator*/

    /*websocket*/
    connectSocket: function (id, callback) {
        wx.connectSocket({
            url: this.gateway.connect + "?id=" + id,
            success: (res) => {
                console.log("ws opened for party id: " + id);
                wx.onSocketMessage((res) => {
                    let party = JSON.parse(res.data);
                    setGlobalData({
                        party: party
                    });
                    callback(party)
                })
            }
        })
    },
    closeSocket: function () {
        wx.closeSocket({
            success: (res) => {
                console.log("ws closed")
            }
        })
    },
    /*accessors*/
    setUserInfo: function (userInfo) {
        setGlobalData({
            userInfo: userInfo
        })
    },
    setParty: function (party) {
        setGlobalData({
            party: party
        });
    },
    getUserInfo: function () {
        return globalData.userInfo
    },
    getParty: function () {
        return globalData.party
    },
    getHost: function () {
        return this.getParty().host
    },
    getParticipantById: function (id) {
        return this.getParty().participants.find((participant) => participant.id === id)
    },
    getParticipantByOpenid: function (openid) {
        return this.getParty().participants.find((participant) => participant.openid === openid)
    },
    getGiftById: function (id) {
        return this.getParty().gifts.find((gift) => gift.id === id)
    },
    getMeParticipant: function () {
        return this.getParticipantByOpenid(this.getUserInfo().openid)
    }
};