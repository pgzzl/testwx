// pages/viewList/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        secondTitle:[
            {content:"自然风光"},
            {content:"风土人情"},
            {content:"特色美食"},
            {content:"新晋热门"}
        ],
        viewList:[],
        selectIndex:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        wx.cloud.callFunction({
            name:"viewListtest",
            data:{}
        }).then(res=>{
            console.log("res",res)
            this.setData({
                'viewList':res.result.data
            })
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
    jumpPageToNote(e){
      console.log(e)
      var index=e.currentTarget.dataset.index
      var id=this.data.viewList[index]._id
      console.log(index)
      console.log(id)
      var url='/pages/viewContent/index?id='+id
      console.log(url)
        wx.navigateTo({
          url: url,
        })
    },
    changeIndex(e){
        console.log(e)
        var idx=e.currentTarget.dataset.index
        this.setData({selectIndex:idx})
        console.log(this.data.selectIndex)

    }
})