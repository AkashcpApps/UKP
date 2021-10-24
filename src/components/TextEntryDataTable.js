import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import * as Constants from '../utils/Constants';

import './DataTable.css';
const axios = require('axios');

const columns = [
    {
        field: 'ID',
        headerName: 'ID',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },
    {
        field: 'GeneralInfoID',
        headerName: 'GeneralInfoID',
        headerClassName: 'column-header',
        width: 400,
        editable: true,
    },
    ,
    {
        field: 'SerialNo',
        headerName: 'SerialNo',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },
    ,
    {
        field: 'AreaName',
        headerName: 'AreaName',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },
    ,
    {
        field: 'Horizontal',
        headerName: 'Horizontal',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },
    ,
    {
        field: 'Vertical',
        headerName: 'Vertical',
        headerClassName: 'column-header',
        width: 200,
        editable: true,
    },

];

const src = Constants.url+'/UKP/rest/endpoints/GetTextEntry';


export default function TextEntryDataTable() {
    const [pageSize, setPageSize] = React.useState(30);
    const [rows, setRows] = React.useState([]);

    useEffect(() => {
        axios.get(src)
            .then(function (response) {
            
               setRows(response.data.mTextEntryList);
              
            })
            .catch(function (error) {
                if (error.response) {
                    alert(error.response.data);
                    alert(error.response.status);
                    alert(error.response.headers);
                } else if (error.request) {
                    alert("Error Request: " + error.request);
                    alert('Error: ' + error.message);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    alert('Error: ' + error.message);
                }
            });
    }, []);

    //alert(rows);

    return (
        <div style={{ height: 500, width: '100%' }}>
            <DataGrid
            getRowId={(r) => r.ID}
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

