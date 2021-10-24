import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { styled } from '@mui/material/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Tooltip from '@mui/material/Tooltip';
//import FileUploadIcon from '@mui/icons-material/FileUpload';
//import FileUploadIcon from '@mui/icons-material/FileUpload';

import GIAdditionalInfoTabs from './GIAdditionalInfoTabPanel';



import './GIUpdateFormContainer.css';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 260,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    formControlSmall: {
        margin: theme.spacing(2),
        minWidth: 120,
    },
}));

const Input = styled('input')({
    display: 'none',
});

export default function GIInputFormContainer() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [taluks, setTaluks] = React.useState([]);
    const [villages, setVillages] = React.useState([]);
    const [dsr, setDSR] = React.useState([]);
    const [structureType, setStructureType] = React.useState('');
    const [ownerName, setOwnerName] = React.useState('');
    const [referenceNumber, setReferenceNumber] = React.useState('');
    const [structureCode, setStructureCode] = React.useState('');

    const [age, setAge] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleChange = (event) => {
        setStructureType(event.target.value);
    };

    //#cee2f0
    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cee2f0', height: '200vh', width: '80%', marginLeft: '120px' }}>
                    <div>
                        <div class="fixed-top-form">
                            <div class="row">
                                <div class="col-1">
                                    <FormControl className={classes.formControl}>
                                        <TextField
                                            required
                                            id="ownerName"
                                            label="Owner Name"
                                            variant="outlined"
                                            value={ownerName}
                                            disabled='ture'
                                            size="small"
                                            style={{ width: '870px', paddingTop: '8px' }}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-1">
                                    <FormControl className={classes.formControl}>
                                        <TextField

                                            id="referenceNumber"
                                            label="Reference (VPC/UKP Number)"
                                            variant="outlined"
                                            size="small"
                                            value={referenceNumber}
                                            disabled="true"
                                            style={{ paddingTop: '8px' }}
                                        />
                                    </FormControl>
                                </div>
                                <div class="col-2">
                                    <FormControl className={classes.formControl}>
                                        <TextField

                                            id="structureCode"
                                            label="Structure Code"
                                            variant="outlined"
                                            size="small"
                                            value={structureCode}
                                            disabled="true"
                                            style={{ paddingTop: '8px' }}
                                        />
                                    </FormControl>
                                </div>
                                <div class="col-3">
                                    <FormControl className={classes.formControl}>
                                        <TextField

                                            id="dsr"
                                            label="DSR Label"
                                            variant="outlined"
                                            size="small"
                                            value={dsr}
                                            disabled="true"
                                            style={{ paddingTop: '8px' }}
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row-small">
                        <div class="col-small">
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
                                Edit General Info
                            </Button>
                        </div>
                        
                        <div class="col-small-1">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    float: 'left',
                                    top: '3px'
                                }}
                                onClick={handleClickOpen}
                            >
                                Open Drawing
                            </Button>
                        </div>
                        <div class="col-small-2">
                            <label htmlFor="upload-document-label">
                                <Input accept="*" id="upload-document-label" multiple type="file" />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    startIcon={/*<FileUploadIcon />*/}
                                    style={{
                                        float: 'left',
                                        top: '3px'
                                    }}
                                >
                                    Upload Document
                                </Button>
                            </label>
                        </div>
                        <div class="col-small">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    float: 'left',
                                    top: '3px'
                                }}
                                onClick={handleClickOpen}
                            >
                                Report - General Info
                            </Button>
                        </div>
                        <div class="col-small-button">
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    float: 'left',
                                    top: '10px'
                                }}
                                onClick={handleClickOpen}
                            >
                                Report - Field Measurement
                            </Button>
                        </div>
                    </div>

                    <div class="row-small-bottom-grid1">
                        <GIAdditionalInfoTabs />
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}