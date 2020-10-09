import React from 'react';
import { createGlobalStyle, css } from 'styled-components';
import PoppinsThin from '../src/config/fonts/Poppins-Thin.ttf';
import PoppinsLight from '../src/config/fonts/Poppins-Light.ttf';
import PoppinsRegular from '../src/config/fonts/Poppins-Regular.ttf';
import PoppinsMedium from '../src/config/fonts/Poppins-Medium.ttf';
import PoppinsSemiBold from '../src/config/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from '../src/config/fonts/Poppins-Bold.ttf';

const fonts = css`
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsThin}) format('ttf');
    font-weight: 200;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsLight}) format('ttf');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsRegular}) format('ttf');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsMedium}) format('ttf');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsSemiBold}) format('ttf');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: local('Poppins'), local('Poppins'),
    url(${PoppinsBold}) format('ttf');
    font-weight: 700;
    font-style: normal;
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    ${fonts}
    font-family: 'Poppins', sans-serif;
  }
`;

// Global decorator to apply the styles to all stories
export const decorators = [
  Story => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}