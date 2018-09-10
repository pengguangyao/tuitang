var fetch = require("node-fetch");
var qs = require("query-string")
var url = require("url")
exports.getAuthorList = async function(req, res) {
    const authorData = await fetch("https://www.duitang.com/napi/vienna/useractivity/personal/?user_id=15636347&start=1534323468643&limit=10")
    .then(data => data.json())
    res.json(
       authorData
    )
}
exports.getNewAuthorList = async function(req,res){
    var result = url.parse(req.url,true).query;
    const authorData = await fetch("https://www.duitang.com/napi/vienna/useractivity/personal/?user_id=15636347&limit=10&"+qs.stringify(result))
    .then(data => data.json())
    res.json(
        authorData
    )
}
