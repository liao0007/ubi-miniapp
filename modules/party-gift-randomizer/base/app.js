const envrionment = "dev";
const schema = envrionment == "prod" ? "s" : ""
const baseUrl = envrionment == "prod" ? "www.youbohudong.com/" : "localhost:9000/"
const baseGateway = baseUrl + "api/biz/party-gift-randomizer/";

var globalData = { ...getApp().globalData } // inject globalData to local app
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