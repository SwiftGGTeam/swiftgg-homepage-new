
import atswift16CoverImg from './assets/atswift16-cover.jpg'
import atswift17CoverImg from './assets/atswift17-cover.jpg'
import atswift18CoverImg from './assets/atswift18-cover.jpg'

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
  new Playground(atswift18CoverImg, "@Swift2018", "SwiftGG", "2018 年 9 月 15 日", "8 名嘉宾", "已结束", "https://atswift2018.swiftgg.team"),
  new Playground(atswift17CoverImg, "@Swift2017", "SwiftGG", "2017 年 5 月 13 日 - 5 月 14 日", "15 名嘉宾", "已结束", "https://atswift2017.swiftgg.team"),
  new Playground(atswift16CoverImg, "@Swift2016", "SwiftGG", "2016 年 1 月 10 日", "8 名嘉宾", "已结束", "https://atswift2016.swiftgg.team")
]
