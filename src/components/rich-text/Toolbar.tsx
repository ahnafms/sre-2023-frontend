import {
  AiOutlineLink,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from 'react-icons/ai';
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from 'react-icons/lu';

import BlockButton from '@/components/rich-text/BlockButton';
import MarkButton from '@/components/rich-text/MarkButton';
import clsxm from '@/lib/clsxm';

type SlateToolbarProps = {
  className?: string;
} & React.ComponentPropsWithoutRef<'div'>;

export default function SlateToolbar({ className }: SlateToolbarProps) {
  return (
    <div className={clsxm('w-full flex gap-3', className)}>
      <MarkButton format='bold' />
      <BlockButton format='bulleted-list' Icon={AiOutlineUnorderedList} />
      <BlockButton format='numbered-list' Icon={AiOutlineOrderedList} />
      <BlockButton format='heading-one' Icon={LuHeading1} />
      <BlockButton format='heading-two' Icon={LuHeading2} />
      <BlockButton format='heading-three' Icon={LuHeading3} />
      <BlockButton format='heading-four' Icon={LuHeading4} />
      <BlockButton format='heading-five' Icon={LuHeading5} />
      <BlockButton format='heading-six' Icon={LuHeading6} />
      <BlockButton format='link' Icon={AiOutlineLink} />
    </div>
  );
}
