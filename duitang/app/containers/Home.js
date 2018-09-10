import React, { Component } from 'react'
import App from "./App.js"
import DiaryList from "../components/Home/DiaryList/DiaryList.js"
export default class Home extends Component {
    render() {
        return (
            <App k="home">
                <DiaryList></DiaryList>
            </App>
        )
    }
}
