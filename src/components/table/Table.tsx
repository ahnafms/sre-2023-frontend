'use client';
import {
  ColumnDef,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import * as React from 'react';

import Filter from '@/components/table/Filter';
import {
  PaginationControl,
  PaginationCount,
} from '@/components/table/Pagination';
import TBody from '@/components/table/TBody';
import THead from '@/components/table/THead';
import clsxm from '@/lib/clsxm';

import MultiFilter from './MultiFilter';

type TableProps<T extends object> = {
  data: T[];
  columns: ColumnDef<T>[];
  omitSort?: boolean;
  withFilter?: boolean;
  withPagination?: boolean;
  filter?: string[];
} & React.ComponentPropsWithoutRef<'div'>;

export default function Table<T extends object>({
  className,
  columns,
  data,
  omitSort = false,
  withFilter = false,
  withPagination = false,
  filter = [],
  ...rest
}: TableProps<T>) {
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      sorting,
    },
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className={clsxm('flex flex-col', className)} {...rest}>
      <div className='flex flex-col gap-y-3 sm:flex-row sm:justify-between'>
        <div>{withFilter && <Filter table={table} />}</div>
        {filter.length &&
          filter.map((col, idx) => {
            const column = table.getColumn(col);
            const lowerCase = col.toLowerCase();
            const title =
              lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
            if (col) {
              return <MultiFilter key={idx} column={column} title={title} />;
            } else null;
          })}
        {withPagination && <PaginationCount table={table} />}
      </div>
      <div className='-my-2 mt-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
          <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
            <table className='min-w-full divide-y divide-gray-300'>
              <THead table={table} omitSort={omitSort} />
              <TBody table={table} />
            </table>
          </div>
        </div>
      </div>
      {withPagination && <PaginationControl table={table} />}
    </div>
  );
}
