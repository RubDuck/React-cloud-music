import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: ${style['theme-color']};
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfot {
      font-size: 25px
    }
  }
`
export const Tab = styled.div`
  display: flex;
  height: 44px;
  justify-content: space-around;
  background: ${style['theme-color']};
  a {
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span{
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`

export const TabItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FixPosition = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
export const FixOne = styled.div`
  flex: 1;
  overflow: hidden;
`