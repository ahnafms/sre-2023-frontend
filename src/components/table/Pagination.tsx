import { RowData, Table } from '@tanstack/react-table';

import Button from '@/components/Button';

type PaginationProps<T extends RowData> = {
  table: Table<T>;
} & React.ComponentPropsWithoutRef<'div'>;

export function PaginationCount<T extends RowData>({
  table,
}: PaginationProps<T>) {
  return (
    <div className='flex gap-x-2'>
      <span className='flex items-center gap-1 whitespace-nowrap text-cwhite'>
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </strong>
      </span>
      <select
        className='w-full rounded-lg'
        value={table.getState().pagination.pageSize}
        onChange={(e) => {
          table.setPageSize(Number(e.target.value));
        }}
      >
        {[5, 10, 15, 20, 25].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}

export function PaginationControl<T extends RowData>({
  table,
}: PaginationProps<T>) {
  return (
    <div className='flex items-center justify-center gap-x-2 py-10'>
      <Button
        onClick={() => table.setPageIndex(0)}
        disabled={!table.getCanPreviousPage()}
      >
        {'<<'}
      </Button>
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        {'<'}
      </Button>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        {'>'}
      </Button>
      <Button
        onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        disabled={!table.getCanNextPage()}
      >
        {'>>'}
      </Button>
    </div>
  );
}