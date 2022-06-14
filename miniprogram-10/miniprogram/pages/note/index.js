// pages/note/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        title:"南圣托里尼岛",
        swiperPhoto:[
            {url:"./images/scenry1.png"},
            {url:"./images/喜欢-未1.png"}
        ],
        content:"提起希腊，脑海里可能会浮现出：阳光明媚时，碧海蓝天下，白色的房子。美丽浪漫，祥和的氛围。",
        title:"南圣托里尼岛",
        rate:"4.0",
        location:"即可拉德斯，希腊",
        tag:[
            {tagname:"自然风光"},
            {tagname:"新晋热门"}
        ],
        distance:"27",
        checkFlag:false,
        likeFlag:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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

    },
    changeCheck(){
        console.log("collect")
        this.setData({
            'checkFlag' : !this.data.checkFlag
        })
    },
    likeCheck(){
        console.log("like")
        this.setData({
            'likeFlag' : !this.data.likeFlag
        })
    }
})