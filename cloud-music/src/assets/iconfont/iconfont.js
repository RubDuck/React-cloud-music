import { createGlobalStyle } from 'styled-components';

export const IconStyle = createGlobalStyle`
@font-face {
  font-family: 'iconfont';  /* project id 2318282 */
  src: url('//at.alicdn.com/t/font_2318282_whwa8tvozf.eot');
  src: url('//at.alicdn.com/t/font_2318282_whwa8tvozf.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_2318282_whwa8tvozf.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_2318282_whwa8tvozf.woff') format('woff'),
  url('//at.alicdn.com/t/font_2318282_whwa8tvozf.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_2318282_whwa8tvozf.svg#iconfont') format('svg');
}

.iconfont{
  font-family:"iconfont" !important;
  font-size:16px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
`