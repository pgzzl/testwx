// pages/viewContent/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgUrl:[
            {url:"./images/IMG_4077.PNG"},
            {url:"./images/IMG_407.PNG"},
            {url:"./images/IMG_4078.PNG"}
        ],
        viewContent:[],
        NoteList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log(options.id)
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
          wx.setNavigationBarTitle({
            title: this.data.viewContent.landscapename,
          })
        }).catch(console.error)
        wx.cloud.callFunction({
          name:"getNoteByScenry",
          data:{
            id:options.id
          }
        }).then(res=>{
          this.setData({
            'NoteList':res.result.data
          })
          console.log(this.data.NoteList)
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

    },
    jumpPageToMap(){
        wx.getLocation({
            type: 'gcj02', //返回可以用于 wx.openLocation 的经纬度
            success (res) {
              const latitude = res.latitude
              const longitude = res.longitude
              wx.openLocation({
                latitude,
                longitude,
                scale: 18
              })
            }
           })
    },
    jumpPageToCommit(){
      var url="/pages/commit/commit?id="+this.data.viewContent._id
      console.log(url)
      wx.navigateTo({
        url: url
      })
    }
})