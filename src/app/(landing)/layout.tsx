'use client';
import LenisScroll from '@/components/animation/LenisScroll';
export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisScroll>
      <main>{children}</main>
    </LenisScroll>
  );
}
