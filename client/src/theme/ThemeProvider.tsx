import React from 'react';
import {
  createMuiTheme,
  ThemeProvider as OriginalThemeProvider,
} from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { selectTheme, themeSliceKey, reducer } from './slice';
import { useInjectReducer } from 'redux-injectors';
import { CssBaseline } from '@material-ui/core';

export const ThemeProvider = (props: { children: React.ReactChild }) => {
  useInjectReducer({ key: themeSliceKey, reducer: reducer });

  const theme: any = useSelector(selectTheme);
  const theming = createMuiTheme({ ...theme });
  return (
    <OriginalThemeProvider theme={theming}>
      <CssBaseline />
      {React.Children.only(props.children)}
    </OriginalThemeProvider>
  );
};
