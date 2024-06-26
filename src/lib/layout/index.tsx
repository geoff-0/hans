import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import MobileNavigation from './MobileNavigation';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" transition="0.5s ease-out">
      <Box>
        <Header />
        <MobileNavigation />
        <Box as="main">{children}</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
