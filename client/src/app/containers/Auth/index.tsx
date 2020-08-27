/**
 *
 * Auth
 *
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './slice';
import { selectAuth } from './selectors';
import { LoginForm } from 'app/components/LoginForm';
import { RegisterForm } from 'app/components/RegisterForm';
import { Redirect, useLocation } from 'react-router-dom';

interface Props {}

export const Auth = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const auth = useSelector(selectAuth);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <>
      <Helmet>
        <title>Auth</title>
        <meta name="description" content="Description of Auth" />
      </Helmet>
      {auth.authenticated && <Redirect to="/artists" />}
      {pathname.includes('register') ? (
        <RegisterForm
          handleSubmit={e => dispatch(actions.register(e))}
          auth={auth}
          loading={auth.loading}
        />
      ) : (
        <LoginForm
          loading={auth.loading}
          handleSubmit={e => dispatch(actions.login(e))}
          auth={auth}
        />
      )}
    </>
  );
});
