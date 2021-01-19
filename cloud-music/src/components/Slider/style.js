import styled from 'styled-components';
import style from '../../assets/global-style';

export const SliderContainer = styled.div`
  position: relative;
  margin: 0 2%;
  border-radius: 10px;
  overflow: hidden;
  img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`
export const SliderBackground = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 70%;
  background: ${style['theme-color']};
`