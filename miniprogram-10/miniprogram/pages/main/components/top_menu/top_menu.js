// pages/main/components/top_menu/top_menu.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
      secondTitle:[
        {content:"自然风光"},
        {content:"风土人情"},
        {content:"特色美食"},
        {content:"新晋热门"}
    ],
      selectIndex:0
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
      changeIndex(e){
        console.log(e)
        var idx=e.currentTarget.dataset.index
        this.setData({selectIndex:idx})
        console.log(this.data.selectIndex)

    }
    }
})
