import Cell from '@/components/Cell';
import Grid from '@/components/Grid';
import Typography from '@/components/Typography';

export default function GridPage() {
  return (
    <div className="bg-white">
      <Grid className="bg-sky-50 py-10">
        <Cell cols="4_6">
          <Typography className="text-center p-4 bg-blue-200" as="h1">
            Grid and Cell Components
          </Typography>
        </Cell>
        <Cell rows="2_1" cols="10_3" className="bg-tertiary-10 p-2">
          <Typography as="h1">Cols start from 10 and Span 3</Typography>
        </Cell>
        <Cell rows="3_1" cols="1_5" className="bg-yellow-400 p-4">
          <Typography as="h1">Rows start from 3 and Span 1 </Typography>
          <Typography as="h1">Cols Start from 3 and Span 1</Typography>
        </Cell>
      </Grid>
      <Grid className="">
        <Cell cols="1_full">
          <Typography>Hello everyone</Typography>
        </Cell>
        <Cell cols="1_full">
          <Typography>Hello everyone</Typography>
        </Cell>
        <Cell cols="1_full">
          <Typography>Hello everyone</Typography>
        </Cell>
      </Grid>
    </div>
  );
}
