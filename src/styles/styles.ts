import { DefaultTheme } from 'styled-component';
import { createGlobalStyle } from 'styled-components';

export const lightTheme: DefaultTheme = {
  fontColor: '#2c2c2c',
  bgColor: '#fafafa',
  boxColor: 'white',
  accent: '#0095f6',
  borderColor: '#e5e7eb',
};

export const darkTheme: DefaultTheme = {
  fontColor: 'white',
  bgColor: '#2c2c2c',
  boxColor: '#3f3f46',
  accent: '#fafafa',
  borderColor: '#6b7280',
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
body {
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.bgColor};
  
}`;
