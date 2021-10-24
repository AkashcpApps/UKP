import React from 'react';
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import * as Constants from '../utils/Constants';


import './AddDialog.css';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddNewDistrictDialog() {
    const [open, setOpen] = React.useState(false);
    const [districts, setDistricts] = React.useState([]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setDistricts(event.target.value);
    };

    const handleSave = () => {

        return (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Village has been added successfully!
                </Alert>
            </Snackbar>
        );
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                style={{
                    float: 'left',
                    top: '3px'
                }}
                onClick={handleClickOpen}
            >
                New Village
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title" className="dialog-title">Create a New Village</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details of a new village to be created.
                    </DialogContentText>
                    <InputLabel id="district-select-label" style={{ paddingTop: '10px' }}>District</InputLabel>
                        <Select
                            labelId="district-select-label"
                            id="districts"
                            value={districts}
                        onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                    <InputLabel id="taluk-select-label" style={{ paddingTop: '10px' }}>Taluk</InputLabel>
                        <Select
                            labelId="taluk-select-label"
                            id="taluks"
                            value={districts}
                        onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="villageCode"
                        label="Village Code"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="villageName"
                        label="Village Name"
                        fullWidth
                    />
                         <TextField
                        margin="dense"
                        id="DistrictID"
                        label="DistrictID"
                        fullWidth
                    />
                     <TextField
                        margin="dense"
                        id="DistrictCode"
                        label="DistrictCode"
                        fullWidth
                    />
                     <TextField
                        margin="dense"
                        id="TalukID"
                        label="TalukID"
                        fullWidth
                    />
                     <TextField
                        margin="dense"
                        id="TalukCode"
                        label="TalukCode"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSave}
                        variant="contained"
                        color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}