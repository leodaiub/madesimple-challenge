import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import 'sanitize.css/sanitize.css';
import { App } from 'app';
import { HelmetProvider } from 'react-helmet-async';
import { configureAppStore } from 'store/configureStore';
import './locales/i18n';
import { ThemeProvider } from 'theme/ThemeProvider';
import { CssBaseline } from '@material-ui/core';
import { createBrowserHistory } from 'history';
const history = createBrowserHistory();
export { history };
const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
  Component: typeof App;
}
const ConnectedApp = ({ Component }: Props) => (
  <Provider store={store}>
    <HelmetProvider>
      <React.StrictMode>
        <CssBaseline />
        <ThemeProvider>
          <Component />
        </ThemeProvider>
      </React.StrictMode>
    </HelmetProvider>
  </Provider>
);
const render = (Component: typeof App) => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./app', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const App = require('./app').App;
    render(App);
  });
}

render(App);

serviceWorker.register();
