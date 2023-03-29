import { Box, Flex } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { useRouter } from 'next/router';

import IconLink from '../components/navigation/IconLink';

import NavbarLink from '../components/navigation/NavbarLink';

import useScrollPosition from '../hooks/useScrollPosition';
import LogoIcon from '../icons/LogoIcon';

const Header = () => {
  const scrollPos = useScrollPosition();

  const router = useRouter();

  return (
    <Flex
      as="header"
      w="full"
      justify="center"
      align="baseline"
      bgColor={scrollPos > 0 ? 'rgba(0,0,0,.75)' : 'rgba(0,0,0,0)'}
      gap="2vw"
      position="sticky"
      top="0"
      zIndex="9999"
      display={{ base: 'none', md: 'none', lg: 'flex' }}
    >
      <NavbarLink
        label="HOME"
        href={'/'}
        styles={{
          onClick: () => {
            if (router.pathname == '/') {
              scrollTo(0, 0);
            }
          },
        }}
      />

      <NavbarLink label="TOUR" href="/tour" key={nanoid()} />

      <NavbarLink label="PODCAST" href="/#podcast" key={nanoid()} />

      <NavbarLink label="GALLERY" href="/#gallery" key={nanoid()} />

      {/* This is the logo image link */}
      <IconLink
        icon={LogoIcon}
        boxSize={scrollPos == 0 ? '20vh' : '6em'}
        fill={'text.dark'}
        hoverFill={'brand.primary'}
        href="/"
      />

      <NavbarLink label="ABOUT" href="/#about" key={nanoid()} />

      <NavbarLink label="STORE" href="/store" key={nanoid()} />

      <NavbarLink label="CONTACT" href="/contact" key={nanoid()} />

      <NavbarLink label="BLOG" href="/blog" key={nanoid()} />
    </Flex>
  );
};

export default Header;
