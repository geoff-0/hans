import { Button, VStack } from '@chakra-ui/react';

import TourEntry from './TourEntry';

import NextLink from 'next/link';
import { nanoid } from 'nanoid';

export default function LandingTourList() {
  const sampleTourData = [
    {
      date: 'mar  24',
      city: 'dallas, tx',
      place: 'addison improv',
      link: 'https://improvtx.com/addison/comic/hans+kim/',
    },
    {
      date: 'MAR 30',
      city: 'indianapolis, in',
      place: 'helium',
      link: 'https://improvtx.com/addison/comic/hans+kim/',
    },

    {
      date: 'apr 27',
      city: 'san diego, ca',
      place: 'american comedy co.',
      link: 'https://improvtx.com/addison/comic/hans+kim/',
    },
    {
      date: 'apr 14',
      city: 'toronto, on',
      place: 'comedy bar danforth',
      link: 'https://comedybar.ca/shows/hans-kim?ev=2023-04-14T22%3A30%3A00',
    },
  ];

  return (
    <VStack w="full" gap={{ base: '3em', md: '1em' }}>
      {Array.from(Array(4).keys()).map((i) => (
        <TourEntry
          date={sampleTourData[i].date}
          city={sampleTourData[i].city}
          place={sampleTourData[i].place}
          link={sampleTourData[i].link}
          key={nanoid()}
        />
      ))}

      <Button
        as={NextLink}
        href="/tour"
        passHref
        scroll={false}
        colorScheme="red"
        bgColor="brand.primary"
        variant="solid"
        size="lg"
        rounded="sm"
        color="text.dark"
        fontSize="1em"
      >
        MORE SHOWS
      </Button>
    </VStack>
  );
}
