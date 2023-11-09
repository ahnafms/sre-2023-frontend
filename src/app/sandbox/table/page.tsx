'use client';

import { ColumnDef } from '@tanstack/react-table';

import Table from '@/components/table/Table';

type Ttable = {
  id: string;
  name: string;
  departemen: string;
  angkatan: number;
};

const data: Ttable[] = [
  {
    id: '1',
    name: 'anaf',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '2',
    name: 'reynold',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '3',
    name: 'inu',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '4',
    name: 'vino',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '5',
    name: 'bhisma',
    departemen: 'IT DEV',
    angkatan: 2022,
  },
  {
    id: '6',
    name: 'budi',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '7',
    name: 'yanto',
    departemen: 'Perkap',
    angkatan: 2020,
  },
  {
    id: '8',
    name: 'ahmad',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '9',
    name: 'andre',
    departemen: 'Kestari',
    angkatan: 2022,
  },
  {
    id: '10',
    name: 'jamal',
    departemen: 'Kestari',
    angkatan: 2021,
  },
  {
    id: '1',
    name: 'anaf',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '2',
    name: 'reynold',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '3',
    name: 'inu',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '4',
    name: 'vino',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '5',
    name: 'bhisma',
    departemen: 'IT DEV',
    angkatan: 2022,
  },
  {
    id: '6',
    name: 'budi',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '7',
    name: 'yanto',
    departemen: 'Perkap',
    angkatan: 2020,
  },
  {
    id: '8',
    name: 'ahmad',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '9',
    name: 'andre',
    departemen: 'Kestari',
    angkatan: 2022,
  },
  {
    id: '10',
    name: 'jamal',
    departemen: 'Kestari',
    angkatan: 2021,
  },
  {
    id: '1',
    name: 'anaf',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '2',
    name: 'reynold',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '3',
    name: 'inu',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '4',
    name: 'vino',
    departemen: 'IT DEV',
    angkatan: 2021,
  },
  {
    id: '5',
    name: 'bhisma',
    departemen: 'IT DEV',
    angkatan: 2022,
  },
  {
    id: '6',
    name: 'budi',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '7',
    name: 'yanto',
    departemen: 'Perkap',
    angkatan: 2020,
  },
  {
    id: '8',
    name: 'ahmad',
    departemen: 'Perkap',
    angkatan: 2021,
  },
  {
    id: '9',
    name: 'andre',
    departemen: 'Kestari',
    angkatan: 2022,
  },
  {
    id: '10',
    name: 'jamal',
    departemen: 'Kestari',
    angkatan: 2021,
  },
];

export default function TableTest() {
  const columns: ColumnDef<Ttable>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: props => <span>{`${props.getValue()}`}</span>,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'departemen',
      header: 'Departemen',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
    },
    {
      accessorKey: 'angkatan',
      header: 'Angkatan',
      cell: props => <span>{`${props.getValue()}`}</span>,
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id));
      },
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
          withPaginationControl
          withPaginationCount
          filter={['departemen', 'angkatan']}
        />
      </div>
    </div>
  );
}
