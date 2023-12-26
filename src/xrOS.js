
import xr24CoverImg from './assets/xr24-cover.jpg'

class Playground {
  constructor(coverUrl, title, slogan, leftWidget, rightWidget, btnText, btnUrl) {
    this.coverUrl = coverUrl;
    this.title = title;
    this.slogan = slogan;
    this.leftWidget = leftWidget;
    this.rightWidget = rightWidget;
    this.btnText = btnText;
    this.btnUrl = btnUrl;
  }
}

export const activities = [
  new Playground(xr24CoverImg, "Let’s xrOS 2024", "SwiftGG", "2024 年 3 月 9 日 - 3 月 10 日", "10 名嘉宾", "欢迎参加", "https://xr24.swiftgg.team")
]
