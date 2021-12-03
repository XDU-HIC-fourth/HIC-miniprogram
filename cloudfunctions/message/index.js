// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  var title = "面试通知"
  var content = "报名时间为13号~17号。面试时间定在17号下午2:30~5:30,17号晚上7:00~10:00，18号晚上7:00~10:00，面试地点在竹园一号楼二区121活动室,具体时间段以及更多最新消息请关注招新QQ群：776998675。(审批中就是等待面试的意思，报了名都可以来面试噢，没报也可以现场来报的。报名了多个组但是有些没显示的请不用担心，我们后台有正常保存报名数据，照常来面试就可以了噢~)"
  return {title,content}
}