import { Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type NavbarLinkProps = {
  label: string;
  href: string;
};

export default function NavbarLink({ label, href }: NavbarLinkProps) {
  return (
    <Link
      as={NextLink}
      href={href}
      passHref
      _hover={{ textDecoration: 'none' }}
    >
      <Text
        color="text.dark"
        transition=".3s"
        fontFamily={'heading'}
        fontSize="30px"
        _hover={{ opacity: 0.8, color: 'brand.primary' }}
      >
        {label}
      </Text>
    </Link>
  );
}
