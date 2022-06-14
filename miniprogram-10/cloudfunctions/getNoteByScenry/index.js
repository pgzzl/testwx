// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db= cloud.database()
const _=db.command
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let {id}=event
    return await db.collection('note').where({
      ldsp_id:_.eq(id)
    }).get()
}