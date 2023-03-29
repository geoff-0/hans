import '@fontsource/fjalla-one';

// import '@fontsource/teko';

import '@fontsource/teko/500.css';

import '@fontsource/teko/700.css';

import '@fontsource/roboto/400.css';

import '@fontsource/roboto/500.css';

import '@fontsource/roboto/700.css';

import '@fontsource/montserrat/400.css';

import '@fontsource/montserrat/500.css';

import '@fontsource/montserrat/600.css';

import '@fontsource/montserrat/700.css';

import { ChakraProvider } from '@chakra-ui/react';

import customTheme from '~/lib/styles/theme/index';

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
