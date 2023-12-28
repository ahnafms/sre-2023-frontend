import Cell from '../Cell';
import Grid from '../Grid';
import YellowStar from '../logo/YellowStar';
import Typography from '../Typography';

const Hero = () => {
  return (
    <Grid className='pt-[20vh] relative z-20'>
      <Cell
        cols='1_full'
        colsMd='3_8'
        rows='2_1'
        rowsMd='1_1'
        className='text-center'
      >
        <Typography
          font='anton'
          variant='h4'
          className='drop-shadow-text lg:text-h3 text-primary-50'
        >
          ENERGIZING GLOBAL FUTURE
        </Typography>
      </Cell>
      <Cell
        cols='1_full'
        colsMd='1_2'
        className='h-full w-full flex justify-start items-center md:justify-center mb-10 md:mb-0'
        rows='1_1'
        rowsMd='1_1'
      >
        <YellowStar
          className='animate-spin-16 w-12 md:w-14 lg:w-16'
          height='auto'
          width='auto'
        />
      </Cell>
      <Cell
        cols='1_full'
        colsMd='11_2'
        className='h-full w-full flex justify-end md:justify-center items-center mt-4 md:mt-0'
        rows='4_1'
        rowsMd='1_1'
      >
        <YellowStar
          className='animate-spin-16 w-12 md:w-14 lg:w-16'
          height='auto'
          width='auto'
        />
      </Cell>
      <Cell cols='1_full' className='text-center'>
        <Typography
          font='epilogue'
          weight='semibold'
          variant='h6'
          className='lg:text-h5'
          color='white'
        >
          Sepuluh Nopember Institute of Technology
        </Typography>
      </Cell>
    </Grid>
  );
};

export default Hero;
