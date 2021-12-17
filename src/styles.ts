import { DefaultTheme } from 'styled-component';
import { createGlobalStyle } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontColor: '#2c2c2c',
  bgColor: 'lightgray',
};

export const darkTheme: DefaultTheme = {
  fontColor: 'pink',
  bgColor: '#2c2c2c',
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
body {
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
}`;
