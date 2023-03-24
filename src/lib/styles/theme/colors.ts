import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors = {
  brand: {
    primary: '#a7292b',
    200: '',
    300: '',
    400: '',
    500: '',
    600: '',
    700: '',
    800: '',
    900: '',
  },

  background: {
    light: 'white',
    dark: 'black',
  },

  text: {
    light: '#ffffff',
    dark: 'white',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
