'use client';

import { ColumnDef } from '@tanstack/react-table';

import Table from '@/components/table/Table';

type Ttable = {
  id: string;
  name: string;
};

const data: Ttable[] = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Smith',
  },
  {
    id: '3',
    name: 'Bob Johnson',
  },
];

export default function TableTest() {
  const columns: ColumnDef<Ttable>[] = [
    {
      accessorKey: 'id',
      header: 'id',
      cell: props => <span>{`${props.getValue()}`}</span>,
    },
    {
      accessorKey: 'name',
      header: 'name',
      cell: props => <span>{`${props.getValue()}`}</span>,
    },
  ];

  return (
    <div className='w-full overflow-hidden items-center justify-center flex h-full min-h-screen'>
      <div className=' bg-white w-1/2'>
        <Table
          className='text-black'
          data={data}
          columns={columns}
          withFilter
          withPagination
        />
      </div>
    </div>
  );
}
