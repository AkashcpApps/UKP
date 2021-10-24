import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import * as Constants from "../utils/Constants";

//import DSRSubLabelDataTabel from '../DSRSubLabelDataTabel';
import DSRSubLabelDataTabel from "../components/DSRSubLabelDataTable";

import "./AddDialog.css";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
  const [mainLabel, setMainLabel] = React.useState([]);
  const [uomId, setUomId] = React.useState([]);
  const [mDSRMainList, setmDSRMainList] = React.useState([]);
  const[DsrMainId,setDsrMainId]=React.useState('');

  React.useEffect(() => {
    axios
      .get(Constants.url + "UKP/rest/endpoints/GetMainDsrByDSRID",{
          params:{
            DSR_ID:'640D7C0B-0D42-4272-8A8B-866BD86EA748'
          }
      })
      .then((res) => {
        setmDSRMainList(res.data.mDSRMainList);
      })
      .catch((err) => {
        alert(err);
      });
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleChange = (event) => {
    setDsrMainId(event.target.value);
  };

  const handleSave = () => {

    let dsr=DsrMainId;
    let code=document.getElementById('code');
    let rate=document.getElementById('rate');
    let description=document.getElementById('description');

    axios.put(Constants.url+'UKP/rest/endpoints/InsertDSRSub',{
        "DsrMainId": dsr,
        "Code": code,
        "Description":description,
        "Rate": rate,
        "DsrMainDescription": "DsrMainDescription",
        "UomID": "D99FF689-7F83-4ACB-9E4D-C3128C79154B",
        "CreatedBy": "D99FF689-7F83-4ACB-9E4D-C3128C79154B",
        "ModifiedBy": "D99FF689-7F83-4ACB-9E4D-C3128C79154B",
        "DsrOrder": 1
    
    })
    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Text Entry has been added successfully!
        </Alert>
      </Snackbar>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div class="add-new-element-main-form">
        <div class="text-entry-main-form">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="main-label-select-label"
              style={{ marginLeft: "20px" }}
            >
              Main Label
            </InputLabel>
            <Select
              autoFocus
              labelId="main-label-select-label"
              id="main-label-select"
              value={mainLabel}
              label="Main Label"
              onChange={handleChange}
              style={{ marginLeft: "20px", marginTop: "20px", width: "250px" }}>
              {mDSRMainList.map((test, key) => (
                <MenuItem key={key} value={test.DsrID}>
                  {test.Description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            id="code"
            label="Code"
            style={{ marginLeft: "20px", width: "140px" }}
          />
          <TextField
            margin="dense"
            id="rate"
            label="Rate"
            type="number"
            style={{ marginLeft: "20px", width: "140px" }}
          />
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="uom-id-select-label" style={{ marginLeft: "20px" }}>
              UOM Id
            </InputLabel>
            <Select
              labelId="uom-id-select-label"
              id="uom-id-select"
              value={uomId}
              label="Main Label"
              onChange={handleChange}
              style={{ marginLeft: "20px", marginTop: "20px", width: "150px" }}
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
            margin="dense"
            id="description"
            label="Description"
            style={{ marginLeft: "20px", width: "90%", height: "50px" }}
          />

          <div>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              style={{ margin: "10px", float: "right" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              style={{ margin: "10px", float: "right" }}
            >
              Save
            </Button>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <DSRSubLabelDataTabel />
        </div>
      </div>
    </div>
  );
}
