import { Padding } from '@mui/icons-material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import '../fonts/fonts.css'


export const themeOptions: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'SF Pro Display Regular',
          fontWeight:'500',
          fontSize:'14px',
          letterSpacing:'1px'
        },
        contained: {
          backgroundColor: '#253378',
          '&:hover': {
            backgroundColor: '#ff7021 !important',
          },
        },
        text: {
          color:'#253378',
          '&:hover': {
            backgroundColor: '#FFF3EC',
          },
        },
        outlined: {
          color:'#253378',
          backgroundColor: '#FFF3EC',
          '&:hover': {
            backgroundColor: '#ffe3d3 !important',
            border:'none'
          },
          border:'none'
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        standardSuccess: {
          background: '#F4F4F6',
          borderLeft: `7px solid #5FA562`,
          borderRadius: '0 4px 4px 0',
          fontSize: '14px',
          "& .MuiAlert-icon": {
            color: '#5FA562'
          },
          "& .MuiAlertTitle-root": {
            fontSize: '13px',
            paddingTop:'3px',
            color: '#5FA562'
          },
          "& .MuiAlertMessage-root": {
            Padding:100
          },
        },
        standardError: {
          background: '#F4F4F6',
          borderLeft: `7px solid #C64343`,
          borderRadius: '0 4px 4px 0',
          fontSize: '14px',
          "& .MuiAlert-icon": {
            color: '#C64343'
          },
          "& .MuiAlertTitle-root": {
            fontSize: '12px',
            color: '#C64343'
          }
        },
        standardWarning: {
          background: '#F4F4F6',
          borderLeft: `7px solid #EA9B42`,
          borderRadius: '0 4px 4px 0',
          fontSize: '14px',
          "& .MuiAlert-icon": {
            color: '#EA9B42'
          },
          "& .MuiAlertTitle-root": {
            fontSize: '12px',
            color: '#EA9B42'
          }
        },
        standardInfo: {
          background: '#F4F4F6',
          borderLeft: `7px solid #4387C6`,
          borderRadius: '0 4px 4px 0',
          fontSize: '14px',
          "& .MuiAlert-icon": {
            color: '#4387C6'
          },
          "& .MuiAlertTitle-root": {
            fontSize: '12px',
            fontWeight: 700,
            color: '#4387C6'
          },
        }
      }
    },
  },
  palette: {
    primary: {
      main: '#151D44',
      light: '#FFFFFF',
      contrastText: '#fff', //button text white instead of black
      
    },
    secondary: {
      main: '#22242A',
      light: '#F4F4F6',
      dark: '#262626',
    },
    background: {
      default: '#FFFFFF',
    },
    info: {
      main: '#253378',
    },
    success: {
      main: '#5FA562',
    },
    warning: {
      main: '#EA9B42',
    },
    error: {
      main: '#F42F18',
    },
    divider: '#FFFFFF',
    text: {
      primary: '#151D44',
      secondary: '#22242A',
      disabled: '#000000b3',
    },
    grey: {
      50: '#8C8C8C',
      100: '#D9D9D9',
      200: '#ececec',
      300: '#9BA0AF',
    },
  },
  typography: {
    h1: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '60px',
      lineHeight: '72px',
      letterSpacing: '-1.5px',
      color: '#22242A',
    },
    h2: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '48px',
      lineHeight: '57px',
      letterSpacing: '-0.5px',
      color: '#22242A',
    },
    h3: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '40px',
      lineHeight: '48px',
      color: '#22242A',
    },
    h4: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '34px',
      lineHeight: '41px',
      color: '#22242A',
      letterSpacing: '-0.25px',
    },
    h5: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: '33px',
      color: '#22242A',
      letterSpacing: '0.25px',
    },
    h6: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: '24px',
      color: '#22242A',
      letterSpacing: '0.15px',
    },
    subtitle1: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#22242A',
    },
    subtitle2: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      color: '#22242A',
    },
    body1: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '20px',
      color: '#22242A',
    },
    body2: {
      fontFamily: 'SF Pro Display Regular',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '22px',
      color: '#22242A',
    },
  },
};
const KognitivTheme = createTheme(themeOptions);
export default KognitivTheme;
