'use client';

import BaseDialog from '@/components/dialog/BaseDialog';
import DesktopNavigation from '@/layouts/dashboard/DesktopNavigation';
import MobileNavigation from '@/layouts/dashboard/MobileNavigation';
import useDialogStore from '@/stores/useDialogStore';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, state, handleClose, handleSubmit } = useDialogStore();
  return (
    <div className='min-h-full'>
      <DesktopNavigation />

      <div className='bg-secondary-300 flex flex-col lg:pl-64'>
        <MobileNavigation />
        <main tabIndex={-1}>{children}</main>
        <BaseDialog
          onClose={handleClose}
          onSubmit={handleSubmit}
          open={open}
          options={state}
        />
      </div>
    </div>
  );
}
