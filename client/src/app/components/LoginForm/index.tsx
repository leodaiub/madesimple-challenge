/**
 *
 * LoginForm
 *
 */
import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TextField,
  Button,
  Container,
  Box,
  Link,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  handleSubmit: any;
  auth: object;
  loading: boolean;
}

export const LoginForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        component="form"
        onSubmit={e => {
          e.preventDefault();
          props.handleSubmit(formData);
        }}
      >
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          paddingX={4}
          paddingY={4}
          clone
        >
          <Paper>
            <Box width="100%" marginBottom={4}>
              <TextField
                type="text"
                margin="dense"
                variant="outlined"
                label="Username"
                placeholder="Username"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, username: e.target.value })
                }
                required
              />
            </Box>
            <Box width="100%" marginBottom={4}>
              <TextField
                type="password"
                color="primary"
                margin="dense"
                variant="outlined"
                label={t('Password')}
                placeholder={t('Password')}
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </Box>
            {props.loading ? (
              <Box>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit"
              >
                {t('Login')}
              </Button>
            )}

            <Box width="100%" marginTop={2}>
              <Link to="/register" component={RouterLink}>
                {t("Don't have an account? Register")}
              </Link>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
});
