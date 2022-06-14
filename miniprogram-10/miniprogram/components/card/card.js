// components/card/card.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
      landscapename:{
        type:String,
        value:""
    },
    ldspimg:{
        type:String,
        value:""
    },
    ldspstar:{
        type:String,
        value:""
    },
    ldsplocation:{
        type:String,
        value:""
    },
    tag:{
        type:String,
        value:""
    },
    ldsplongtitude:{
        type:String,
        value:""
    },
    ldsplatitude:{
        type:String,
        value:""
    },
    tag:{
      type:String,
      value:""
    }

    },

    /**
     * 组件的初始数据
     */
    data: {
      title:"",
rate:"",
location:"",
tag:[
     {tagname:""},
     {tagname:""}
],
distance:"",

    },

    /**
     * 组件的方法列表
     */
    methods: {
      changeCheck(){
        console.log("collect")
        this.setData({
            'checkFlag' : !this.data.checkFlag
        })
    }

    }
})
