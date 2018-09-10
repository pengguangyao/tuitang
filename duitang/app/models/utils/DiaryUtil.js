function* getDiaryListSync(select, put) {
    const { data, status } = yield fetch("/api/diaries").then(res => res.json())
    
    var pager = { "start": data.next_start, "more": data.more }
    yield put({ "type": "changeDiarySync", "diaryData": data.object_list})
    yield put({ "type": "changePagerSync", pager })
}

export const getDiaryList = getDiaryListSync