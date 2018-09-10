import fp from "lodash/fp";
import {getAuthorData , getNewAuthorData} from "./utils/AuthorUtil.js";
export default {
  "namespace":"author",
  "state":{
    "authorData":[], //列表数据
    "start":0
  },
  "reducers":{
    changeAuthorData(state,action){
      var arr = fp.clone(state.authorData)
      var arr1 = arr.concat(action.authorData.object_list)
      console.log(arr1)
      return fp.set("authorData",arr1,state)
    },
    changeStart(state,action){
      return fp.set("start",action.start,state)
    }
  },
  "effects":{
    *init(action,{call,put,select}){
      yield call(getAuthorData,put,select)
    },
    *newinit(action,{call,put,select}){
      yield call(getNewAuthorData,put,select)
    }
  }
}