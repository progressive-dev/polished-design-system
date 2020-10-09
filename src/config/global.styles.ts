import './fonts/Poppins-Bold.ttf';
import './fonts/Poppins-Light.ttf';
import './fonts/Poppins-Medium.ttf';
import './fonts/Poppins-Regular.ttf';
import './fonts/Poppins-SemiBold.ttf';
import './fonts/Poppins-Thin.ttf';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Poppins';
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;