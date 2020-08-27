/**
 *
 * RegisterForm
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
  MenuItem,
  Paper,
  CircularProgress,
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
interface Props {
  handleSubmit: any;
  auth: object;
  loading: boolean;
}

export const RegisterForm = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    full_name: '',
    username: '',
    password: '',
    role: '',
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
          paddingX={6}
          paddingY={7}
          clone
        >
          <Paper>
            <Box width="100%" marginBottom={4}>
              <TextField
                type="text"
                margin="dense"
                variant="outlined"
                label="Full Name"
                placeholder="Full Name"
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, full_name: e.target.value })
                }
                required
              />
            </Box>
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
                select
                type="text"
                margin="dense"
                variant="outlined"
                label="Role"
                placeholder="Role"
                fullWidth
                defaultValue="user"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={e =>
                  setFormData({ ...formData, role: e.target.value })
                }
                required
              >
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </TextField>
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
                {t('Register')}
              </Button>
            )}
            <Box width="100%" marginTop={2}>
              <Link to="/" component={RouterLink}>
                {t('Already have an account? Login')}
              </Link>
            </Box>{' '}
          </Paper>
        </Box>
      </Box>
    </Container>
  );
});
