import { Flex, Link, Text } from '@chakra-ui/react';

import NextLink from 'next/link';

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      justifyContent="center"
      bgColor="background.dark"
    >
      <Link as={NextLink} href="/" rel="noopener noreferrer" passHref>
        <Text fontSize="sm" color="text.dark">
          © {new Date().getFullYear()} - HANS KIM
        </Text>
      </Link>
    </Flex>
  );
};

export default Footer;
