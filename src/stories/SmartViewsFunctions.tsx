import { ColDef } from 'ag-grid-community';
import moment from 'moment';
import { bonds } from '../../data/bonds';

export type SortFunction = (x: any, y: any) => number;

export default interface Bond {
  isin: string;
  currency: string;
  issueDate: string;
  maturityDate: string;
  price: number;
  size: number;
  side: string;
  coupon: number;
  issuer: string;
  hairCut: number;
  active: boolean;
  categories: {
    type: string;
    sector: string;
  };
}

export const columns: ColDef<Bond>[] = [
  {
    field: 'isin',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'side',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'currency',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'issueDate',
    filter: 'agDateStringColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'maturityDate',
    filter: 'agDateStringColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'coupon',
    filter: 'agNumberColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'issuer',
    filter: 'agTextColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'hairCut',
    filter: 'agNumberColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    field: 'active',
    filter: 'agBooleanColumnFilter',
    sortable: true,
    resizable: true,
  },
  {
    colId: 'sector',
    field: 'categories.sector',
    filter: 'agSetColumnFilter',
    sortable: true,
    resizable: true,
  },
];

