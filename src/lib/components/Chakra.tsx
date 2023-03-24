import '@fontsource/fjalla-one/400.css';

import '@fontsource/teko';

import '@fontsource/roboto';

import '@fontsource/montserrat';

import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme/index';

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
