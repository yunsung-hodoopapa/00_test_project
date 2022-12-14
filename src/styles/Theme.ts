const palette = {
  /* grey */
  grey_1: '#2B3445', // Main Text
  grey_2: '#373F50', // Paragraph
  grey_3: '#7D879C', // Low Priority form Title/Text
  grey_4: '#DAE1E7', // Border
  grey_5: '#F3F5F9', // Line Stroke
  /* primary */
  primary: '#667bda',
  primary_main: '#FF5D14',
  primary_back: '#FFE9DF',
  /* secondary */
  secondary: 'e8e8ee',
  secondary_main: '#0F3460',
  secondary_dark: '#0c0e30',
  /* error */
  error: '#FFEAEA',
  error_main: '#E94560',
  /* success */
  success: '#E7F9ED',
};

const theme = {
  grey: {
    background: palette.grey_4,
    color: palette.grey_1,
    hoverBackground: palette.primary,
  },
  primary: {
    background: 'white',
    color: palette.primary_main,
    hoverBackground: palette.grey_4,
  },
  secondary: {
    background: palette.secondary_main,
    color: 'e8e8ee',
    hoverBackground: palette.grey_3,
  },
  success: {
    background: palette.success,
    color: 'black',
    hoverBackground: palette.grey_4,
  },
  error: {
    background: palette.error_main,
    color: palette.grey_4,
    hoverBackground: palette.error,
  },
};

export default theme;
