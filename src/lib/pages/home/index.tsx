import { Button, Flex, Heading, HStack, VStack } from '@chakra-ui/react';

import NextLink from 'next/link';

import { nanoid } from 'nanoid';

import { NextSeo } from 'next-seo';

import SocialsRow from '~/lib/components/SocialsRow';

import TourSection from '~/lib/components/sections/tour';
import Podcast from '~/lib/components/sections/podcast';

const Home = () => {
  const hobbies = ['STAND UP COMIC', 'PODCASTER', 'LONGBOARDER'];

  return (
    <Flex
      backgroundColor="background.dark"
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="90vh"
      gap={4}
      w="full"
      px={{ base: '0', md: '12vw' }}
    >
      <NextSeo title="Home" />

      <Flex
        w="full"
        h="85vh"
        flexDir="column"
        bgImg="/hans-1-slim.png"
        bgBlendMode="darken"
        bgColor={{ base: 'rgba(0,0,0,.3)', md: 'rgba(0,0,0,.4)', lg: 'unset' }}
        bgRepeat="no-repeat"
        bgPos="top right"
        bgSize="contain"
        whiteSpace="nowrap"
        justify={{ base: 'end', md: 'end', lg: 'unset' }}
      >
        <VStack
          zIndex={2}
          w="full"
          mr="auto"
          align={{ base: 'center', md: 'left' }}
          mt={{ base: '0', md: '40vh', lg: '12vh' }}
          justify={{ base: 'center', md: 'left' }}
          rounded="lg"
        >
          <Heading
            as="h1"
            color="brand.primary"
            fontFamily="h1"
            fontSize={{ base: '6em', md: '10em' }}
            fontWeight="700"
            h=".8em"
            lineHeight="1"
            mb={'1vh'}
            mr={{ base: 'unset', md: 'auto' }}
            userSelect="none"
            textShadow="rgb(0 0 0) 4px 4px 0px"
          >
            HANS KIM
          </Heading>

          <HStack
            w="full"
            fontSize={{ base: '6vw', md: '40px' }}
            justify={{ base: 'center', md: 'left' }}
            textShadow="rgb(0 0 0) 2px 2px 0px"
          >
            {hobbies.map((e) => (
              <Heading
                as="h2"
                color="brand.primary"
                fontFamily="h1"
                fontSize="1em"
                fontWeight="500"
                key={nanoid()}
              >
                {e + '.'}
              </Heading>
            ))}
          </HStack>

          <Flex
            flexDir={{ base: 'column', md: 'row' }}
            justify={{ base: 'center', md: 'left' }}
            gap={4}
            w="full"
            pt="45px"
            px={{ base: '15px', md: 'unset' }}
          >
            <Button
              as={NextLink}
              scroll={false}
              href="/tour"
              passHref
              colorScheme="red"
              bgColor="brand.primary"
              variant="solid"
              size="lg"
              rounded="sm"
              color="text.dark"
              fontSize="1em"
            >
              VIEW TOUR DATES
            </Button>

            <Button
              as={NextLink}
              scroll={false}
              href="#tour"
              passHref
              colorScheme="red"
              variant="outline"
              size="lg"
              rounded="sm"
              color="brand.primary"
              borderColor="brand.primary"
              bgColor="rgba(0,0,0,.6)"
              fontSize="1em"
            >
              SHOP NOW
            </Button>
          </Flex>

          <SocialsRow
            boxSize="2em"
            styles={{
              justify: { base: 'center', md: 'left' },
              w: 'full',
              pt: '5vh',
            }}
          />
        </VStack>
      </Flex>

      <TourSection />

      <Podcast />
    </Flex>
  );
};

export default Home;
