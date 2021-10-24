import * as React from 'react';
import { DataGrid, GridToolbar, useGridSlotComponentProps } from '@material-ui/data-grid';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Snackbar from '@material-ui/core/Snackbar';
import Pagination from '@mui/material/Pagination';

import GIUpdateFormContainer from './GIUpdateFormContainer';
import './GIUpdateFormContainer.css';
import './DataTable.css';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const columns = [
    {
        field: 'SNO',
        headerName: 'Sl No.',
        headerClassName: 'column-header',
        width: 120,
        editable: false,
    },
    {
        field: 'structureCode',
        headerName: 'Structure Code',
        headerClassName: 'column-header',
        width: 300,
        editable: false,
    },
    {
        field: 'dateOfNotification',
        headerName: 'Date of 11(1) Notification',
        headerClassName: 'column-header',
        width: 200,
        editable: false,
    },
    {
        field: 'ownerName',
        headerName: 'Owner Name',
        headerClassName: 'column-header',
        sortable: true,
        width: 300,
    }, {
        field: 'createdOn',
        headerName: 'Created On',
        headerClassName: 'column-header',
        sortable: true,
        width: 180,
    },
];

const rows = [
    {
        "id": 1,
        "SNO": 1,
        "structureCode": "BK/BK_BAD/BK_BAD_1/103/A, 103/B, 103/C, 103/E",
        "dateOfNotification": "22/09/2020",
        "ownerName": "SRISMT 1Mallappa M Ganiger 2Sangappa M Ganiger 3Geeta Etc 4Jagadisha M Ganiger",
        "createdOn": "22/09/2020 04:22 PM"
    },
    {
        "id": 2,
        "SNO": 2,
        "structureCode": "BK/BK_BAD/BK_BAD_1/Test1",
        "dateOfNotification": "15/01/2021",
        "ownerName": "Subbaiah",
        "createdOn": "15/01/2021 11:06 AM"
    },
    {
        "id": 3,
        "SNO": 3,
        "structureCode": "BK/BK_BAG/BK_BAG_1/00002",
        "dateOfNotification": "18/12/2014",
        "ownerName": "sarigamapadanisa",
        "createdOn": "18/12/2020 07:18 PM"
    },
    {
        "id": 4,
        "SNO": 4,
        "structureCode": "BK/BK_BAG/BK_BAG_5/1234",
        "dateOfNotification": "23/07/2020",
        "ownerName": "Subbaiah",
        "createdOn": "23/07/2020 11:14 PM"
    },
    {
        "id": 5,
        "SNO": 5,
        "structureCode": "BK/BK_BIL/BK_BIL_48/1003",
        "dateOfNotification": "30/04/2015",
        "ownerName": "Lakshamappa b Maitri",
        "createdOn": "17/08/2020 04:22 PM"
    },
    {
        "id": 6,
        "SNO": 6,
        "structureCode": "BK/BK_BIL/BK_BIL_48/1013",
        "dateOfNotification": "30/04/2015",
        "ownerName": "RAMAPPA T HALLI",
        "createdOn": "11/08/2020 10:18 AM"
    }
];


function CustomPagination() {
    const { state, apiRef } = useGridSlotComponentProps();
    const classes = useStyles();

    return (
        <Pagination
            className={classes.root}
            color="primary"
            count={state.pagination.pageCount}
            page={state.pagination.page + 1}
            onChange={(event, value) => apiRef.current.setPage(value - 1)}
        />
    );
}

export default function DataTable() {
    const classes = useStyles();
    const [pageSize, setPageSize] = React.useState(20);
    const [open, setOpen] = React.useState(false);

    const handleCellDoubleClick = (params, event) => {
        alert(event + " $$$ " + params.row.structureCode);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    District has been added successfully!
                </Alert>
            </Snackbar>
        );
    }

    return (
        <div>
            <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    rowHeight={30}
                    columns={columns}
                    pageSize={pageSize}
                    Pagination
                    onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[10, 20, 50, 100]}
                    pagination
                    disableSelectionOnClick
                    onCellDoubleClick={handleCellDoubleClick}
                    scrollbarSize={5}
                    components={{
                        Toolbar: GridToolbar,
                        Pagination: CustomPagination,
                    }}
                />
            </div>
            <div>
                <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Update General Information
                            </Typography>
                            <Button autoFocus color="inherit" onClick={handleClose}>
                                save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <GIUpdateFormContainer />
                    </div>
                </Dialog>
            </div>
        </div>
    );
}
