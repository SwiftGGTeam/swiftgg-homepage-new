import xrbroImg from './assets/xrbro-avatar.jpg'
import sodImg from './assets/sod-avatar.jpg'
import tImg from './assets/t-avatar.jpg'
import bxImg from './assets/bx-avatar.jpg'

class Partner {
  constructor(url, cover, name, slogan, desc) {
    this.url = url
    this.cover = cover
    this.name = name
    this.slogan = slogan
    this.desc = desc
  }
}

export const partners = [
  new Partner(
    "https://xreality.zone", 
    xrbroImg, 
    "XR 基地", 
    '专注于 XR 领域的学习社区', 
    '我们专注提供 XR 开发教学书籍及课程，通过 learn by doing 的教学理念，将晦涩难懂的 XR 编程概念变的容易明白，让复杂的 XR 开发简单易行。'
  ),
  new Partner(
    "https://github.com/SwiftOldDriver", 
    sodImg, 
    "老司机技术", 
    '移动端技术爱好者组成的团体', 
    '这个时代的问题不是缺乏信息，而是信息太多，不知道哪些信息是有价值的，哪些是对我而言有效的信息。我们并不只是资讯的搬运工，也是价值的布道者。'
  ),
  new Partner(
    "https://www.tsalon.tech/", 
    tImg, 
    "T 技术沙龙", 
    '开发者之间交流技术的沙龙组织',
    'T沙龙，全称为 T 技术沙龙，是一个以促进开发者之间技术交流为目的的技术沙龙组织，成立后一直在定期举办各种面向开发者的线上 & 线下沙龙活动。'
  ),
  new Partner(
    "https://www.boxueio.com",
    bxImg, 
    "泊学", 
    '独立开发者的自我修炼频道', 
    '我们希望有一个产品，可以兼顾技术的前沿性、实用性和美感。可以通过视频高效地学习，通过文档仔细的研究，通过代码直观地实践。所以，就有了这个网站。'
  ),
]