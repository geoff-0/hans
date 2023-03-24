import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';

import { nanoid } from 'nanoid';

import { NextSeo } from 'next-seo';

const Home = () => {
  const hobbies = [
    'STAND UP COMIC',
    'PODCASTER',
    'STAR CRAFT 2 MASTER LEAGUE PLAYER',
    'LONGBOARDER',
  ];

  return (
    <Flex
      backgroundColor="background.dark"
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      gap={4}
      w="full"
      px={{ sm: '5px', md: '10vw' }}
    >
      <NextSeo title="Home" />

      <Flex w="full" flexDir="row">
        <VStack
          spacing={4}
          w="full"
          whiteSpace="nowrap"
          bgImg={{ base: '/hans-1-slim.png', md: 'none', lg: 'none' }}
          bgRepeat="no-repeat"
        >
          <Heading
            as="h1"
            color="brand.primary"
            fontFamily="h1"
            fontSize="12vw"
            fontWeight="700"
            mt="10vh"
            mb="-9%"
            mr="auto"
            userSelect="none"
          >
            HANS KIM
          </Heading>

          <HStack w="full" pl="5px">
            {hobbies.map((e) => (
              <Heading
                as="h2"
                color="brand.primary"
                fontFamily="h1"
                fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
                key={nanoid()}
              >
                {e + '.'}
              </Heading>
            ))}
          </HStack>

          <HStack align="left" w="full" pt="30px">
            <Button
              as={NextLink}
              href="#tour"
              passHref
              colorScheme="red"
              bgColor="brand.primary"
              variant="solid"
              size="lg"
              rounded="md"
              color="text.dark"
            >
              VIEW TOUR DATES
            </Button>

            <Button
              as={NextLink}
              href="#tour"
              passHref
              colorScheme="red"
              variant="outline"
              size="lg"
              rounded="md"
              color="brand.primary"
              borderColor="brand.primary"
            >
              SHOP NOW
            </Button>
          </HStack>
        </VStack>

        <Image
          src="/hans-1-slim.png"
          alt="Hans Logo"
          objectFit="cover"
          h="80vh"
          float="right"
        />
      </Flex>

      <Image
        src="/hans-1-slim.png"
        alt="Hans Logo"
        objectFit="cover"
        rounded="lg"
        h="65vh"
      />
    </Flex>
  );
};

export default Home;
