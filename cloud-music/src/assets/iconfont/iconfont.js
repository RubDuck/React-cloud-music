import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 2318282 */
  src: url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.eot');
  src: url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.woff') format('woff'),
  url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2318282_2vdt2tyj20v.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
`