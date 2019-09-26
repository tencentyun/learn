import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const searchFocuse = () => ({
  type: constants.SEARCH_FOCUSE
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const infoList = (data) => ({
  type: constants.INFO_LIST,
  data: fromJS(data)
})

// 请求搜索的列表信息
export const getSearchInfo = () => {
  return (dispath) => {
    axios.get('/api/infoList.json')
      .then((res) => {
        dispath(infoList(res.data.data))
      })
      .catch((err) => {
        console.log(err)
      })

  }
}