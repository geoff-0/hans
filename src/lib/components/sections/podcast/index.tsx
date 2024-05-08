import { Button, Flex, Image, Link, Text } from '@chakra-ui/react';

import Section from 'lib/components/Section';

import YouTubeIcon from '~/lib/icons/YouTubeIcon';

import NextLink from 'next/link';

import NextImage from 'next/image';

import { useColorMode } from '@chakra-ui/react'

export default function Podcast() {
  const { colorMode } = useColorMode()

  return (
    <Section sectionId="podcast" sectionTitle="Hans Kim Podcast">
      <Flex flexDir={{ base: 'column', md: 'row' }} gap={'7vw'}>
        <Image
          src="/podcast.png"
          alt={'hans'}
          objectFit="cover"
          objectPosition="right"
          rounded="lg"
          display={{ base: 'flex', md: 'none' }}
        />

        <Flex
          pt="1em"
          gap={4}
          flexDir="column"
          whiteSpace="normal"
          fontSize="lg"
          bgColor="rgba(0,0,0,0)"
          zIndex={2}
          justify="center"
          align="center"
        >
          <Text color={colorMode === 'light' ? 'text.dark' : 'text.light'}>
            The Hans Kim Podcasts are a bunch of podcasts done whenever Hans Kim
            decides to wake up and do something with his life. It is the easiest
            thing in the world, yet it still takes some effort, so it is an
            insurmountable obstacle most days.
          </Text>

          <Link
            mt={{ base: '1em', md: '2em' }}
            as={NextLink}
            scroll={false}
            href="https://www.youtube.com/results?search_query=hans+kim+podcast"
            passHref
            isExternal
            _hover={{ textDecor: 'none' }}
          >
            <Button
              size="md"
              variant="outline"
              colorScheme="red"
              color="brand.primary"
              leftIcon={<YouTubeIcon fill="brand.primary" boxSize="20px" />}
              rounded="md"
            >
              WATCH NOW
            </Button>
          </Link>
        </Flex>

        <Image
          src="/podcast.png"
          alt={'hans'}
          maxW="30vw"
          objectFit="cover"
          objectPosition="right"
          rounded="lg"
          display={{ base: 'none', md: 'flex' }}
        />
      </Flex>
    </Section>
  );
}
