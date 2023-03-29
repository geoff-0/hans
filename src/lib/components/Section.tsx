import {
  Box,
  Divider,
  Flex,
  Heading,
  HStack,
  StyleProps,
  VStack,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type SectionProps = {
  sectionId?: string;
  sectionTitle: string;
  children: ReactNode;
};

export default function Section({
  sectionId,
  sectionTitle,
  children,
}: SectionProps) {
  return (
    <Flex
      flexDir="column"
      id={sectionId}
      py="5vh"
      px="0"
      w="full"
      dir="column"
      whiteSpace="nowrap"
      gap={'20px'}
    >
      <Heading
        as={'h2'}
        fontFamily="h1"
        color="text.dark"
        fontSize="5xl"
        fontWeight="600"
        textAlign="center"
      >
        {sectionTitle.toUpperCase()}
      </Heading>

      <Box>{children}</Box>
    </Flex>
  );
}
