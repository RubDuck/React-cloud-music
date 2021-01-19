import * as actionTypes from './constants';

export default (state = defaultStatus, actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('bannerList', actions.data);
    case actionTypes.CHANGE_RECOMMEND_LIST:
      return state.set('recommendList', actions.data);
    default:
      return state;
  }
}