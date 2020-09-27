import React from 'react';

export default class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: null,
      title: [
        '亞洲舞王',
        '地球上最浪漫的一首歌',
        '馬子狗',
        '我要打十個',
        '想見你',
        '第一滴血',
        '小琉球',
        '龍蝦洞',
        '小夫我要進來了',
        '下蛋',
        '吹牛',
        '武漢肺炎',
        '韓國瑜',
        '乙武洋匡',
        '她沒在看我',
        '狼人殺',
        '鋼管舞',
        '螺旋丸',
        '千鳥',
        '水之呼吸',
        '電車癡漢',
        '多人運動',
        '黑豹',
        '舞孃',
        '進擊的巨人',
        '彰化雲林',
        '旋轉大便',
        '大便旋轉',
        '按摩棒',
        '灌籃高手',
        '跑跑卡丁車',
        '8+9',
        '天線寶寶',
        '李星',
        '輪轉位移',
        '印度麥可',
        '海龜',
        '蝴蝶姊姊',
        '工具人',
        '館長陳之漢',
        '陳為民',
        '露屁屁外星人',
        '小丑',
        '中秋節',
        '台北甜不辣',
        '海底撈',
        '角落生物',
        '健身',
        '青蛙',
        '紙房子',
        '鼻涕',
        '烏日只有田(烏日)',
        '激凸',
        '珍珠奶茶',
        '動力火車',
        '檳榔西施',
        '百威',
        '野格炸彈(深水炸彈)',
        '十三門徒',
        '天蠍座',
        '哭哭饅頭',
      ],
    }
  }

  handleClick() {
    const { title } = this.state;
    const max = title.length;
    const rand = Math.floor(0 + Math.random() * (max - 0));
    const topicTitle = title[rand] !== undefined ? title[rand] : null;
    const titleArray = title.filter(value => value !== topicTitle );

    this.setState({ topic: topicTitle, title: titleArray });
  }

  render() {
    const { topic, title } = this.state;
    const length = title.length;

    return (
      <div>
        <h2>{topic !== null ? "題目: " + topic : (length === 61 ? "開始抽題 !!!!" : "已無題目")}</h2>
        <button style={{backgroundColor: '#4CAF50', fontSize: '24px', color: 'white', bordeRadius: '4px'}} value="Click me!" onClick={this.handleClick.bind(this)}>按我</button>
      </div>
    )
  }
}
