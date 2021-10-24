import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


import GITextEntryDataTable from './GITextEntryDataTable';

import './AddDialog.css';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(1),
    },
}));


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function TextEntryPanel() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [uomId, setUomId] = React.useState([]);
    const [state, setState] = React.useState({
        length: true,
        diameter: true,
        quantity: true,
        plan: true,
        circumference: true,
        crossSection: true,
        heightDepth: true,
        breadthWidthThickness: true,
        x: true,
        y: true,
        orientationField: true,
        quantity: true,
    });


    const { length, diameter, plan, circumference, crossSection, heightDepth, breadthWidthThickness, x, y, orientationField, quantity } = state;
    const error = [length, diameter, plan, circumference, crossSection, heightDepth, breadthWidthThickness, x, y, orientationField, quantity].filter((v) => v).length !== 2;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const handleSave = () => {
        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Text Entry has been added successfully!
                </Alert>
            </Snackbar>
        );
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div class="add-new-element-main-form">
                <div class="text-entry-main-form">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="serialNo"
                        label="Serial No"
                        type="number"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="areaName"
                        label="Area Name"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="horizontal"
                        label="Horizontal"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="vertical"
                        label="Vertical"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="horizontalWall1"
                        label="Horizontal Wall1"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="horizontalWall2"
                        label="Horizontal Wall2"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="verticalWall1"
                        label="Vertical Wall1"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="verticalWall2"
                        label="Vertical Wall2"
                        style={{ marginLeft: '20px', width: '180px' }}
                    />
                    <div>
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            color="primary"
                            style={{ margin: '10px', float: 'right'}}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            variant="contained"
                            color="primary"
                            style={{ margin: '10px', float: 'right' }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
                <div style={{ marginTop: '20px'}}>
                    <GITextEntryDataTable />
                </div>
            </div>
        </div>
    );
}