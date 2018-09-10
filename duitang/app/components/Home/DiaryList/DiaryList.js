import React, { Component } from 'react'
import { connect } from "dva"
import Article from "./Article.js"
import Atlas from "./Atlas.js"
import "./DiaryList.less"
class DiaryList extends Component {
  constructor(props) {
    super(props)
    props.dispatch({ "type": "diary/init" })

  }
  render() {
    const { diaryData, pager } = this.props
    const getDiaryHtml = () =>{
      var html = []
      diaryData.map(item => {
        if(item.resource_type == "article") {
          html.push(<Article key={item.id} data={item}></Article>)
        } else if(item.resource_type == "atlas") {
          html.push(<Atlas key={item.id} data={item}></Atlas>)
        }
      })
      return html
    }
    return (
      <div className="feeds">
        {
          getDiaryHtml()
        }
      </div>
    )
  }
}
export default connect(
  ({ diary: { diaryData, pager } }) => {
    return {
      diaryData,
      pager
    }
  }
)(DiaryList)
