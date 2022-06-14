// pages/commit/commit.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
      viewContent:[]

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.cloud.callFunction({
        name:"getScenryById",
        data:{
          "id":options.id
        }
      }).then(res=>{
        this.setData({
          'viewContent':res.result.data
        })
        console.log(this.data.viewContent)
      }).catch(console.error)

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