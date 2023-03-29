import { Box, Link, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

type NavbarLinkProps = {
  label: string;
  href: string;
  styles?: any;
};

export default function NavbarLink({ label, href, styles }: NavbarLinkProps) {
  return (
    <Link
      role="group"
      as={NextLink}
      href={href}
      passHref
      scroll={false}
      scrollBehavior="smooth"
      transition=".3s ease"
      _hover={{ textDecor: 'none' }}
    >
      <Text
        color="text.dark"
        transition=".3s ease"
        fontFamily={'heading'}
        fontSize="2em"
        _groupHover={{ color: 'brand.primary' }}
        {...styles}
      >
        {label}
      </Text>

      <Box
        mt="-10px"
        h="3px"
        w="full"
        bgColor="white"
        transform="scaleX(0)"
        transition=".3s ease"
        _groupHover={{ transform: 'scaleX(1)', transition: '.3s ease' }}
      />
    </Link>
  );
}
