import { Box, Flex, Icon, IconButton, Link } from '@chakra-ui/react';

import NextLink from 'next/link';

type ImageIconLinkProps = {
  icon: any;
  href: string;
  boxSize?: string;
  fill?: string;
  hoverFill?: string;
  styles?: any;
  isExternal?: boolean;
};

export default function IconLink({
  icon,
  href,
  boxSize = '30px',
  fill = 'brand.primary',
  hoverFill = 'text.dark',
  styles,
  isExternal = true,
}: ImageIconLinkProps) {
  return (
    <Link
      role="group"
      href={href}
      as={NextLink}
      scroll={false}
      fill={fill}
      _groupHover={{ fill: hoverFill }}
      passHref
      rounded="full"
      isExternal={isExternal}
    >
      <Icon
        as={icon}
        bgColor="rgba(0,0,0,0)"
        boxSize={boxSize}
        transition=".3s ease"
        _groupHover={{ fill: hoverFill }}
        {...styles}
      />
    </Link>
  );
}
