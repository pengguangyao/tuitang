var fs = require('fs')
var path = require('path')
var formidable = require('formidable')
var fetch = require("node-fetch")

exports.getDiaryList = async function(req, res) {
    const diaries = await fetch("https://www.duitang.com/napi/vienna/feed/list/by_common/?start=0&limit=18")
    .then(res => res.json())
    res.json(
        diaries
    )
}
