import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import data from '../../../data/data.json';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'contractNumber', headerName: 'Contract Number', width: 200 },
  { field: 'status', headerName: 'Status', width: 150 },
  { field: 'ownerId', headerName: 'Owner Id', width: 150 },
  { field: 'ownerName', headerName: 'Owner Name', width: 150 },
];

const rows = data.serviceContracts;

const ServiceTable = () => {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}

export default ServiceTable;