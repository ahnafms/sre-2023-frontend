import React from 'react';

import Modal from '@/components/modal/Modal';

export default function ShortURLModal({
  setOpen,
  open,
  children,
}: {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
  children: React.ReactNode;
}) {
  return (
    <Modal open={open} setOpen={setOpen}>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
}
