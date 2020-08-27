import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const lightTheme = {
  palette: {
    ...palette,

    type: 'light',
  },
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};

const darkTheme: Theme = {
  palette: {
    ...palette,
    // primary: {
    //   main: '#FFFFFF',
    // },
    // secondary: {
    //   main: '#212121',
    // },
    type: 'dark',
  },
  typography,
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
};

export type Theme = typeof lightTheme;

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
