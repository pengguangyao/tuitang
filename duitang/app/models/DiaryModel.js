import fp from "lodash/fp"
import { getDiaryList } from "./utils/DiaryUtil.js"
export default {
    "namespace": "diary",
    "state": {
        "adv": [], //轮播图广告列表
        "diaryData": [],
        "pager": {
            "start": 0,
            "more": 1
        }
    },
    "reducers": {
        changeDiarySync(state, { diaryData}) {
            return fp.set("diaryData", diaryData, state)
        },
        changePagerSync(state, {pager}) {
            return fp.set("pager", pager, state)
        }
    },
    "effects": {
        *init(action, { call, put, select }) {
            
            yield call(getDiaryList, select, put)
        }
    }
}