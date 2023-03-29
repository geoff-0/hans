import { Button, VStack } from '@chakra-ui/react';

import TourEntry from './TourEntry';

export default function TourList() {
  const sampleTourData = [
    {
      date: 'mar  24-29',
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
      date: 'apr 27-29',
      city: 'san diego, ca',
      place: 'american comedy co.',
      link: 'https://improvtx.com/addison/comic/hans+kim/',
    },
    {
      date: 'apr 14-15',
      city: 'toronto, on',
      place: 'comedy bar danforth',
      link: 'https://comedybar.ca/shows/hans-kim?ev=2023-04-14T22%3A30%3A00',
    },
  ];

  return (
    <VStack w="full" gap={{ base: '3em', md: '1em' }}>
      {sampleTourData.map((tourData) => (
        <TourEntry
          date={tourData.date}
          city={tourData.city}
          place={tourData.place}
          link={tourData.link}
        />
      ))}
    </VStack>
  );
}
