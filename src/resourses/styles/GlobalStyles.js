import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@font-face {
  font-family: "material";
  src: url('../fonts/material.ttf') format("truetype");
}
@font-face {
  font-family: "SFProDisplay-Light";
  src: url('../fonts/SF-Pro-Display-Light.otf') format("opentype");
}

@import url('https://fonts.googleapis.com/css?family=Quicksand:400,700,500,300');

.react-datepicker__input-container input {
    height: 30px;
    width: 100%;
    border-top: 1px solid rgba(143, 143, 143);
    border-bottom: 1px solid rgba(143, 143, 143);
    border-left: none;
    border-right: none;
    color: rgba(143, 143, 143, 1.0);
    outline: none;
}
`
