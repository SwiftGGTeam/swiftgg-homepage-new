import manAvatar from './assets/man-avatar.png'
import womanAvatar from './assets/woman-avatar.png'

class GGTalkComment {
  constructor(avatar, name, date, content) {
    this.avatar = avatar
    this.name = name
    this.date = date
    this.content = content
  }
}

export const ggTalkComments = [
  new GGTalkComment(manAvatar, "五爪猴", "2022/11/24", "\"嘉宾的嗓音加上吉他伴奏真好好听，如他所说弹吉他真是件很享受的事情，有一点点相似的感受。\""),
  new GGTalkComment(womanAvatar, "曼尼", "2021/04/14", "\"加拿大的这位年轻爸爸考虑的非常周到，在预期目标方面把握的很好，健康、环境、语言都是关键问题。很棒！\""),
  new GGTalkComment(womanAvatar, "ElisaElisa", "2021/11/23", "\"虽然只是日常，但是因为是异国他乡，是我从没有到过的地方，听完之后，就好像自己也过了一下加拿大的冬天。\"")
]
