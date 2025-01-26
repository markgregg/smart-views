import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef } from 'ag-grid-community';
import { bonds } from '../../../../data/bonds';
import { columns } from '@/stories/SmartViewsFunctions';
import Bond from '@/TestApp/types/Bond';
import { SmartViews } from '@/components';
import s from './style.module.less';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


export const SmartViewApp = () => {
  const [rowData, setRowData] = React.useState<Bond[]>(bonds);
  const [columnDefs] = React.useState<ColDef<Bond>[]>(columns);

  const queryParams = React.useMemo(() => {
    const query = window.location.search.substring(1);
    const params = query.split('&').filter((t) => t.trim() !== '');
    return params.reduce((p: any, v) => {
      const pv = v.split('=');
      return pv.length < 2 ? { ...p, [pv[0]]: true } : { ...p, [pv[0]]: pv[1] };
    }, {});
  }, []);


  const style = queryParams.width
    ? { width: `${queryParams.width}px` }
    : undefined;

  const size = queryParams.size ?? 'normal';

  return (
    <div className={s.smartFilterPage}>
      <h4>Smart View</h4>
      <div className={s.filterBar} style={style}>
        <SmartViews size={size} />
      </div>
      <div className={[s.grid, 'ag-theme-alpine'].join(' ')}>
        <AgGridReact rowData={rowData} columnDefs={columnDefs} />
      </div>
    </div>
  );
};
