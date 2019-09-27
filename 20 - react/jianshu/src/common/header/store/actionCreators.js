import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios'

export const infoList = (data) => ({
  type: constants.INFO_LIST,
  data: fromJS(data),
  total: data.length
})

export const searchFocuse = () => ({
  type: constants.SEARCH_FOCUSE
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseIn = () => ({
  type: constants.MOUSE_IN
})

export const mouseLeaver = () => ({
  type: constants.MOUSE_LEAVER
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
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