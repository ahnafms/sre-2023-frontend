import AuthIllustration from './AuthIllustration';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='w-full min-h-screen bg-white'>
      <section className='fixed hidden lg:block w-2/3 right-0 top-0 h-full'>
        <AuthIllustration />
      </section>
      <main className='md:px-16 px-4 py-6 w-full lg:w-1/3 min-h-screen flex flex-col justify-center'>
        {children}
      </main>
    </div>
  );
}
