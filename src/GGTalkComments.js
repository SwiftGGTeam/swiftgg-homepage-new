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
  new GGTalkComment(manAvatar, "Deep·Gray", "2023/08/13", "\"太棒了，虽然可以用自己蹩脚的英语看懂80%，也可以借助翻译工具，但效率确实不如母语，且部份句式还容易理解错误。这个工具的中英对照简直太棒了，既能一眼看懂这段内容，也能随便读一下英语，提升语感。\""),
  new GGTalkComment(womanAvatar, "swiftrix", "2023/09/09", "\"很棒 中文效率高很多 对初学者来说看中文的效率更高\""),
  new GGTalkComment(womanAvatar, "hohn chan", "2023/08/03", "\"瞌睡了正在找枕头，这不就来了么。\"")
]
