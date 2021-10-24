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
        field: 'order',
        headerName: 'Order',
        headerClassName: 'column-header',
        width: 120,
        editable: true,
    }, {
        field: 'description',
        headerName: 'Description',
        headerClassName: 'column-header',
        width: 160,
        editable: true,
    },
    {
        field: 'mainLabel',
        headerName: 'Main Label',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'subLabel',
        headerName: 'Sub Label',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    },
    {
        field: 'length',
        headerName: 'Length',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'breadth',
        headerName: 'Breadth',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'height',
        headerName: 'Height',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'quantity',
        headerName: 'Quantity',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'formula',
        headerName: 'Formula',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'totalArea',
        headerName: 'Total Area',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'totalVolume',
        headerName: 'Total Volume',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'code',
        headerName: 'Code',
        headerClassName: 'column-header',
        width: 130,
        editable: true,
    }, {
        field: 'dsrArea',
        headerName: 'DSR Area',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    }, {
        field: 'dsrVolume',
        headerName: 'DSR Volume',
        headerClassName: 'column-header',
        width: 150,
        editable: true,
    },
];

const rows = [];

export default function DataTable() {
    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{ height: 460, width: '100%' }}>
            <DataGrid
                rows={rows}
                rowHeight={25}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 20, 30, 50]}
                pagination
                disableSelectionOnClick
                components={{
                }}
                />
        </div>
    );
}

