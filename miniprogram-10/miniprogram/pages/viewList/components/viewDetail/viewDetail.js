// pages/viewList/component/viewDetail/viewDetail.js
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
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        checkFlag:true,
        distance:"27.9"
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
    },
    
})
