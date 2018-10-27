// const baseUrl = "https://www.youbohudong.com/";
const baseUrl = "http://localhost:9000/"
const baseGateway = baseUrl + "api/biz/party-gift-randomizer/";
var globalData = { ...getApp().globalData } // inject globalData to local app
module.exports = {
  baseUrl: baseUrl,
  imageBaseUrl: baseUrl + "uploaded/",
  gateway: {
    connect: baseGateway + "connect",
    sessionInfo: baseGateway + "session-info",
    create: baseGateway + "create",
    qrcode: baseGateway + "qrcode",
    join: baseGateway + "join",
    getReady: baseGateway + "get-ready",
    start: baseGateway + "start",
    addGift: baseGateway + "add-gift"
  },
  setGlobalData: function(data) {
    globalData = {...globalData, ...data}
  },
  getGlobalData: function() {
    return globalData;
  },
  getGiftById: function (id) {
    return globalData.party.gifts.filter((gift) => gift.id == id);
  },
  imageForGiftId: function (id) {
    return baseUrl + "uploaded/" + this.getGiftById(id).thumbnail.url;
  },
  getParticipantById: function(id) {
    return globalData.party.participants.filter((participant) => participants.id == id);
  },
  avatarForParticipantId: function (id) {
    return baseUrl + "uploaded/" + this.getParticipantById(id).avatar.url;
  }
}