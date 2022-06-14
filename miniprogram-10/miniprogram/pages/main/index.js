// pages/notes/notes.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //底部动态tab
    firco:"#000000",
    sedco:"#808080",
    thirdco:"#808080",
    image_bottom1:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAIAAACR5s1WAAADtklEQVRYCe2Wu09TURzHRQsVWqTVQqCDlEiAkAgl6MIgDi5GHnGSf0ATNyS4mshKIG4muBsGFx5GR3RxKQ81EQENhaElUmkrvYWWEvzCkeO553G5Lb2pgw05/Po7v8fnfn/3nt6ig4ODM4X+nC00wGH//xDHU7AdG1n8D2W0UCaJhPC+hhW211ZG8tvtlTC8Ngf5anLNDiKwuzmb2lzZiy2n42iwko5hXd6LNxRXkH53nLUwOku9oDGPUmTy6Zg9aj+trb3W1kg/gxVMXU5fZ2kNUGpMqHIyRDij4erH4otm2rNkFKXL4WP9on0CBAQYT3ybTgShuZhsxgOUR+7WbketgSRGECB4uhXIVgAp2YC7dcDVouJQnhOYQr4IgDUa/Tga+yTlg1MJgZy8aEAbg0NVUA6BaOTQ/HwZg5sfMGKxmgQinEkiWgw9vWd5Lza0FRDrSCDGt1cQLYbmxYOTRhSDh4AML+KLeemnKiKKwUNAgyXLZCBYEGNOf2fwENy26mpO6Z/Sn/08hNWzIPRzKd0zooPADWH1LOhEWC11ENY9FGxL0dZBiNvWeaA6LV4wCFb1gkHUnPvzRgg9dBDsBtXKIqOhxEUr6yDYDRphhcFdrQ4C/drsHlVXZGKXy5cGI+y247J0izgbGRng4d+2ux2++VREmo936Hvl9bihZnZCb7R1aQycaP/gQjPabGSSqlLcpfIQ3DbbCcPqcfrgASjWhd1IeP/vYwYPcvE36PaTC71ur1JB3K9oRjz98BBog0LSZDghAC4UPUY8HVNacCkdIxxkRoAjlKiOyHc7IdqGNVCfG4fkRXcyEbwbfsumUbux2DVa2eE/76k+fsDAgV22KFgXUpHhrQXpLwASn1fdoKyksgQCG+3rr1CI9mYNcKDEzVIvUOCnNBv7SXIIDv0MTGpBNoW1+10tI5UdrAe2HAJi4FVbxYE0gnJolLgwCwwFkhBVDAj8ds/L6lusbIRGDoE9cDz88R7XR+IMVgBJledSpIMgMfw5QTOheV95PVWb+kXDJEG/+yp3K9BSSiUQAXkntdVn0c9m9KAVRQNT6Cu/8tjdJm4RjxEEiRiOzo9vfze4P1SliR8ETy5e6z06YFSRJ0MgcyIRHPv1BadTVpKgvd9+qcdRZ0yA+qYgEEdGM7MTBgq+GtDgNqq2lZlsj1L4mIUg0UCZSKzCxs8HVg6FtG8qduEh7HXWkRQza3YQtCI5Er6mo9QDo6nELZ4BbIDKzhFCVS43v/KcyK1cbln/BMRvxoKm+CxfFwEAAAAASUVORK5CYII=",
    image_bottom2:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAIAAAAz7AdjAAACUElEQVRYCc2Yy4oCQQxFx2EQBEF0qf//Ye6URsUHCG6cK4UhlVd1t9Wqq9QrOXVvLIcZ3e/3ny/4/H4BwwOhMsdut+t3sZoc5/N5vV7fbrceKDU5DofD9XptmubDHJfLBQTb7faTHDAFeoAAkvSwppovXIYe1tThgACn04nsAFNXSepwHI9H2EEciPmQ5oOgDoc2IvVsUFgsVeBAydShPHVXaypw7Pd7TpBi+KJF0ttophVH3HSeBfwbRPW8oMyBMkHTmaakYjgVX4AzlTkgu3djJDJNoQLtrSlzACJougARNMFBYk1BgSPJ7jVdWhUZ+RAH8eEzXlzgINn1NxMZN5uNl5fmY8FoW4GDsqDjRNNhyN9yyiiCltZEHFx2yCuaTrzlojwN9UFa4kHEIWQX1ggsnlTEbR4Sl0PL/jDm+Tcfl0pU1UNIQgf1appxObTsXGHqXy+vmC+K53KYJ0lh6l9RzxvSQW+DzeHJnhT2Vr0amC9aY3MEskOnYDVAMQWm/TZHIDsUDlYprw5wMOhWgyOWHQqLL7Auac7wNtcbDI5+suvUeia4gMHRT3ZdVc883p/nCyRWJUdsijjcdRhYIznEW961UnG/95BIjjY/ocViwQbvIck4YAr2BVmqLJkPScYxtCnpGqY1GcfQpiQO05qM4w2mJBT8mAuLMw6xNtxQXzjjGI/Hw9XmmafTKR8izjiWy+XQKMg/n88Xi4Xg+OPj1WqFodlHfNsr8Ww20xBIODL/n6z9e6U2PzuZTPiQYpuDlt8WZP3xtqq60Ldw/AMXi7dtVYQloAAAAABJRU5ErkJggg==",
    image_bottom3:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAuCAIAAAAz7AdjAAACUElEQVRYCc2Yy4oCQQxFx2EQBEF0qf//Ye6URsUHCG6cK4UhlVd1t9Wqq9QrOXVvLIcZ3e/3ny/4/H4BwwOhMsdut+t3sZoc5/N5vV7fbrceKDU5DofD9XptmubDHJfLBQTb7faTHDAFeoAAkvSwppovXIYe1tThgACn04nsAFNXSepwHI9H2EEciPmQ5oOgDoc2IvVsUFgsVeBAydShPHVXaypw7Pd7TpBi+KJF0ttophVH3HSeBfwbRPW8oMyBMkHTmaakYjgVX4AzlTkgu3djJDJNoQLtrSlzACJougARNMFBYk1BgSPJ7jVdWhUZ+RAH8eEzXlzgINn1NxMZN5uNl5fmY8FoW4GDsqDjRNNhyN9yyiiCltZEHFx2yCuaTrzlojwN9UFa4kHEIWQX1ggsnlTEbR4Sl0PL/jDm+Tcfl0pU1UNIQgf1appxObTsXGHqXy+vmC+K53KYJ0lh6l9RzxvSQW+DzeHJnhT2Vr0amC9aY3MEskOnYDVAMQWm/TZHIDsUDlYprw5wMOhWgyOWHQqLL7Auac7wNtcbDI5+suvUeia4gMHRT3ZdVc883p/nCyRWJUdsijjcdRhYIznEW961UnG/95BIjjY/ocViwQbvIck4YAr2BVmqLJkPScYxtCnpGqY1GcfQpiQO05qM4w2mJBT8mAuLMw6xNtxQXzjjGI/Hw9XmmafTKR8izjiWy+XQKMg/n88Xi4Xg+OPj1WqFodlHfNsr8Ww20xBIODL/n6z9e6U2PzuZTPiQYpuDlt8WZP3xtqq60Ldw/AMXi7dtVYQloAAAAABJRU5ErkJggg==",
    image_bottom3:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAIAAACR5s1WAAACh0lEQVRYCe2WW4siMRBGZ4bBCyriDUXQJ///b/KCioiKKHgBcc5s2N4ml7KSHWf2YfuhSVcqVSdfKum83u/3l59+3n4a4DP/PwHxnqbE9Xpl4OVy4V0sFguFQlocMyoagvSbzeZ0OjH+fD7zLpVK5XK5Wq3WarU0lDgI0u/3++Vy6SZrNBqDwSCNIwLicDhMJhOjgQux2+0wdrvdVqvl9soWLQSrMJvNQgQmBxwsEGLEloh2d7AKZq7ynKBcr9eyj9urhdCHXq1WbhrZooXQyGAyIYbZwHLifK8KIjaoXDr59Katgrjdbu5IwfKUwuQsioqLv4DodqmUYFi9XncHey0cnV67YNRCtNttpRicm0I+b5cWotlsdjodb4i8ERnwzFs0be2JSSyOZMr+eDx6Nws6QYCPJqvl8xp1swKCA4ODC44MhfQ86MQ/LLYkDU0chBmz3W75RwAEB+lJzN88YRUyPVIgssFwpE09i2AaWohf8v9ZAitK9okwtGN36ePCJDP6M2kec5XKUroN1gUjSwOHHkVSgvTsBX7ii8XCzSdbKFJQeIw2snMQAoL5fM5eQAA5hNDb7/fZNQ8l8UMYggQBXCAkGY1Gsh7+E5OT4EsIYEJLFHXh8hYPBHWQcDvKB7XazIfStoz5Tw/EdDr9mzrIR8/a4/GYJc4+rYYNgQz6m5wVS/j83N/hArchZN2ENA+7mF7Ix4YQXEMhlHahzmyIZ6yFoYxYDuW00txCtWkrkRZdOSokxrdChFhtCPl8DUVR2kPBbQhu1cqIsW6VSiV0A7Iher0e3iHk2MTGn2jEHA6HoeGev2h2hQmNibUjAA93i9BAD0TI9Xl2ezmel0mI/B/itzgf9tAmEgADXucAAAAASUVORK5CYII=",
    //顶部动态tab
    first_color:"rgb(2, 218, 151)",
    second_color:"#ffffff",
    third_color:"#ffffff",
    forth_color:"#ffffff",
    list1:[
      {
        note_id:1,
        note_cover_url:"../../images/笔记封面1.PNG",
        note_title:"东方秘境\n仿佛跌落仙境",
        note_content:"",
        note_like:false
      },
      {
        note_id:2,
        note_cover_url:"../../images/笔记封面2.PNG",
        note_title:"异域风情体验\n感受不一样的武汉",
        note_content:"",
        note_like:false
      },
      {
        note_id:3,
        note_cover_url:"../../images/笔记封面4.PNG",
        note_title:"乘一叶扁舟\n泛于江上",
        note_content:"",
        note_like:false
      },
    ],
    list2:[
      {
        note_id:1,
        note_cover_url:"../../images/笔记封面4.PNG",
        note_title:"乘一叶扁舟\n泛于江上",
        note_content:"",
        note_like:false
      },
      {
        note_id:2,
        note_cover_url:"../../images/笔记封面3.PNG",
        note_title:"这里的空气都是\n清甜的",
        note_content:"",
        note_like:false
      },
      {
        note_id:3,
        note_cover_url:"../../images/笔记封面5.PNG",
        note_title:"",
        note_content:"",
        note_like:false
      },
    ],
  },
  first_notes:function(e){
    this.setData({
    first_color:"rgb(2, 218, 151)",
    second_color:"#ffffff",
    third_color:"#ffffff",
    forth_color:"#ffffff"
    })
  },
  second_notes:function(e){
    this.setData({
    first_color:"#ffffff",
    second_color:"rgb(2, 218, 151)",
    third_color:"#ffffff",
    forth_color:"#ffffff"
    })
  },
  third_notes:function(e){
    this.setData({
      first_color:"#ffffff",
      second_color:"#ffffff",
      third_color:"rgb(2, 218, 151)",
      forth_color:"#ffffff"
      })
  },
  forth_notes:function(e){
    this.setData({
      first_color:"#ffffff",
      second_color:"#ffffff",
      third_color:"#ffffff",
      forth_color:"rgb(2, 218, 151)",
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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