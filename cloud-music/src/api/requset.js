import axios from "axios";
import { fromJS } from "immutable";
import { instance } from './config';

export const getBannerRequest = () => {
  return instance.get('/banner');
}

export const getRecommendListRequset = () => {
  return instance.get('/personalized')
}