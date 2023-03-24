import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  textDecoration,
  useStyleConfig,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import NavbarLink from '../components/navigation/NavbarLink';

import useScrollPosition from '../hooks/useScrollPosition';

const Header = () => {
  const scrollPos = useScrollPosition();

  return (
    <Flex
      as="header"
      w="full"
      justify="center"
      align="center"
      bgColor="rgba(0,0,0,.75)"
      opacity="1"
      transition=".5s opacity"
      gap="2rem"
      position="sticky"
      top="0"
      zIndex="9999"
      p="15px"
    >
      <NavbarLink label="HOME" href={'/'} />

      <NavbarLink label="TOUR" href="#tour" />

      <NavbarLink label="PODCAST" href="#podcast" />

      <NavbarLink label="PICTURES" href="#pictures" />

      {/* This is the logo image link */}
      <Link as={NextLink} href="/" passHref _hover={{ opacity: 0.65 }}>
        <Image
          src={'/hans-logo2.png'}
          alt={'Hans Logo'}
          objectFit="cover"
          h={scrollPos == 0 ? '10em' : '5em'}
          transition=".3s"
          display="block"
        />
      </Link>

      <NavbarLink label="STORE" href="#store" />

      <NavbarLink label="ABOUT" href="#about" />

      <NavbarLink label="CONTACT" href="#contact" />

      <NavbarLink label="BLOG" href="#blog" />
    </Flex>
  );
};

export default Header;
