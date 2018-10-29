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
        // this.setParty({"status":"created","qrcodeI":250,"host":{"partyId":61,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","status":"joined","avatar":[{"locale":null,"url":"2018/10/30/b0c88c018182186df07419ba5e44d69f.jpg"}],"id":74},"gifts":[{"partyId":61,"name":"成人恐龙霸王龙暴龙充气服酒吧坐骑动物万圣节儿童表演cos服饰","channel":"tb","link":"【成人恐龙霸王龙暴龙充气服酒吧坐骑动物万圣节儿童表演cos服饰】服饰】http://m.uqlsi.top/h.3j9Y2sP 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥Epg9bSEoVZd￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/a69560695067995fdaefdd7be17d1aad.jpg"}],"participant":null,"id":1322},{"partyId":61,"name":"整蛊玩具宿舍搞怪惊吓面具万圣节晚会马头面具神烦狗搞怪头套狼人杀面具舞会COS道具 神烦狗","channel":"jd","link":"https://item.m.jd.com/product/26284484474.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&ShareTm=k2lVfn3VLIhNEaGX2DU99LtLDefjY2LdB%2Bg3yF073nYX08aOK3HA39%2Bc73SxGNFL8sxE9kLrUK1Y/g3ljbLWlyGBMFVGduz9aEwfPUYHpIxsKngPxXnV0wzL%2Bgp2/hf0a3sVCyPRZnOnggGm9Hn2UlzqVzUZR4Dixhc9LJmtyHY=ht=","thumbnail":[{"locale":null,"url":"2018/10/29/d89ebb8e5a37beeb05349db63956bb56.jpg"}],"participant":null,"id":1323},{"partyId":61,"name":"整蛊玩具宿舍搞怪惊吓面具万圣节晚会马头面具神烦狗搞怪头套狼人杀面具舞会COS道具 马头","channel":"jd","link":"https://item.m.jd.com/product/26284484470.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&ShareTm=tFlP/dJPzywfwlg8t0uDal0wp63j1HkW3yif%2BKZ4e7Ho0U6QuBXGxm48nooiebBEczulClBqpNRWNguqfLAPwmQ/yIUIlxUpR7RWCdm60C6FfsmgUGsHeRsgAUrECFJkTqrORu6P0LO1Qsfdy/mfQHWt7G4q7rEsQ6KNa/EphKk=","thumbnail":[{"locale":null,"url":"2018/10/29/9bc9262fc093f0538c07760ccab7abe1.jpg"}],"participant":null,"id":1324},{"partyId":61,"name":"熊本熊卡通服装人偶 卡通服装熊 演出道具服装行走卡通服装道具熊","channel":"tb","link":"【熊本熊卡通服装人偶 卡通服装熊 演出道具服装行走卡通服装道具熊】具熊】http://m.uqlsi.top/h.3jSfPo9 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥MpiBbSEL1rk￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/3851389de001454091ce87e5ce7f295b.jpg"}],"participant":null,"id":1325},{"partyId":61,"name":"cosplay万圣节服装化妆舞会恐怖成人女王服装女巫师服恶魔服装","channel":"tb","link":"【cosplay万圣节服装化妆舞会恐怖成人女王服装女巫师服恶魔服装】服装】http://m.uqlsi.top/h.3j9Yipr 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥ADtUbSELeHo￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/bc497d54a8befdec7139c3221c432a71.jpg"}],"participant":null,"id":1326},{"partyId":61,"name":"哈利波特服装校服 格兰芬多魔法袍斗篷长袍成人儿童码万圣节cos服","channel":"tb","link":"【哈利波特服装校服 格兰芬多魔法袍斗篷长袍成人儿童码万圣节cos服】s服】http://m.uqlsi.top/h.3j92P5r 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥9L6vbSEqAgg￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/505300194a524b57ba5cbee20d4e4c66.jpg"}],"participant":null,"id":1327},{"partyId":61,"name":"定制 cosplay麦当劳小丑M记麦当劳叔叔拟人迎宾服原版免邮定制","channel":"tb","link":"【cosplay麦当劳小丑M记麦当劳叔叔拟人迎宾服原版免邮定制】定制】http://m.uqlsi.top/h.3j93U8S 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥rKvmbSEqxBO￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/a70e2f5a8a32f4ce3b8374b8aba2b18e.jpg"}],"participant":null,"id":1328},{"partyId":61,"name":"自杀小队COS哈莉·奎茵 suicide squad小丑女COS服假发全套包邮","channel":"tb","link":"【自杀小队COS哈莉·奎茵 suicide squad小丑女COS服假发全套包邮】包邮】http://m.uqlsi.top/h.3j9WcZv 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥KsljbSEJoot￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/2d02c685af6e3604288f3c81f0292340.jpg"}],"participant":null,"id":1329},{"partyId":61,"name":"天使翅膀 成人儿童表演羽毛燕形翅膀道具 圣诞万圣节新娘花童装扮","channel":"tb","link":"【天使翅膀 成人儿童表演羽毛燕形翅膀道具 圣诞万圣节新娘花童装扮】装扮】http://m.uqlsi.top/h.3jZLwzF 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥hMY2bSErTkM￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/c230b3b2777b606e9249e89467806d30.jpg"}],"participant":null,"id":1330},{"partyId":61,"name":"万圣节服装猫女装cosplay性感黑猫连体服装动物扮演舞台表演服装","channel":"tb","link":"【万圣节服装猫女装cosplay性感黑猫连体服装动物扮演舞台表演服装】服装】http://m.uqlsi.top/h.3j9e3Gd 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥AGmwbSEJMeD￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/ef155998383c84f912d53de5ce24e286.jpg"}],"participant":null,"id":1331},{"partyId":61,"name":"全包紧身衣夜行忍者隐身人万圣节服装COS化妆舞会舞台黑衣人荧光","channel":"tb","link":"【全包紧身衣夜行忍者隐身人万圣节服装COS化妆舞会舞台黑衣人荧光】荧光】http://m.uqlsi.top/h.3jfoGiD 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥uYiRbSEJCAC￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/677b3f14ad9103a3449d9512464bdeee.jpg"}],"participant":null,"id":1332},{"partyId":61,"name":"超凡蜘蛛侠衣服 儿童 男孩万圣节儿童服装cosplay服成人紧身衣","channel":"tb","link":"【超凡蜘蛛侠衣服 儿童 男孩万圣节儿童服装cosplay服成人紧身衣】身衣】http://m.uqlsi.top/h.3jSi2or 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥y09gbSErNzg￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/ec999b97c7930bb462898733224bee36.jpg"}],"participant":null,"id":1333},{"partyId":61,"name":"阿拉伯中东沙特王子石油大亨cos服装成人迪拜酋长Arabian Costume","channel":"tb","link":"【阿拉伯中东沙特王子石油大亨cos服装成人迪拜酋长Arabian Costume】me】http://m.uqlsi.top/h.3jZMzXq 点击链 JRhtbSErGgU￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/127652ad15891a5b47bf4eef02ab9231.jpg"}],"participant":null,"id":1334},{"partyId":61,"name":"蝙蝠服装女成人性感连帽连体衣化装舞会变装派对cos服夜店演出服","channel":"tb","link":"【蝙蝠服装女成人性感连帽连体衣化装舞会变装派对cos服夜店演出服】出服】http://m.uqlsi.top/h.3jfqry8 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥6HRnbSEryKR￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/a64ddaead5a2d6ebbd991fb2038eec2c.jpg"}],"participant":null,"id":1335},{"partyId":61,"name":"定制 美少女战士月野兔cos服水冰月衣服cosplay服装女动漫cos全套装","channel":"tb","link":"【美少女战士月野兔cos服水冰月衣服cosplay服装女动漫cos全套装】套装】http://m.uqlsi.top/h.3jZoubN 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥VQZkbSEIc5x￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/875e864816baea2b576f13da5849dd0a.jpg"}],"participant":null,"id":1336},{"partyId":61,"name":"万圣节女成人罗马雅典娜公主希腊女神cosplay阿拉伯男演出服装","channel":"tb","link":"【万圣节女成人罗马雅典娜公主希腊女神cosplay阿拉伯男演出服装】服装】http://m.uqlsi.top/h.3jSS9gW 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥RWPXbSEIqMA￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/2f747a3bb527b122519870c5383878cb.jpg"}],"participant":null,"id":1337},{"partyId":61,"name":"动漫Rick and Morty瑞克和莫蒂周边万圣节派对面具搞笑头套Cos","channel":"tb","link":"【动漫Rick and Morty瑞克和莫蒂周边万圣节派对面具搞笑头套Cos】os】http://m.uqlsi.top/h.3jfKD7i 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥WSeGbSEs0yZ￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/fe06a0d23019972d0cf77dfd35b2414e.jpg"}],"participant":null,"id":1338},{"partyId":61,"name":"cos原力觉醒全套战服 角色扮演服男周边星球觉醒星球大战cos服装","channel":"tb","link":"【cos原力觉醒全套战服 角色扮演服男周边星球觉醒星球大战cos服装】服装】http://m.uqlsi.top/h.3jZLznI 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥c4oebSEI9QT￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/f9f4e7ec3bce4e4213fd3ead6e5afa8f.jpg"}],"participant":null,"id":1339},{"partyId":61,"name":"美国新总统cos特朗普面具川普模仿名人搞笑派对造型演出Trump头套","channel":"tb","link":"【美国新总统cos特朗普面具川普模仿名人搞笑派对造型演出Trump头套】头套】http://m.uqlsi.top/h.3jfKmI0 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥T6cRbSEsMkO￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/1e56ca793482bc7229a2ca7f3e10b1d3.jpg"}],"participant":null,"id":1340},{"partyId":61,"name":"定制 社会猪卡通人偶服装 行走动漫cos表演道具服网红猪一家人表演衣服","channel":"tb","link":"【社会猪卡通人偶服装 行走动漫cos表演道具服网红猪一家人表演衣服】衣服】http://m.uqlsi.top/h.3jfpigk 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥s3TlbSEscdh￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/8a3c5b38522ff9bef3aca35ef066f9a3.jpg"}],"participant":null,"id":1341},{"partyId":61,"name":"COS万圣节狂欢节派对聚会成人男七龙珠人物龟仙人武天老师服装","channel":"tb","link":"【COS万圣节狂欢节派对聚会成人男七龙珠人物龟仙人武天老师服装】服装】http://m.uqlsi.top/h.3jZKiFA 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥9FdQbSEs9sQ￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/d2bb5abd897ee35e8bcabed6b754e7b8.jpg"}],"participant":null,"id":1342},{"partyId":61,"name":"万圣节舞台表演成人男女金色蓝色彩色70年代时髦迪斯科演出服装","channel":"tb","link":"【万圣节舞台表演成人男女金色蓝色彩色70年代时髦迪斯科演出服装】服装】http://m.uqlsi.top/h.3j93oXy 点击链 点击链接，再选择浏览器咑閞；或復·制这段描述￥Q8HubSEHbT3￥后到淘♂寳♀","thumbnail":[{"locale":null,"url":"2018/10/29/e39e50c1d95bba8e27650b833e5e59ca.jpg"}],"participant":null,"id":1343},{"partyId":61,"name":"TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器","channel":"jd","link":"https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar","thumbnail":[{"locale":null,"url":"2018/10/30/61d0cf053793b7a3ef9503fb4ad45331.jpg"}],"participant":{"partyId":61,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","status":"joined","avatar":[{"locale":null,"url":"2018/10/30/b0c88c018182186df07419ba5e44d69f.jpg"}],"id":74},"id":1344},{"partyId":61,"name":"TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器","channel":"jd","link":"https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar","thumbnail":[{"locale":null,"url":"2018/10/30/1b27360597a0b6881ee1aab919b1bf02.jpg"}],"participant":{"partyId":61,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","status":"joined","avatar":[{"locale":null,"url":"2018/10/30/b0c88c018182186df07419ba5e44d69f.jpg"}],"id":74},"id":1345},{"partyId":61,"name":"TP-LINK TL-WDR5620 1200M 5G双频智能无线路由器 四天线智能wifi 稳定穿墙高速家用路由器","channel":"jd","link":"https://item.m.jd.com/product/3668211.html?&utm_source=iosapp&utm_medium=appshare&utm_campaign=t_335139774&utm_term=CopyURL&ad_od=share&Shar","thumbnail":[{"locale":null,"url":"2018/10/30/4b0ed288b5466558da0b3655fd3a6855.jpg"}],"participant":{"partyId":61,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","status":"joined","avatar":[{"locale":null,"url":"2018/10/30/b0c88c018182186df07419ba5e44d69f.jpg"}],"id":74},"id":1346}],"participants":[{"partyId":61,"openid":"o14OW5FRmh-sCu0Q0yt1u1fcW0uc","nickName":"廖亮","status":"joined","avatar":[{"locale":null,"url":"2018/10/30/b0c88c018182186df07419ba5e44d69f.jpg"}],"id":74}],"qrcode":[{"locale":null,"url":"2018/10/30/76f2afdffcd7cb6d2bb2552ca60467a7.png"}],"id":61})
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