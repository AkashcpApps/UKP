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
import Tooltip from "@mui/material/Tooltip";
import * as Constants from "../utils/Constants";
import GIElementDataTable from "./GIElementDataTable";
import "./GIAdditionalInfoTabPanel.css";
const axios = require("axios");

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

export default function FieldMeasurementsPanel() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [labelType, setLabelType] = React.useState([]);
  const [mainLabel, setMainLabel] = React.useState([]);
  const [mainLabel1Value, setMainLabel1Value] = React.useState("");
  const [formulaValue, setFormulaValue] = React.useState('');

  const [subLabel, setSubLabel] = React.useState([]);
  const [orderType, setOrderType] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [orientation, setOrientation] = React.useState("");
  const [inputDisabled, setInputDisabled] = React.useState(false);
  const [structureType, setStructureType] = React.useState([]);
  const [sublabel1value, setsublabel1value] = React.useState('');
  const [descriptionvalue, setdescriptionvalue] = React.useState('');

  // Orientation.map((value,key)=>{
  //   console.log('------------>'+value);
  // })

  const [structureTypeLabelPrefix, setStructureTypeLabelPrefix] =
    React.useState("");
  const [state, setState] = React.useState({
    lengthField: false,
    breadthField: false,
    heightField: false,
    circumferenceField: false,
    createCopy: false,
    orientationField: false,
    x_axisField: false,
    y_axisField: false,
  });

  const {
    lengthField,
    breadthField,
    heightField,
    circumferenceField,
    createCopy,
    orientationField,
    x_axisField,
    y_axisField,
  } = state;
  const error =
    [
      lengthField,
      breadthField,
      heightField,
      circumferenceField,
      createCopy,
      orientationField,
      x_axisField,
      y_axisField,
    ].filter((v) => v).length !== 2;

  const handleClickOpen = () => {
    setOpen(true);
  };
  //   const handleChangemainlableValue = (event) => {
  //     setmainlableValue(event.target.value);
  //   }; /.

  const handleChange = (event) => {
    enableDisableFields(event.target.value);
  };
  const [strtypeValue, setStrtypeValue] = React.useState("");
  const [SLNUMBER, setSLNUMBER] = React.useState('');
  const slNumber = (event) => {
    // alert(event.target.value);
    //strtypeValue
    setSLNUMBER(event.target.value);
    setMainLabel1Value('')
    setsublabel1value('');
    setMainLabel1Value(strtypeValue + "" + event.target.value);
    setsublabel1value(strtypeValue + "" + event.target.value);
  };
  const handleChangeStrType = (event) => {
    setStrtypeValue(event.target.value);
    enableDisableFields(event.target.value);

    //alert(event.target.value+'------->');

    //if(event.target.value===Code)
    //setFormulaValue

    structureType.map((value, key) => {
      if (event.target.value == value.Code) {
        //setStrtypeValue(value.Name);
        //alert(value.Name);
        //  alert(value.VolumeFormula);
        setFormulaValue(value.VolumeFormula);
        setdescriptionvalue(value.Description);
      }
    })
  };
  const [mainlabelvalue, setmainlabelvalue] = React.useState("");
  const [mainLabelvalue1, setmainLabelvalue1] = React.useState("");

  const handleChangeOrientation = (event) => {
    setOrientation(event.target.value);
    //alert(event.target.value);
  };

  const handleMainlabel = (event) => {
    setmainLabelvalue1(event.target.value);
    alert(event.target.value);
    // mainLabel.map((value, key) => {
    //   if (event.target.value == value.ID) {
    //    setmainLabelvalue1(value.Description);
    //     alert(mainLabelvalue1);
    //   }
    // });

    // let mainlable = document.getElementById("main-label-select").value;
    //alert("alert "+mainlable);

    axios(Constants.url + "UKP/rest/endpoints/GetSubDsrByDSRMainID", {
      params: {
        DSRMain_ID: event.target.value,
      },
    })
      .then((res) => {
        setSubLabel(res.data.mDSRSubList);
      })
      .catch((err) => {
        alert("Sublabel Error " + err);
      });
  };
  const handleChangeLabelType = (event) => {
    setMainLabel([]);
    setLabelType(event.target.value);
    axios(Constants.url + "UKP/rest/endpoints/GetMainDsrByDSRNonDSR", {
      params: {
        Label: event.target.value,
      },
    })
      .then((res) => {
        setMainLabel(res.data.mDSRMainList);
      })
      .catch((err) => {
        alert("Error");
      });
  };

  React.useEffect(() => {
    axios
      .get(Constants.url + "UKP/rest/endpoints/GetStrElement")
      .then((res) => {
        setStructureType(res.data.mStrElementList);
      })
      .catch((err) => {
        alert("GetStrType " + err);
      });
  }, []);

  const enableDisableFields = (labelPrefix) => {
    alert(labelPrefix);
    switch (labelPrefix) {
      case "B":
      case "BA":
      case "C":
      case "CJ":
      case "CU":
      case "CW":
      case "D":
      case "EF":
      case "ES":
      case "F":
      case "FB":
      case "J":
      case "LI":
      case "NP":
      case "OV":
      case "RT":
      case "RV":
      case "SH":
      case "SI":
      case "V":
      case "W":
        setState({
          lengthField: true,
          breadthField: true,
          heightField: true,
          circumferenceField: false,
          createCopy: false,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      case "BC":
      case "CC":
      case "CE":
      case "CF":
      case "RC":
        setState({
          lengthField: true,
          breadthField: false,
          heightField: false,
          circumferenceField: true,
          createCopy: false,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      case "CB":
      case "CH":
      case "CK":
      case "K":
      case "WL":
        setState({
          lengthField: true,
          breadthField: true,
          heightField: true,
          circumferenceField: false,
          createCopy: false,
          orientationField: true,
          x_axisField: true,
          y_axisField: true,
        });
        break;
      case "FL":
      case "LA":
      case "LT":
      case "OA":
      case "OT":
      case "PA":
      case "PO":
      case "RA":
        setState({
          lengthField: true,
          breadthField: false,
          heightField: true,
          circumferenceField: false,
          createCopy: false,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      case "OM":
      case "RM":
        setState({
          lengthField: true,
          breadthField: false,
          heightField: false,
          circumferenceField: false,
          createCopy: false,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      case "E":
        setState({
          lengthField: true,
          breadthField: true,
          heightField: true,
          circumferenceField: false,
          createCopy: true,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      case "PL":
        setState({
          lengthField: true,
          breadthField: false,
          heightField: true,
          circumferenceField: false,
          createCopy: true,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
      default:
        setState({
          lengthField: false,
          breadthField: false,
          heightField: false,
          circumferenceField: false,
          createCopy: false,
          orientationField: false,
          x_axisField: false,
          y_axisField: false,
        });
        break;
    }
  };

  const [copy, setCopy] = React.useState(false);

  const handleChangecopy = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const checked = event.target.checked;
    setCopy(checked);




    // to get the checked value
    const checkedValue = event.target.value;

    // to get the checked name
    const checkedName = event.target.name;
    // setRoleID(checkedName);
    //alert(checked + " " + checkedValue + " " + checkedName);
  };

  const handleSave = () => {
    //alert("Field Save");
    let lable = document.getElementById("label-type-select");
    let mainlable = document.getElementById("main-label-select");
    let sublable = document.getElementById("sub-label-selec");
    let description = document.getElementById("description");
    let serialNo = document.getElementById("serialNo");
    let formula = document.getElementById("formula");
    let createCopy = document.getElementById("createCopy");
    let itemDescription = document.getElementById("itemDescription");
    let mainLabel = document.getElementById("mainLabel");
    let subLabel = document.getElementById("subLabel");
    let structure_element_orientation_select_label = document.getElementById(
      "structure-element-orientation-select-label"
    );
    let xAxis = document.getElementById("xAxis");
    let yAxis = document.getElementById("yAxis");
    let length = document.getElementById("length");
    let breadth = document.getElementById("breadth");
    let height = document.getElementById("height");
    let circumference = document.getElementById("circumference");
    let quantity = document.getElementById("quantity");


    if (copy == true) {
      if (mainLabelvalue1 == 'E') {
        axios
          .post(Constants.hostname + "UKP/rest/endpoints/InsertFieldMeaurements", {
            "GeneralInfoID:": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "StructureElementID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "SerialNo": parseInt(serialNo),
            "ItemDescription": "EXCAVATION",
            " MainLabel": 'E' + SLNUMBER,
            " SubLabel": 'E' + SLNUMBER,
            "O": orientation,
            "X": xAxis,
            "Y": parseFloat(yAxis),
            "L": length,
            "B": breadth,
            "H": parseFloat(height),
            "C": parseFloat(circumference),
            "Q": quantity,
            "D": 14.4,
            "DsrSubID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "UomID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "UomCode": "code",
            "TotalArea": 12.35,
            "TotalVolume": 14.2,
            "DSRArea": 13.2,
            "DSRVolume": 18.2,
            "TotalAreaCalculated": 32.2,
            "TotalVolumeCalculated": 18.2,
            "CopyFromID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "Inactive": 0,
            "CreatedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "ModifiedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
            "DsrOrder": 1,
          })
          .then((res) => {
            if (res.data.statusCode == 200 && res.data.status == true) {
              axios.post(Constants.hostname + "UKP/rest/endpoints/InsertFieldMeaurements", {
                "GeneralInfoID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "StructureElementID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "SerialNo": parseInt(serialNo),
                "ItemDescription": "FOUNDATION",
                "MainLabel": 'F' + SLNUMBER,
                "SubLabel": 'F' + SLNUMBER,
                "O": orientation,
                "X": xAxis,
                "Y": parseFloat(yAxis),
                "L": length,
                "B": breadth,
                "H": parseFloat(height),
                "C": parseFloat(circumference),
                "Q": quantity,
                "D": 14.4,
                "DsrSubID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "UomID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "UomCode": "code",
                "TotalArea": 12.35,
                "TotalVolume": 14.2,
                "DSRArea": 13.2,
                "DSRVolume": 18.2,
                "TotalAreaCalculated": 32.2,
                "TotalVolumeCalculated": 18.2,
                "CopyFromID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "Inactive": 0,
                "CreatedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "ModifiedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
                "DsrOrder": 1,
              }).then(res => {
                if (res.data.statusCode == 200 && res.data.status == true) {
                  alert('Success')
                }
              }).catch(err => {
                alert('Error ' + err);
              })

            }
          })
          .catch((err) => {
            alert(err);
          });

      }



    } else if (mainLabelvalue1 == 'PL') {
      axios
        .post(Constants.hostname + "UKP/rest/endpoints/InsertFieldMeaurements", {
          "GeneralInfoID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "StructureElementID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "SerialNo": parseInt(serialNo),
          "ItemDescription": "PLASTER ING",
          "MainLabel": 'PL' + SLNUMBER,
          "SubLabel": 'PL' + SLNUMBER,
          "O": orientation,
          "X": xAxis,
          "Y": parseFloat(yAxis),
          "L": length,
          "B": breadth,
          "H": parseFloat(height),
          "C": parseFloat(circumference),
          "Q": quantity,
          "D": 14.4,
          "DsrSubID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "UomID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "UomCode": "code",
          "TotalArea": 12.35,
          "TotalVolume": 14.2,
          "DSRArea": 13.2,
          "DSRVolume": 18.2,
          "TotalAreaCalculated": 32.2,
          "TotalVolumeCalculated": 18.2,
          "CopyFromID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "Inactive": 0,
          "CreatedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "ModifiedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "DsrOrder": 1,
        })
        .then((res) => {
          if (res.data.statusCode == 200 && res.data.status == true) {
            axios.post(Constants.hostname + "UKP/rest/endpoints/InsertFieldMeaurements", {
              "GeneralInfoID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "StructureElementID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "SerialNo": parseInt(serialNo),
              "ItemDescription": "PAINTING",
              "MainLabel": 'PA' + SLNUMBER,
              "SubLabel": 'PA' + SLNUMBER,
              "O": orientation,
              "X": xAxis,
              "Y": parseFloat(yAxis),
              "L": length,
              "B": breadth,
              "H": parseFloat(height),
              "C": parseFloat(circumference),
              "Q": quantity,
              "D": 14.4,
              "DsrSubID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "UomID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "UomCode": "code",
              "TotalArea": 12.35,
              "TotalVolume": 14.2,
              "DSRArea": 13.2,
              "DSRVolume": 18.2,
              "TotalAreaCalculated": 32.2,
              "TotalVolumeCalculated": 18.2,
              "CopyFromID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "Inactive": 0,
              "CreatedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "ModifiedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
              "DsrOrder": 1,
            }).then(res => {
              if (res.data.statusCode == 200 && res.data.status == true) {
                alert('Success')
              }
            }).catch(err => {
              alert('Error ' + err);
            })

          }
        })
        .catch((err) => {
          alert(err);
        });

    }

    else {
      axios
        .post(Constants.hostname + "UKP/rest/endpoints/InsertFieldMeaurements", {
          "GeneralInfoID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "StructureElementID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "SerialNo": parseInt(serialNo),
          "ItemDescription": itemDescription,
          "MainLabel": mainLabel,
          "SubLabel": subLabel,
          "O": orientation,
          "X": xAxis,
          "Y": parseFloat(yAxis),
          "L": length,
          "B": breadth,
          "H": parseFloat(height),
          "C": parseFloat(circumference),
          "Q": quantity,
          "D": 14.4,
          "DsrSubID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "UomID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "UomCode": "code",
          "TotalArea": 12.35,
          "TotalVolume": 14.2,
          "DSRArea": 13.2,
          "DSRVolume": 18.2,
          "TotalAreaCalculated": 32.2,
          "TotalVolumeCalculated": 18.2,
          "CopyFromID": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "Inactive": 0,
          "CreatedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "ModifiedBy": "BCDE82B6-65B9-4D79-AF4C-C9F3D14ABB53",
          "DsrOrder": 1,
        })
        .then((res) => {
          if (res.data.statusCode == 200 && res.data.status == true) {
            alert("Success");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }

    return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          New Element has been added successfully!
        </Alert>
      </Snackbar>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => { };
  const [sublabelvalue, setsublabelvalue] = React.useState("");

  const handleChangesublabel = (event) => {
    setsublabelvalue(event.target.value);
    subLabel.map((value, key) => {
      if (value.ID == event.target.value) {
        setDescription(value.Description);
        setOrderType(value.DsrOrder);
      }
    });
  };

  return (
    <div>
      <div class="add-new-element-main-form">
        <div class="add-new-element-dsr-label-form">
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="label-type-select-label"
              style={{ marginLeft: "20px" }}
            >
              Label Type
            </InputLabel>
            <Select
              labelId="label-type-select-label"
              id="label-type-select"
              value={labelType}
              label="Label Type"
              onChange={handleChangeLabelType}
              style={{ marginLeft: "20px", marginTop: "20px", width: "120px" }}
            >
              <MenuItem value="DSR">Dsr</MenuItem>
              <MenuItem value="NONDSR">Non Dsr</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="main-label-select-label"
              style={{ marginLeft: "20px" }}
            >
              Main Label
            </InputLabel>
            <Select
              labelId="main-label-select-label"
              id="main-label-select"
              value={mainLabelvalue1}
              label="Main Label"
              onChange={handleMainlabel}
              style={{ marginLeft: "20px", marginTop: "20px", width: "250px" }}
            >
              {mainLabel.map((test, key) => (
                <MenuItem key={key} value={test.ID}>
                  {test.Description}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel
              id="sub-label-select-label"
              style={{ marginLeft: "20px" }}
            >
              Sub Label
            </InputLabel>
            <Select
              labelId="sub-label-select-label"
              id="sub-label-select"
              label="Sub Label"
              value={sublabelvalue}
              onChange={handleChangesublabel}
              style={{ marginLeft: "20px", marginTop: "20px", width: "150px" }}>
              {subLabel.map((test, key) => (
                <MenuItem key={key} value={test.ID}>
                  {test.Code}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="order"
            value={orderType}
            label="Order"
            type="number"
            style={{ marginLeft: "20px", width: "160px" }}
          />
          <Tooltip title={description} placement="bottom">
            <TextField
              autoFocus
              margin="dense"
              id="description"
              label="Description"
              value={description}
              style={{ marginLeft: "20px", width: "90%", height: "50px" }}
              InputProps={{
                readOnly: true,
              }}
            />
          </Tooltip>
        </div>
        <div class="add-new-element-entry-input-form">
          <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                id="structure-element-select-label"
                style={{ marginLeft: "20px" }}
              >
                Structure Type
              </InputLabel>
              <Select
                labelId="structure-element-select-label"
                id="structure-element-select"
                value={strtypeValue}
                label="Structure Type"
                onChange={handleChangeStrType}
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  width: "300px",
                }}
              >
                {structureType.map((test, key) => (
                  <MenuItem key={key} value={test.LabelPrefix}>
                    {test.LabelPrefix + " - " + test.Name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="serialNo"
              onChange={slNumber}
              label="Serial No"
              type="number"
              style={{ marginLeft: "20px", width: "120px" }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="formula"
              value={formulaValue}
              label="Formula"
              style={{ marginLeft: "20px", width: "180px" }}
              InputProps={{
                readOnly: true,
              }}
            />
            <FormControlLabel
              id="createCopy"
              style={{ marginTop: "20px", marginLeft: "10px", width: "140px" }}
              disabled={!state.createCopy}
              onChange={handleChangecopy}
              control={<Checkbox />}
              label="Create Copy"
            />
            <TextField
              autoFocus
              margin="dense"
              value={descriptionvalue}
              id="itemDescription"
              label="Item Description"
              style={{ marginLeft: "20px", width: "300px" }}
            />
            <TextField
              autoFocus
              margin="dense"
              id="mainLabel"
              value={mainLabel1Value}
              label="Main Label"
              style={{ marginLeft: "20px", width: "200px" }}
            />
            <TextField
              autoFocus
              margin="dense"
              value={sublabel1value}
              id="subLabel"
              label="Sub Label"
              style={{ marginLeft: "20px", width: "200px" }}
            />

            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel
                id="structure-element-orientation-select-label"
                style={{ marginLeft: "20px" }}>
                Orientation
              </InputLabel>
              <Select
                labelId="structure-element-orientation-select-label"
                id="structure-element-orientation-select"
                value={orientation}
                label="Orientation"
                onChange={handleChangeOrientation}
                style={{
                  marginLeft: "20px",
                  marginTop: "20px",
                  width: "180px",
                }}
                disabled={!state.orientationField}>
                {Constants.OrientationArray.map((test, key) => (
                  <MenuItem key={key} value={test}>
                    {test}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              autoFocus
              margin="dense"
              id="xAxis"
              label="X-Axis"
              style={{ marginLeft: "20px", width: "120px" }}
              disabled={!state.x_axisField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="yAxis"
              label="Y-Axis"
              style={{ marginLeft: "20px", width: "120px" }}
              disabled={!state.y_axisField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="length"
              label="Length"
              style={{ marginLeft: "20px", width: "120px" }}
              disabled={!state.lengthField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="breadth"
              label="Breadth"
              style={{ marginLeft: "20px", width: "120px" }}
              disabled={!state.breadthField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="height"
              label="Height"
              style={{ marginLeft: "20px", width: "180px" }}
              disabled={!state.heightField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="circumference"
              label="Circumference"
              type="number"
              style={{ marginLeft: "20px", width: "120px" }}
              disabled={!state.circumferenceField}
            />
            <TextField
              autoFocus
              margin="dense"
              id="quantity"
              label="Quantity"
              type="number"
              style={{ marginLeft: "20px", width: "120px" }}
            />
          </div>
          <div style={{ margin: "10px", padding: "10px" }}>
            <Button
              onClick={handleClose}
              variant="contained"
              color="primary"
              style={{ float: "right", margin: "10px" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              variant="contained"
              color="primary"
              style={{ float: "right", margin: "10px" }}
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
