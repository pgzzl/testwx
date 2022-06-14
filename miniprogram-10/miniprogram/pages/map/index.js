// pages/map/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        latitude:"40.040417",
        longitude:"40.040417",

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: "发现好风景",
          })
          var _this=this
          wx.getLocation({
            type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
            success (res) {
              var latitude = res.latitude
              var longitude = res.longitude
              _this.setData({latitude:latitude,longitude:longitude})
              console.log(_this.data.longitude)
              console.log(_this.data.latitude)
              }
              
            })
            
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