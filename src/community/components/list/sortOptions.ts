export interface IOption {
  label: string | React.ReactNode;
  key: string;
  short_name: string;
}

export const SortOptions: IOption[] = [
  {
    label: 'Rating: Low to High',
    key: 'rating_asc',
    short_name: 'Rating',
  },
  {
    label: 'Rating: High to Low',
    key: 'rating_desc',
    short_name: 'Rating',
  },
  {
    label: 'Workload: Low to High',
    key: 'workload_asc',
    short_name: 'Workload',
  },
  {
    label: 'Workload: High to Low',
    key: 'workload_desc',
    short_name: 'Workload',
  },
  {
    label: 'Code: A-Z',
    key: 'code_asc',
    short_name: 'Code',
  },
  {
    label: 'Code: Z-A',
    key: 'code_desc',
    short_name: 'Code',
  },
  {
    label: 'Program: MBA first',
    key: 'program_asc',
    short_name: 'MBA first',
  },
];
