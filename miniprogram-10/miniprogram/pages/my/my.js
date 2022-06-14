// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
            nickName:"",
            position:"武汉",
            avatarUrl:"",
          region: ['湖北省', '武汉市', '洪山区'],
          topBgUrl:"./images/myBackGround.png",
          basicItems: [
            { text: '我的喜好', url: '../fav/index', icon: './images/我的喜好.png', tips: '1' },
            { text: '我的笔记', url: '../note/index', icon: './images/我的笔记.png', tips: '1' },
            { text: '收藏景点', url: '../vlist/index', icon: './images/收藏景点.png', tips: '1' },
            { text: '已赞笔记', url: '../noteLiked/index', icon: './images/已赞笔记.png', tips: '1' },
            { text: '寻求帮助', url: '../note/index', icon: './images/寻求帮助.png', tips: '1' },
          ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(getApp().globalData.userInfo);
        console.log(getApp().globalData.userInfo.nickName);
        this.setData({
            'nickName': getApp().globalData.userInfo.nickName,
            'avatarUrl':getApp().globalData.userInfo.avatarUrl
            })
        console.log(this.data.avatarUrl)
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})