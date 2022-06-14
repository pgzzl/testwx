// pages/viewList/component/viewDetail/viewDetail.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        landscapename:"",
        ldspimg:"",
        ldspstar:"",
        tag:"",
        ldsplongtitude:"",
        ldsplatitude:""
    },

    /**
     * 组件的初始数据
     */
    data: {
        checkFlag:true,
        photoUrl:"./images/IMG_4080.PNG",
        title:"谷城县",
        rate:"4.0",
        location:"湖北省谷城县",
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
