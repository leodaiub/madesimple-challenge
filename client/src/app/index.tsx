import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { Auth } from './containers/Auth';
import { PrivateRoute } from './components/PrivateRoute';
import { Albums } from './containers/Albums/';
import { Artists } from './containers/Artists/';
import { useDispatch, useSelector } from 'react-redux';
import { reducer, sliceKey } from './containers/Auth/slice';
import { authSaga } from './containers/Auth/saga';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { selectAuth } from './containers/Auth/selectors';
import { reducer as modal } from 'redux-modal';
import { Header } from './components/Header';
import { actions as authActions } from './containers/Auth/slice';
import { AbilityContext } from './components/Can';
import { buildAbilityFor } from 'utils/ability';

export function App() {
  const dispatch = useDispatch();
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectReducer({ key: 'modal', reducer: modal });
  useInjectSaga({ key: sliceKey, saga: authSaga });
  const auth = useSelector(selectAuth);
  React.useEffect(() => {
    dispatch(authActions.checkAuth());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const ability = buildAbilityFor(auth.user.role);

  if (process.env.NODE_ENV !== 'production') {
    // expose ability to play around with it in devtools
    (window as any).ability = ability;
  }
  return (
    <AbilityContext.Provider value={ability}>
      <BrowserRouter>
        <Helmet titleTemplate="%s - Music App" defaultTitle="Music App">
          <meta name="description" content="A React Boilerplate application" />
        </Helmet>
        <Header
          authenticated={auth.authenticated}
          logout={() => dispatch(authActions.logout())}
        />
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route exact path="/register" component={Auth} />
          <PrivateRoute exact path="/artists" component={Artists} />
          <PrivateRoute exact path="/albums" component={Albums} />
          <PrivateRoute exact path="/artists/create" component={Artists} />
          <PrivateRoute exact path="/albums/create" component={Albums} />
          <PrivateRoute exact path="/artists/edit/:id" component={Artists} />
          <PrivateRoute exact path="/albums/edit/:id" component={Albums} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </AbilityContext.Provider>
  );
}
