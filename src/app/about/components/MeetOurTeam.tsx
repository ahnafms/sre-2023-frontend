import Division from './Division';
export default function MeetOurTeam() {
  return (
    <section className='overflow-hidden relative w-full'>
      <section className='h-full flex flex-col justify-center items-center overflow-x-hidden relative pb-20 z-[5]'>
        <Division />
      </section>
      {/* TODO: Performance issue */}
      {/* <Image */}
      {/*   src='/images/about/paper5.png' */}
      {/*   alt='paper' */}
      {/*   width={500} */}
      {/*   height={5000} */}
      {/*   className='absolute h-full top-0 w-full z-[0] bg-cover' */}
      {/* /> */}
    </section>
  );
}
