import { breakpoints } from './breakpoints';
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

import { colors } from './colors';
import { components } from './components';
import { config } from './config';
import { fonts } from './fonts';

const customTheme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: 'background.dark',
      },
      '*': {
        'scrollbar-width': 'thin',
        'scrollbar-color': 'gray rgba(0, 0, 0, 0)',
      },
      '*::-webkit-scrollbar': {
        width: '6px',
      },

      '*::-webkit-scrollbar-track': {
        background: 'rgba(0, 0, 0, 0)',
      },

      '*::-webkit-scrollbar-thumb': {
        bg: 'gray',
        width: '6px',
        'border-radius': '6px',
      },
    }),
  },
  fonts,
  colors,
  config,
  components,
  breakpoints,
});

export default customTheme;
