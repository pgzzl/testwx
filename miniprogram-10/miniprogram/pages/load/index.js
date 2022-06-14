Page({
    /**
     * 页面的初始数据
     */
    data: {
      userInfo:{},
      hasUserInfo:false,
      canIUseGetUserProfile:false,
      openid:""
      },
      next:function(e){
          console.log(getApp().globalData.userInfo);//确保获取用户信息已经存入全局变量userInfo
          wx.redirectTo({
              url: '/pages/main/index',
          })
      },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
      wx.login({
        success:(res)=>{
          if(res.code){
          let code=res.code
          // 通过code换取openId
          wx.request({
          url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx6b97f54b5c489da2&secret=1abefaf82262678e3013ca43c2c55e46&js_code=${code}&grant_type=authorization_code`,
          success:(res)=>{
             console.log(res);
             this.setData({'openid':res.data.openid})
             console.log(this.data.openid);
             getApp().globalData.openid=this.data.openid
        }
        })
       //下面这个if判断是否能够兼容新版本
        if(wx.getUserProfile){
          this.setData({
            canIUseGetUserProfile:true
          })
        }
      }
      else{
        console.log("登陆失败"+res.errMsg)
      }
      }
      })
    },
    //新版本获取用户信息方法
    getUserProfile(e){
      var that=this;
      wx.getUserProfile({
        desc: '用于完善客户资料',
        success:(res) => {
          this.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
          getApp().globalData.userInfo=res.userInfo;
          wx.showLoading({
            title: '加载中',
          })
          setTimeout(function(){
            wx.hideLoading()
          },2000)
          setTimeout(function(){
            that.next()
          },2000)
        }
      })
    },
    //旧版本获取用户信息的方法
    getUserInfo(e){
      this.setData({
        userInfo:e.detail.userInfo,
        hasUserInfo:true
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