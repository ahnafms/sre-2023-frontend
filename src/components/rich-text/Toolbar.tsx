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
      <BlockButton format='bulleted-list' />
      <BlockButton format='heading-one' />
    </div>
  );
}
