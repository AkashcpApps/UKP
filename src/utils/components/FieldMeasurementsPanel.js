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
import Tooltip from '@mui/material/Tooltip';


import GIElementDataTable from './GIElementDataTable';
import './GIAdditionalInfoTabPanel.css';

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

export default function FieldMeasurementsPanel() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [labelType, setLabelType] = React.useState([]);
    const [mainLabel, setMainLabel] = React.useState([]);
    const [subLabel, setSubLabel] = React.useState([]);
    const [orderType, setOrderType] = React.useState('');
    const [description, setDescription] = React.useState('');
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
                    New Element has been added successfully!
                </Alert>
            </Snackbar>
        );
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleAdd = () => {

    }

    return (
        <div>
            <div class="add-new-element-main-form">
                <div class="add-new-element-dsr-label-form">
                    <FormControl sx={{ m: 1, minWidth: 120 }} >
                        <InputLabel id="label-type-select-label" style={{ marginLeft: '20px' }}>Label Type</InputLabel>
                        <Select
                            labelId="label-type-select-label"
                            id="label-type-select"
                            value={labelType}
                            label="Label Type"
                            onChange={handleChange}
                            style={{ marginLeft: '20px', marginTop: '20px', width: '120px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="main-label-select-label" style={{ marginLeft: '20px' }}>Main Label</InputLabel>
                        <Select
                            labelId="main-label-select-label"
                            id="main-label-select"
                            value={mainLabel}
                            label="Main Label"
                            onChange={handleChange}
                            style={{ marginLeft: '20px', marginTop: '20px', width: '250px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="sub-label-select-label" style={{ marginLeft: '20px' }}>Sub Label</InputLabel>
                        <Select
                            labelId="sub-label-select-label"
                            id="sub-label-select"
                            value={subLabel}
                            label="Sub Label"
                            onChange={handleChange}
                            style={{ marginLeft: '20px', marginTop: '20px', width: '150px' }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="order"
                        label="Order"
                        type="number"
                        style={{ marginLeft: '20px', width: '160px' }}
                    />
                    <Tooltip title={description} placement="bottom">
                        <TextField
                            autoFocus
                            margin="dense"
                            id="description"
                            label="Description"
                            value={description}
                            style={{ marginLeft: '20px', width: '90%', height: '50px' }}
                            disabled
                        />
                    </Tooltip>
                </div>
                <div class="add-new-element-entry-input-form">
                    <div>
                        <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="structure-element-select-label" style={{ marginLeft: '20px' }}>Label Type</InputLabel>
                            <Select
                                labelId="structure-element-select-label"
                                id="structure-element-select"
                                value={labelType}
                                label="Label Type"
                                onChange={handleChange}
                                style={{ marginLeft: '20px', marginTop: '20px', width: '300px' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="serialNo"
                            label="Serial No"
                            type="number"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="formula"
                            label="Formula"
                            style={{ marginLeft: '20px', width: '180px' }}
                            disabled
                        />
                        <FormControlLabel
                            id="createCopy"
                            style={{ marginTop: '20px', marginLeft: '10px', width: '140px'}}
                            disabled
                            control={<Checkbox />} label="Create Copy" />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="itemDescription"
                            label="Item Description"
                            style={{ marginLeft: '20px', width: '300px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="mainLabel"
                            label="Main Label"
                            style={{ marginLeft: '20px', width: '200px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="subLabel"
                            label="Sub Label"
                            style={{ marginLeft: '20px', width: '200px' }}
                        />

                        <FormControl sx={{ m: 1, minWidth: 120 }} >
                            <InputLabel id="structure-element-orientation-select-label" style={{ marginLeft: '20px' }}>Orientation</InputLabel>
                            <Select
                                labelId="structure-element-orientation-select-label"
                                id="structure-element-orientation-select"
                                value={labelType}
                                label="Label Type"
                                onChange={handleChange}
                                style={{ marginLeft: '20px', marginTop: '20px', width: '180px' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="xAxis"
                            label="X-Axis"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="yAxis"
                            label="Y-Axis"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="length"
                            label="Length"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="breadth"
                            label="Breadth"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="height"
                            label="Height"
                            style={{ marginLeft: '20px', width: '180px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="circumference"
                            label="Circumference"
                            type="number"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="quantity"
                            label="Quantity"
                            type="number"
                            style={{ marginLeft: '20px', width: '120px' }}
                        />
                    </div>
                    <div style={{ margin: '10px', padding: '10px'}}>
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            color="primary"
                            style={{ float: 'right', margin: '10px'}}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSave}
                            variant="contained"
                            color="primary"
                            style={{ float: 'right', margin: '10px' }}
                        >
                            Save
                        </Button>
                    </div>
                </div>
                <div>
                    <GIElementDataTable />
                </div>
            </div>
        </div>
    );
}