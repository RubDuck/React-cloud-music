import styled from 'styled-components';
import style from '../../assets/global-style';

export const ComponentList = styled.div`
  display:flex;
  flex-direction: column;
  height: 100%;
`
export const NavTitle = styled.div`
  padding: 0 5px;
  height: 60px;
  line-height: 60px;
  font-weight: 700;
  font-size: 14px;
`
export const ImgList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 5px;
`

export const ImgItem = styled.div`
  position: relative;
  width: 32%;
  border-radius: 3px;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
    border-radius: 3px;
  }
`
export const Desc = styled.div`
  overflow: hidden;
  margin-top: 2px;
  padding: 0 2px;
  height: 50px;
  text-align: left;
  font-size: ${style ["font-size-s"]};
  line-height: 1.4;
  color: ${style ["font-color-desc"]};
`

export const Content = styled.div`
  display: flex;
  flex: 1;
  overflow:hidden;
`