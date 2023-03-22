import { Box, Flex } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';

const Home = () => {
  return (
    <Flex
      backgroundColor="brand.primary"
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />
      <Box></Box>
    </Flex>
  );
};

export default Home;
