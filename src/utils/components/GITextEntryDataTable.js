import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';


import './DataTable.css';

const columns = [
    {
        field: 'serialNo',
        headerName: 'Sl No',
        headerClassName: 'column-header',
        width: 120,
        editable: true,
    },
    {
        field: 'areaName',
        headerName: 'Area Name',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    }, {
        field: 'horizontal',
        headerName: 'Horizontal',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'vertical',
        headerName: 'Vertical',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'horizantalWall1',
        headerName: 'Horizontal Wall1',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'horizantalWall2',
        headerName: 'Horizontal Wall2',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'verticalWall1',
        headerName: 'Vertical Wall1',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    }, {
        field: 'verticalWall2',
        headerName: 'Vertical Wall2',
        headerClassName: 'column-header',
        width: 180,
        editable: true,
    },
];

const rows = [];

export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{ height: 580, width: '100%' }}>
            <DataGrid
                rows={rows}
                rowHeight={25}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50]}
                pagination
                disableSelectionOnClick
            />
        </div>
    );
}