import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './GIInputFormContainer.css';
import { StructureType } from '../webpages/MasterData';

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

export default function GIInputFormContainer() {
    const classes = useStyles();
    const [districts, setDistricts] = React.useState([]);
    const [taluks, setTaluks] = React.useState([]);
    const [villages, setVillages] = React.useState([]);
    const [dsr, setDSR] = React.useState([]);
    const [structureType, setStructureType] = React.useState('');

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setStructureType(event.target.value);
    };


    return (
        <React.Fragment>
            <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cee2f0', height: '110vh', width: '80%', marginLeft: '120px' }}>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>                            
                        <InputLabel id="district-select-label">District</InputLabel>
                        <Select
                                    labelId="district-select-label"
                            id="districts"
                                    value={districts}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            
                            
                        </FormControl>
                        </div>
                        <div class="col-2">
                        <FormControl className={classes.formControl}>
                            <InputLabel id="taluk-select-label">Taluk</InputLabel>
                            <Select
                                    labelId="taluk-select-label"
                                id="taluks"
                                    value={taluks}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                        </div>
                        <div class="col-3">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="village-select-label">Village</InputLabel>
                                <Select
                                    labelId="village-select-label"
                                    id="villages"
                                    value={villages}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="referenceNumber"
                                    label="Reference (VPC/UKP Number)"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '7px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-2">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="don-input-label"></InputLabel>
                                <TextField
                                    id="dateOfNotification"
                                    label="Date of 11(1) Notification"
                                    type="date"
                                    defaultValue={new Date()}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-3">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="dsr-select-label">DSR Label</InputLabel>
                                <Select
                                    labelId="dsr-select-label"
                                    id="dsr"
                                    value={dsr}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="ownerName"
                                    label="Owner Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ width: '880px', paddingTop: '5px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="ageOfStructure"
                                    label="Age of Structure"
                                    type="number"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-2">
                            <FormControl className={classes.formControl}>
                                <InputLabel id="structure-type-select-label">Structure Type</InputLabel>
                                <Select
                                    labelId="structure-type-select-label"
                                    id="structureType"
                                    value={structureType}
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={1}>Type-1</MenuItem>
                                    <MenuItem value={2}>Type-2</MenuItem>
                                    <MenuItem value={3}>Type-3</MenuItem>
                                    <MenuItem value={4}>Type-4</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div class="col-3">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="structureCode"
                                    label="Structure Code"
                                    variant="outlined"
                                    size="small"
                                    disabled="true"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="plinthArea"
                                    label="Plinth Area"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-2">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="openArea"
                                    label="Open Area"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-3">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="totalArea"
                                    label="Total Area"
                                    variant="outlined"
                                    size="small"
                                    disabled="true"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-1">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="firstFloorArea"
                                    label="First Floor Area"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-2">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="secondFloorArea"
                                    label="Second Floor Area"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-3">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="totalBuiltUpArea"
                                    label="Total Built Up Area"
                                    variant="outlined"
                                    size="small"
                                    disabled="true"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row-small">
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="siteLocationNorth"
                                    label="Site Location North"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="siteLocationSouth"
                                    label="Site Location South"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="siteLocationEast"
                                    label="Site Location East"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="siteLocationWest"
                                    label="Site Location West"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row-small">
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="siteEngineer"
                                    label="Site Engineer"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="designation"
                                    label="Designation"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="witnessName"
                                    label="Witness Name"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                        <div class="col-small">
                            <FormControl className={classes.formControlSmall}>
                                <TextField
                                    required
                                    id="witnessSignature"
                                    label="Witness Signature"
                                    variant="outlined"
                                    size="small"
                                    style={{ paddingTop: '8px' }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div class="row-small">
                        <div class="col-remarks">
                            <FormControl className={classes.formControl}>
                                <TextField
                                    required
                                    id="remarks"
                                    label="Remarks on Structure"
                                    size="small"
                                    style={{ width: '880px'}}
                                />
                            </FormControl>
                        </div>
                    </div>
                </Typography>
            </Container>
        </React.Fragment>
    );
}