import React from 'react';
import Slider from '../../components/Slider';
import RecommendList from '../../components/List';
import { Recommed } from './style';

function Recommend (props) {
  const banaList = [1, 2, 3, 4].map(e => {
    return { imageUrl: 'http://p1.music.126.net/ZYLJ2oZn74yUz5x8NBGkVA==/109951164331219056.jpg' }
  })
  const recommendList = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10, 11, 12, 13, 14, 15].map(e => {
    return {
      id: e,
      picUrl: 'https://p1.music.126.net/fhmefjUfMD-8qtj3JKeHbA==/18999560928537533.jpg',
      playCount: 171722,
      name: '朴树、许巍、李建、郑钧、老狼、赵雷'
    }
  })
  return(
      <Recommed>
        <Slider banaList={banaList}></Slider>
        <RecommendList recommendList = { recommendList }></RecommendList>
      </Recommed>

  )
}


export default React.memo(Recommend);