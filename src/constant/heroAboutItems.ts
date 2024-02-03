import { IconType } from 'react-icons';
import { HiBookOpen, HiLightningBolt, HiSpeakerphone } from 'react-icons/hi';

type heroAboutItemType = {
  title: string;
  desc: string;
  icon: IconType;
};

const heroAboutItems: heroAboutItemType[] = [
  {
    title: 'Educate',
    desc: 'Educate ITS Students about New and Renewable Energy',
    icon: HiBookOpen,
  },
  {
    title: 'Facilitate',
    desc: 'Facilitate technology development, basic knowledge in RE',
    icon: HiLightningBolt,
  },
  {
    title: 'Branding',
    desc: 'Increase the euphoria and enthusiasm of ITS Students in Renewable Energy',
    icon: HiSpeakerphone,
  },
];

export default heroAboutItems;
