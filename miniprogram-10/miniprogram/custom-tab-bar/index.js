// custom-tab-bar/index.js
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
        selected:0,
        list:[{
            "iconPath":"./images/笔记.png",
            "selectedPath":"./images/笔记亮.png",
            "pagePath":"/pages/main/index",
            "text":"笔记"
        },{
            "iconPath":"./images/周边.png",
            "selectedPath":"./images/周边亮.png",
            "pagePath":"/pages/viewList/index",
            "text":"周边"
        },{
            "iconPath":"./images/我的.png",
            "selectedPath":"./images/我的亮.png",
            "pagePath":"/pages/my/my",
            "text":"我的"
        }]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleClick(e){
            let path = e.currentTarget.dataset.path;
            console.log(path)
            let index = e.currentTarget.dataset.index;
            console.log(index)
            wx.switchTab({ url: path })
            this.setData({ selected: index })
            console.log(this.data.selected)
        }
    }
})
