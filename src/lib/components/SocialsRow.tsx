import { Flex, HStack } from '@chakra-ui/react';
import InstragramIcon from '../icons/InstragramIcon';
import LinktreeIcon from '../icons/LinktreeIcon';
import TikTokIcon from '../icons/TikTokIcon';
import TwitterIcon from '../icons/TwitterIcon';
import YouTubeIcon from '../icons/YouTubeIcon';
import IconLink from './navigation/IconLink';

type SocialsRowProps = {
  boxSize?: string;
  styles?: any;
  fill?: string;
  hoverFill?: string;
};

export default function SocialsRow({
  boxSize,
  fill = 'brand.primary',
  hoverFill = 'text.dark',
  styles,
}: SocialsRowProps) {
  const data = {
    'https://linktr.ee/DJHansKim': LinktreeIcon,
    'https://www.youtube.com/user/HansKimComedy': YouTubeIcon,
    'https://twitter.com/DJHansKim': TwitterIcon,
    'https://www.tiktok.com/@djhanskim': TikTokIcon,
  };

  return (
    <Flex gap={4} {...styles}>
      {Object.keys(data).map((e) => (
        <IconLink
          icon={data[e as keyof typeof data]}
          href={e}
          boxSize={boxSize}
          fill={fill}
          hoverFill={hoverFill}
          styles={{
            _hover: { transform: 'translateY(-5px)', transition: '.3s' },
            transition: '.3s ease',
          }}
          isExternal={true}
        />
      ))}
    </Flex>
  );
}
