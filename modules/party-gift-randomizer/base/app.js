const baseUrl = "www.youbohudong.com/";
// const baseUrl = "localhost:9000/"
const baseGateway = baseUrl + "api/biz/party-gift-randomizer/";
wss://www.youbohudong.com/api/biz/party-gift-randomizer/connect?id=1
var globalData = { ...getApp().globalData } // inject globalData to local app
module.exports = {
  baseUrl: baseUrl,
  imageBaseUrl: baseUrl + "uploaded/",
  gateway: {
    connect: "wss://" + baseGateway + "connect",
    sessionInfo: "https://" + baseGateway + "session-info",
    create: "https://" + baseGateway + "create",
    qrcode: "https://" + baseGateway + "qrcode",
    join: "https://" + baseGateway + "join",
    getReady: "https://" + baseGateway + "get-ready",
    start: "https://" + baseGateway + "start",
    addGift: "https://" + baseGateway + "add-gift"
  },
  setGlobalData: function (data) {
    globalData = { ...globalData, ...data }
  },
  getGlobalData: function () {
    return globalData;
  },
  connectSocket: function (id, callback) {
    wx.connectSocket({
      url: this.gateway.connect + "?id=" + id,
      success: (res) => {
        console.log("ws opened")
        wx.onSocketMessage((res) => {
          let party = JSON.parse(res.data)
          this.setGlobalData({
            party: party
          })
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
  }
}