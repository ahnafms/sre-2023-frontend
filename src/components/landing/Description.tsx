import Grid from '@/components/Grid';

import ScrollSpeed from '../animation/ScrollSpeed';
import Cell from '../Cell';
import SreYellow from '../logo/SreYellow';
import Typography from '../Typography';

const Description = () => {
  return (
    <Grid className='h-screen flex items-center relative z-50'>
      <ScrollSpeed
        speed={1}
        toVars={{
          scrollTrigger: {
            start: 'top bottom',
            end: '50% bottom',
          },
        }}
      >
        <Cell
          cols='1_full'
          className='text-center flex flex-col items-center gap-y-12'
        >
          <div>
            <SreYellow />
          </div>
          <Typography
            font='epilogue'
            weight='semibold'
            variant='h5'
            color='outline'
          >
            SRE ITS exist to develop innovation, exchange ideas, and facilitate
            students as active learners in the Renewable Energy field. SRE ITS
            believes that the world&apos;s energy future will depend more on
            Renewable Energy. SRE ITS is committed to spreading its wings and
            becoming trusted by the Indonesian government as a representative
            for spreading knowledge about Renewable Energy at the international
            level.
          </Typography>
        </Cell>
      </ScrollSpeed>
    </Grid>
  );
};

export default Description;
