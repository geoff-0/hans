import type { DeepPartial, Theme } from '@chakra-ui/react';

/** extend additional color here */
const extendedColors = {
  brand: {
    primary: '#100806',
  },
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme['colors']> = {};

export const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};
