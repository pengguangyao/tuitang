function* getAuthorDataSync(put, select){
  const {data} = yield fetch("/api/author").then(data=>data.json())
  var new_start = data.next_start;
  yield put({"type":"changeAuthorData","authorData":data})
  yield put({"type":"changeStart","start":new_start})
}
function* getNewAuthorDataSync(put,select){
  var qs = require("query-string");
  const {start} = yield select(state=>state.author)
  const {data} = yield fetch("/api/newauthor?"+qs.stringify({start}),{
    "method":"GET",
    "headers":{"Content-Type":"application/json"}
  }).then(data=>data.json()) 
  var new_start = data.next_start;
  // console.log(new_start)
  yield put({"type":"changeAuthorData","authorData":data})
  yield put({"type":"changeStart","start":new_start})
  
}
export const getAuthorData = getAuthorDataSync;
export const getNewAuthorData = getNewAuthorDataSync