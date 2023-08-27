
import wwdc23CoverImg from './assets/wwdc23-cover.jpg'
import wwdc22CoverImg from './assets/wwdc22-cover.jpg'
import wwdc21CoverImg from './assets/wwdc21-cover.jpg'

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
  new Playground(wwdc23CoverImg, "WWDC23.playground", "SwiftGG", "2023 年 6 月 6 日 - 6 月 10 日", "20 名嘉宾", "已结束", "https://wwdc23.swiftgg.team"),
  new Playground(wwdc22CoverImg, "WWDC22.playground", "SwiftGG", "2022 年 6 月 7 日 - 6 月 11 日", "27 名嘉宾", "已结束", "https://wwdc22.swiftgg.team"),
  new Playground(wwdc21CoverImg, "WWDC21.playground", "SwiftGG", "2021 年 6 月 8 日 - 6 月 12 日", "13 名嘉宾", "已结束", "https://wwdc21.swiftgg.team")
]
