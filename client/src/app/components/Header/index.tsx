/**
 *
 * Header
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link, Box } from '@material-ui/core';
import { Brightness7, Brightness4 } from '@material-ui/icons';
import { changeTheme, selectThemeKey } from 'theme/slice';
import { useDispatch, useSelector } from 'react-redux';
import { saveTheme } from 'theme/utils';
import { LanguageKey } from 'locales/i18n';
import Menus from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TranslateIcon from '@material-ui/icons/Translate';
import { Link as RouterLink } from 'react-router-dom';

interface Props {
  authenticated: boolean;
  logout: any;
}

export const Header = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const theme = useSelector(selectThemeKey);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleThemeChange = () => {
    saveTheme(theme === 'light' ? 'dark' : 'light');
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
  };

  const handleLanguageChange = (data: LanguageKey) => {
    i18n.changeLanguage(data);
  };

  return (
    <Box boxShadow={0} clone>
      <AppBar position="static" color="transparent">
        <Toolbar variant="dense">
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box maxWidth="30%" clone>
              <Link component={RouterLink} to="/albums">
                <Typography variant="h5">Music App</Typography>
              </Link>
            </Box>

            <Box
              maxWidth="70%"
              flexWrap="wrap"
              display="flex"
              alignItems="center"
              justifyContent="space-around"
            >
              <Button onClick={() => handleThemeChange()}>
                {theme === 'light' ? (
                  <Brightness7 fontSize="small" />
                ) : (
                  <Brightness4 fontSize="small" />
                )}
              </Button>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                <Box marginRight={1}>
                  <TranslateIcon fontSize="small" />
                </Box>
                <Typography variant="button">
                  {i18n.language === 'en_US'
                    ? 'English'
                    : i18n.language === 'PT_BR'
                    ? 'Português'
                    : 'Español'}
                </Typography>
              </Button>
              <Menus
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleLanguageChange('en_US' as LanguageKey);
                    handleClose();
                  }}
                >
                  English
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleLanguageChange('PT_BR' as LanguageKey);
                    handleClose();
                  }}
                >
                  Português
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleLanguageChange('es' as LanguageKey);
                    handleClose();
                  }}
                >
                  Español
                </MenuItem>
              </Menus>

              {props.authenticated && (
                <Button
                  variant="text"
                  component="button"
                  onClick={() => {
                    props.logout();
                  }}
                >
                  {t('Exit')}
                </Button>
              )}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
});
