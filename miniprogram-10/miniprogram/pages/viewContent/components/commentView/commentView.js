// pages/viewContent/components/commentView/commentView.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      user:{
        type:String,
        value:""
      },
      star:{
        type:String,
        value:""
      },
      time:{
        type:String,
        value:""
      },
      avatarUrl:{
        type:String,
        value:""
      },
      content:{
        type:String,
        value:""
      }
    },

    /**
     * 组件的初始数据
     */
    data: {
        userIcon:"./images/scenry.png",
        userName:"王孝女",
        rate:"4.0",
        postTime:"3月24日",
        img:"./images/scenry.png"
    },

    /**
     * 组件的方法列表
     */
    methods: {

    }
})
