import { Flex } from '@chakra-ui/react';
import Section from '~/lib/components/Section';
import TourList from '~/lib/components/sections/tour/TourList';

export default function Tour() {
  return (
    <Flex minH="75vh" px="15vw">
      <Section sectionTitle="UPCOMING DATES">
        <TourList />
      </Section>
    </Flex>
  );
}
