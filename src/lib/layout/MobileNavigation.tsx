import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import IconLink from '../components/navigation/IconLink';
import NavbarLink from '../components/navigation/NavbarLink';
import SocialsRow from '../components/SocialsRow';
import HamburgerMenuIcon from '../icons/HamburgerMenuIcon';
import LogoBodyIcon from '../icons/LogoBodyIcon';
import LogoHeadIcon from '../icons/LogoHeadIcon';

export default function MobileNavigation() {
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const router = useRouter();

  const HamburgerIcon = () => (
    <HamburgerMenuIcon
      ml="auto"
      fill="white"
      transition=".3s ease"
      h="45px"
      w="auto"
      transform="scaleX(-1)"
      onClick={() => {
        onOpen();
      }}
      _hover={{ fill: 'brand.primary' }}
    />
  );

  return (
    <Flex
      display={{ base: 'flex', md: 'flex', lg: 'none' }}
      as="header"
      w="full"
      align="center"
      position="sticky"
      top="0"
      zIndex="9999"
      bgColor="rgba(0,0,0,.75)"
      p="10px"
    >
      <HStack>
        <IconLink
          icon={LogoHeadIcon}
          href="/"
          fill={'text.dark'}
          hoverFill={'brand.primary'}
          styles={{ boxSize: '4em' }}
          isExternal={false}
        />

        <IconLink
          icon={LogoBodyIcon}
          href="/"
          fill={'text.dark'}
          hoverFill={'brand.primary'}
          styles={{ h: '1.5em', w: 'auto' }}
          isExternal={false}
        />
      </HStack>

      <Icon
        as={HamburgerMenuIcon}
        aria-label="Hamburger Icon"
        boxSize="45px"
        fill="text.dark"
        transform="scaleX(-1)"
        ml="auto"
        transition=".3s ease"
        _hover={{ fill: 'brand.primary' }}
        onClick={() => {
          onToggle();
        }}
      />

      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        size={{ base: 'xs', md: 'lg' }}
      >
        <DrawerOverlay />

        <DrawerContent bgColor="rgba(0,0,0,0)">
          <DrawerBody bgColor="rgba(0,0,0,.85)" mt="84px">
            <Flex
              flexDir="column"
              fontSize="8vw"
              h="full"
              align="center"
              justify="center"
              gap="2vh"
            >
              <NavbarLink
                label="HOME"
                href={'/'}
                styles={{
                  fontSize: '1em',
                  onClick: () => {
                    if (router.pathname == '/') {
                      scrollTo(0, 0);
                    }
                  },
                }}
              />

              <NavbarLink
                label="TOUR"
                href="/tour"
                styles={{ fontSize: '1em' }}
              />

              <NavbarLink
                label="PODCAST"
                href="/#podcast"
                styles={{ fontSize: '1em' }}
              />

              <NavbarLink
                label="PICTURES"
                href="/#pictures"
                styles={{ fontSize: '1em' }}
              />

              <NavbarLink
                label="STORE"
                href="/store"
                styles={{ fontSize: '1em' }}
              />

              <NavbarLink
                label="CONTACT"
                href="/contact"
                styles={{ fontSize: '1em' }}
              />

              <NavbarLink
                label="BLOG"
                href="/blog"
                styles={{ fontSize: '1em' }}
              />

              <SocialsRow boxSize="45px" styles={{ mt: '10vh', gap: '15px' }} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
