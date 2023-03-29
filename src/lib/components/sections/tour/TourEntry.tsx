import {
  Box,
  Button,
  Flex,
  HStack,
  Link,
  Spacer,
  Stack,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

import NextLink from 'next/link';

type TourEntryProps = {
  date: string;
  city: string;
  place: string;
  link: string;
};

export default function TourEntry({ date, city, place, link }: TourEntryProps) {
  return (
    <Flex
      flexDir={{ base: 'column', md: 'row' }}
      w="full"
      rounded="xl"
      fontFamily="body"
      fontWeight="semibold"
      justify="center"
      gap={{ base: '10px', md: 'unset' }}
    >
      <Flex
        flexDir="row"
        gap={'2em'}
        align="center"
        justify={{ base: 'center', md: 'left' }}
        w="full"
      >
        <Text color="brand.primary">{date.toUpperCase()}</Text>

        <Text color="text.dark">{city.toUpperCase()}</Text>
      </Flex>

      <Flex
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: '1em', md: '3em' }}
        align="center"
        justify="right"
        w="full"
      >
        <Text color="text.dark" fontWeight="bold">
          {place.toUpperCase()}
        </Text>

        <Link
          as={NextLink}
          href={link}
          passHref
          scroll={false}
          isExternal
          _hover={{ textDecor: 'none' }}
        >
          <Button
            variant="outline"
            colorScheme="red"
            color="brand.primary"
            rounded="sm"
          >
            BUY TICKETS
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
}
