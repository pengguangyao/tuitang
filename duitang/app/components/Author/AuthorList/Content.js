import React, { Component } from 'react';
export default class Content extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div id="content">
        <div id="header">
          <img src={this.props.item.data.article.sender.avatar} />
          <div id="user">
            <p>{this.props.item.data.article.sender.username}</p>
            <p>{this.props.item.date_str}</p>
          </div>
        </div>
        <div id="title">
          <p>{this.props.item.data.article.title}</p>
        </div>
        <div id="img">
          <img src={this.props.item.data.article.cover.photo_path} />
          <div id="left">
            <img src={this.props.item.data.article.sender.avatar} />
            <span>{this.props.item.data.article.sender.username}</span>
          </div>
          <p><i></i><span>文章</span></p>
        </div>
      </div>
    )
  }
}
