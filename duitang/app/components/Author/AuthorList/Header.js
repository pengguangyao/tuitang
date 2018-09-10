import React, { Component } from 'react';
export default class Header extends Component {
  constructor(){
    super();
  }
  render() {
    const data = this.props.data
    if(data.length == 0) return null;
    return (
      <div className="top">
        <div className="imgimg">
          <img src="http://img4.duitang.com/uploads/files/201401/20/20140120184114_TjEfA.thumb.1000_220_c.jpeg" alt=""/>
          <div className="footer">
            <span className="left">浙江 杭州</span>
            <span className="right">获赞与被收藏1664418次</span>
          </div>
        </div>
        <div className="message">
          <img src={data[0].data.article.sender.avatar} />
          <div className="username">{data[0].data.article.sender.username}</div>
          <div className="renzheng">
            <i></i>
            <span>堆糖认证美妆达人</span>
          </div>
          <div className="fensi">  
            <span>关注</span>
            <span>4</span>
            <span className="middle">|</span>
            <span>粉丝</span>
            <span>18882</span>
          </div>
          <div className="weixin">
              微信公众号：小丸子的杂物集，分享生活中美好的小物件
          </div>
          <div className="guanzhu">
            <p>关注</p>
          </div>
        </div>
      </div>
    )
  }
}
