import React, { Component } from 'react'
import App from "./App.js"
import AuthorList from "../components/Author/AuthorList/AuthorList.js"
export default class Author extends Component {
    render() {
        return (
            <App k="author">
                <AuthorList></AuthorList>
            </App>
        )
    }
}
