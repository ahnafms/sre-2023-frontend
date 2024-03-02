import * as React from 'react';

import Modal from '@/components/modal/Modal';
import Typography from '@/components/Typography';
import testimonialItems from '@/constant/testimonial';
type TestimonialModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  testiIdx: number;
};

export default function TestimonialModalButton({
  testiIdx,
}: {
  testiIdx: number;
}) {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <p
        onClick={() => setOpen(true)}
        className='w-fit inline-block bg-white rounded-md px-2 text-primary-50 cursor-pointer'
      >
        {' '}
        ... read more
      </p>
      <TestimonialModal open={open} setOpen={setOpen} testiIdx={testiIdx} />
    </>
  );
}

function TestimonialModal({ open, setOpen, testiIdx }: TestimonialModalProps) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Title className='font-semibold flex flex-col gap-4'>
        <div className='flex flex-col gap-1'>
          <Typography variant='t' weight='bold'>
            {testimonialItems[testiIdx]?.name ?? ''}
          </Typography>
          <Typography variant='c2'>
            {testimonialItems[testiIdx]?.position ?? ''}
          </Typography>
        </div>
      </Modal.Title>
      <Modal.Body>
        <div className='max-h-[50vh] w-full overflow-y-scroll'>
          <Typography variant='p'>
            {testimonialItems[testiIdx]?.detail ?? ''}
          </Typography>
        </div>
      </Modal.Body>
    </Modal>
  );
}
