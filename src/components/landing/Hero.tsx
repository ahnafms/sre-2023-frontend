import Cell from '../Cell';
import Grid from '../Grid';
import Typography from '../Typography';

const Hero = () => {
  return (
    <Grid className='pt-[20vh] static'>
      <Cell cols='3_8' className='text-center'>
        <Typography
          font='anton'
          weight='regular'
          variant='h3'
          className='text-primary-50 drop-shadow-text'
        >
          ENERGIZING GLOBAL FUTURE
        </Typography>
        <Typography
          font='epilogue'
          weight='semibold'
          variant='h5'
          color='white'
        >
          Sepuluh Nopember Institute of Technology
        </Typography>
      </Cell>
    </Grid>
  );
};

export default Hero;
