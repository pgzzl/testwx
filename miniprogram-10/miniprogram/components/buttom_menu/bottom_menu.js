// pages/main/components/buttom_menu/bottom_menu.js
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
    image_bottom1:"./images/笔记.png",
    image_bottom2:"./images/周边.png",
    image_bottom3:"./images/我的.png",
    image_bottom4:"./images/笔记亮.png",
    image_bottom5:"./images/周边亮.png",
    image_bottom6:"./images/我的亮.png",
    noteFlag:true,
    nearbyFlag:true,
    myFlag:true
    },

    /**
     * 组件的方法列表
     */
    methods: {
      noteCheck(){
        console.log("note")
        this.setData({
            'noteFlag' : !this.data.noteFlag
        })
    },
    nearbyCheck(){
      console.log("nearby")
      this.setData({
          'nearbyFlag' : !this.data.nearbyFlag
      })
  },
  myCheck(){
    console.log("my")
    this.setData({
        'myFlag' : !this.data.myFlag
    })
    wx.navigateTo({
      url: '../../pages/my/my',
    })
}
    }
})
