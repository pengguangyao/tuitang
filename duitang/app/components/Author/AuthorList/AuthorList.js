import React, { Component } from 'react';
import {connect} from "dva";
import Content from "./Content.js";
import Header from "./Header.js";
import "./AuthorList.less";
class AuthorList extends Component {
  constructor(props){
    super(props);
    props.dispatch({"type":"author/init"})
  }

  componentWillReceiveProps(nextProps, nextState){
    var self = this;
    $("li").click(function(){
      $(this).addClass('cur').siblings().removeClass('cur')
    })
  }
  render() {
    const {authorData,start} = this.props
    if(authorData.length == 0) return null;
    return (
      <div>
        <Header data={authorData}></Header>
        <div className="bigbox">
          <div className="main">
            {authorData.map(item=>{
              return <Content key={Math.random()} item = {item} data={authorData}></Content>
            })}
          </div>
          <ul>
            <li className="one tubiao cur">
              <i></i>
              <span>动态</span>
            </li>
            <li className="two tubiao">
              <i></i>
              <span>专辑</span>
              <span className="shuzi">1</span>
            </li>
            <li className="three tubiao">
              <i></i>
              <span>文章</span>
              <span className="shuzi">88</span>
            </li>
            <li className="four tubiao">
              <i></i>
              <span>视频</span>
            </li>
            <li className="five tubiao">
              <i></i>
              <span>收藏</span>
            </li>
          </ul>
        <div className="more" onClick={() => {
          this.props.dispatch({"type":"author/newinit"})
        }}>查看更多</div>
        </div>
      </div>
    )
  }
}
export default connect(
  ({author:{authorData,start}})=>({
    authorData,
    start
  })
)(AuthorList)
