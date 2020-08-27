import MuiButton from './MuiButton';
import MuiIconButton from './MuiIconButton';
import MuiPaper from './MuiPaper';
import MuiTypography from './MuiTypography';
import MuiAppBar from './MuiAppBar';
import MuiTextField from './MuiTextField';

export default {
  MuiButton,
  MuiIconButton,
  MuiPaper,
  MuiTypography,
  MuiAppBar,
  ...MuiTextField,
  MuiToolBar: {
    root: {
      minHeight: '50px !important',
    },
  },
  MuiPagination: {
    root: {
      fontWeight: 900,
    },
    ul: {
      fontWeight: 900,
    },
  },
};
