import React from 'react';
import { NavTitle,  ImgItem, ImgList, Desc, ComponentList, Content } from './style';
import Scroll from '../../components/Scroll'
 
function RecommendList(props) {
  const { recommendList } = props;
  const imgItem = recommendList.map(e => {
    return <ImgItem><img src = {e.picUrl} /> <Desc>{e.name}</Desc></ImgItem>
  })
  return (
    <ComponentList>
      <NavTitle>推荐歌单</NavTitle>
      <Content>
        <Scroll>
          <ImgList>{imgItem}</ImgList>
        </Scroll>
      </Content>
    </ComponentList>
  )
}

export default React.memo(RecommendList)