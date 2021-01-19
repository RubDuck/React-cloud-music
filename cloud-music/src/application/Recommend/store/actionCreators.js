import { fromJS } from 'immutable';
import * as actionTypes from './constants';
import { getBannerRequest, getRecommendListRequset } from '../../../api/requset'

const defaultState = fromJS({
  bannerList: [],
  recommendList: [],
})

export const changeBannerList = (data) => ({
  type: actionTypes.CHANGE_BANNER,
  data: fromJS(data)
})

export const changeRecommendList = (data) => ({
  type: actionTypes.CHANGE_RECOMMEND_LIST,
  data: fromJS(data)
})

export const getBannerList = () => {
  return (dispatch) => {
    getBannerList().then(data => {
      dispatch(changeBannerList(data.banners))
    })
    .catch(() => {
      console.log('轮播获取数据失败')
    })
  }
}

export const getRecommendList = () => {
  return (dispatch) => {
    getRecommendList().then(data => {
      dispatch(changeRecommendList(data.result))
    })
    .catch(() => {
      console.log('歌单获取数据失败')
    })
  }
}