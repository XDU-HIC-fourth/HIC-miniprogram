// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const title = "面试通知"
const content = "9月11至12日会出具体的通知，请各位先完成报名。"

// 云函数入口函数
exports.main = async (event, _) => {
  const wxContext = cloud.getWXContext()

  const openId = wxContext.OPENID
  if (openId === undefined) {
    return {
      code: 1001,
      msg: "openId not found"
    }
  }

  return {
    code: 1000,
    data: {
      title: title,
      content: content
    }
  }
}
