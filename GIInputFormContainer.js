import React, { forwardRef, useRef, useImperativeHandle } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./GIInputFormContainer.css";
import { StructureType } from "../webpages/MasterData";
import * as Constant from "../utils/Constants";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import ContentDeleteSweep from "material-ui/svg-icons/content/delete-sweep";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
      },
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 260,
  },
  selectEmpty: {
    marginTop: theme.spacing(1),
  },
  formControlSmall: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

function Options({ options }) {
  return options.map((option) => (
    <option key={option.ID} value={option.Name}>
      {option.Name}
    </option>
  ));
}

export default function GIInputFormContainer(props) {
  const classes = useStyles();

  const [villages, setVillages] = React.useState([]);
  const [strtype, setstrType] = React.useState([]);

  const [structureType, setStructureType] = React.useState("");

  const [districts, setDistricts] = React.useState([]);
  const [districtValue, setdistrictValue] = React.useState("");

  const [talukenable, settalukenable] = React.useState(true);

  const [taluks, setTaluks] = React.useState([]);
  const [talukValue, settalukValue] = React.useState("");

  const [villageenable, setvillageenable] = React.useState(true);
  const [villageValue, setvillageValue] = React.useState("");

  const [age, setAge] = React.useState("");

  const [refNumber, setrefNumber] = React.useState("");
  const [date, setdate] = React.useState("");
  const [dsr, setDSR] = React.useState([]);
  const [ownerName, setownerName] = React.useState("");
  const [ageOfStructure, setageOfStructure] = React.useState("");
  const [structureCode, setstructureCode] = React.useState("");

  const [plinthArea, setplinthArea] = React.useState("");

  const [openArea, setopenArea] = React.useState("");

  const [totalArea, settotalArea] = React.useState("");
  const [firstFloorArea, setfirstFloorArea] = React.useState("");
  const [secondFloorArea, setsecondFloorArea] = React.useState("");
  const [totalBuiltUpArea, settotalBuiltUpArea] = React.useState("");

  const [siteLocationNorth, setsiteLocationNorth] = React.useState("");
  const [siteLocationSouth, setsiteLocationSouth] = React.useState("");
  const [siteLocationEast, setsiteLocationEast] = React.useState("");
  const [siteLocationWest, setsiteLocationWest] = React.useState("");
  const [siteEngineer, setsiteEngineer] = React.useState("");
  const [designation, setdesignation] = React.useState("");
  const [witnessName, setwitnessName] = React.useState("");
  const [witnessSignature, setwitnessSignature] = React.useState("");
  const [remarks, setremarks] = React.useState("");
  const [structuretypeValue, setstructuretypeValue] = React.useState("");

  React.useEffect(() => {
    //alert("saveddddddddddddddddddd");
    let ownerNames = document.getElementById("ownerName").value;
    let witnessSignatures = document.getElementById("witnessSignature").value;
    if (districtValue != null && districtValue != "" && witnessSignatures != null && witnessSignatures != "") {
      let refNumber = document.getElementById("referenceNumber").value;
      let dates = document.getElementById("dateOfNotification").value;
      let dsrs = document.getElementById("dsrvalues").value;
    
      let ageOfStructures = document.getElementById("ageOfStructure").value;
      let setStructureTypes = document.getElementById("structureType").value;

      let structureCodes=  document.getElementById("structureCode").value;

      let totalBuiltUpAreas = document.getElementById("totalBuiltUpArea").value;

      let siteEngineers = document.getElementById("siteEngineer").value;
      let designations = document.getElementById("designation").value;
      let witnessNames = document.getElementById("witnessName").value;
 
      let remarkss = document.getElementById("remarks").value;
      let siteLocationNorths = document.getElementById("siteLocationNorth").value;
      let siteLocationSouths =document.getElementById("siteLocationSouth").value;
      let siteLocationEasts = document.getElementById("siteLocationEast").value;
      let siteLocationWests = document.getElementById("siteLocationWest").value;

      let plinthAreas = document.getElementById("plinthArea").value;
      let openAreas = document.getElementById("openArea").value;
      let totalAreas = document.getElementById("totalArea").value;
      let firstFloorAreas = document.getElementById("firstFloorArea").value;
      let secondFloorAreas = document.getElementById("secondFloorArea").value;

    // alert(refNumber+' dates'+dates+' ownerNames'+ownerNames+' witnessSignatures'+witnessSignatures+" dsrs "+dsrValue+' '+ageOfStructures+' setStructureTypes'+setStructureTypes+' structureCodes'+structureCodes+' structureCodes'+structureCodes+" totalBuiltUpAreas"+totalBuiltUpAreas)

      axios.post(Constant.url+'UKP/rest/endpoints/InsertGeneralInfo', {
        Reference: refNumber,
          DistrictID: districtIDValue,
          DistrictCode: districtCodeValue,
          TalukID: talukIDValue,
          TalukCode: talukCodeValue,
          VillageID: villageIDValue,
          VillageCode: villageCodeValue,
          DateOfNotification: dates,
          DsrID:dsrCode,
          StructureCode: structureCode,
          OwnerName: ownerNames,
          PlinthArea: parseFloat(plinthAreas),
          OpenArea: parseFloat(openAreas),
          TotalArea: parseFloat(totalAreas),
          RemarksOnStructure: remarkss,
          AgeOfStructure: parseInt(ageOfStructures),
          StructureTypeID: "62173014-ec01-4e51-88d7-e6e2a6cb4dd0",
          StructureTypeCode: setStructureTypes,
          StructureDirection: "sdfdf",
          FirstFloorArea: parseFloat(firstFloorAreas),
          SecondFloorArea: parseFloat(secondFloorAreas),
          TotalBuiltUpArea: parseFloat(totalBuiltUpAreas),
          SiteLocationN: siteLocationNorths,
          SiteLocationS: siteLocationSouths,
          SiteLocationE: siteLocationEasts,
          SiteLocationW: siteLocationWests,
          Surveyor: siteEngineers,
          SurveyorDesignation: designations,
          SurveyOffice: "surveyoffcie",
          SurveyLocation: "surveylocation",
          WitnessName: witnessNames,
          WitnessSignature: witnessSignatures,
          TotalAmount: 56.322,
          Depreciation: 78.25,
          TotalAmountAfterDep: 221.21,
          Inactive: 0,
          CreatedBy: "62173014-ec01-4e51-88d7-e6e2a6cb4dd0",
          ModifiedBy: "62173014-ec01-4e51-88d7-e6e2a6cb4dd0",
          TotalGST: 23.25
        })
        .then((res) => {
          if (res.data.status == true && res.data.statusCode == 200) {
            toast.success("Successfully inserted");
          } else {
            toast.error("Failed to insert");
          }
        })
        .catch((err) => {
          toast.error("Error "+err);
        });
    }
  }, [props.refresh]);

  const westlocation = (event) => {
    let siteLocationNorths = document.getElementById("siteLocationNorth").value;
    let siteLocationSouths = document.getElementById("siteLocationSouth").value;
    let siteLocationEasts = document.getElementById("siteLocationEast").value;
    let siteLocationWests = document.getElementById("siteLocationWest").value;
    setsiteLocationNorth(siteLocationNorths);
    setsiteLocationSouth(siteLocationSouths);
    setsiteLocationEast(siteLocationEasts);
    setsiteLocationWest(siteLocationWests);
    settotalBuiltUpArea(
      compute(
        siteLocationNorths,
        siteLocationSouths,
        siteLocationEasts,
        siteLocationWests
      )
    );
  };

  const referenceNumber = () => {
    let refNumber = document.getElementById("referenceNumber").value;
    let dates = document.getElementById("dateOfNotification").value;
    let dsrs = document.getElementById("dsrvalues").value;
    let ownerNames = document.getElementById("ownerName").value;
    let ageOfStructures = document.getElementById("ageOfStructure").value;
    let setStructureTypes = document.getElementById("structureType").value;

    let structureCodes = document.getElementById("structureCode").value;

    let totalBuiltUpAreas = document.getElementById("totalBuiltUpArea").value;

    let siteEngineers = document.getElementById("siteEngineer").value;
    let designations = document.getElementById("designation").value;
    let witnessNames = document.getElementById("witnessName").value;
    let witnessSignatures = document.getElementById("witnessSignature").value;
    let remarkss = document.getElementById("remarks").value;

    setrefNumber(refNumber);
    setdate(dates);
   // setDSR(dsrs);
   setdsrValue(dsrs);
    setownerName(ownerNames);
    setageOfStructure(ageOfStructures);
    setStructureType(setStructureTypes);
    setstructureCode(structureCodes);

    settotalBuiltUpArea(totalBuiltUpAreas);

    setsiteEngineer(siteEngineers);
    setdesignation(designations);
    setwitnessName(witnessNames);
    setwitnessSignature(witnessSignatures);
    setremarks(remarks);

    setremarks(remarkss);

    console.error("---------->" + refNumber);
  };

  const Child = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
      showAlert() {
       // alert("Child Function Called");
      },
    }));
    return <div>Child Component</div>;
  });

  const[districtIDValue,setdistrictIDValue]=React.useState('');
  const[districtCodeValue,setdistrictCodeValue]=React.useState('');
  const HandleChangeDistrict = (event) => {
    setdistrictValue("");
    alert(event.target.value);
    setdistrictValue(event.target.value);
    //alert(event.target.key + " " + event.target.value + " " + event.target.ID);
    settalukenable(false);
    console.log(event.target.value);
  //  alert(event.target.value);
  setdistrictIDValue(event.target.value);
  districts.map((value,key)=>{
    if(value.ID==districtIDValue){
      setdistrictCodeValue(value.Code);
      alert(districtCodeValue);
    }
  })
    // districtValue=event.target.value;

    axios
      .get(Constant.url + "UKP/rest/endpoints/GetTalukByDist", {
        params: { Dist_ID: event.target.value },
      })
      .then((res) => {
        alert(districtValue);
        if (res.data.mDistList.length > 0) {
          alert("Data is present");
          console.log(+"Taluk-------------------->" + res.data.mDistList);
          setTaluks(res.data.mDistList);
        } else {
          alert("No data is present");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
const[dsrValue,setdsrValue]=React.useState('');
const[dsrCode,setdsrCode]=React.useState('');
  const handleChange = (event) => {};
  const handleChangeDSR = (event) => {
    setdsrValue(event.target.value);
    dsr.map((value,key)=>{
      if(event.target.value==value.Name){
        setdsrCode(value.ID);
      }
    })

  };

  const[StrType,setStrType]=React.useState('');

  const[STRCode,setSTRCode]=React.useState('');

  //const[strCode,setstrCode]
  const handleChangeType = (event) => {
    //alert(event.target.value);
    setstructureCode(event.target.value);
    strtype.map((value, key) => {
      console.warn("---------------------------->" + value.Name);
      if (event.target.value == value.Code) {
        setStructureType(value.Name);
        setstructuretypeValue(value.Name);
        setStrType(value.Name);
        alert('---------------------------->'+value.Name);
      }
    });
    //structureType
    //setStructureType();
  };
  const totalCaluclation = (event) => {
    let plinthAreas = document.getElementById("plinthArea").value;
    let openAreas = document.getElementById("openArea").value;
    let totalAreas = document.getElementById("totalArea").value;
    let firstFloorAreas = document.getElementById("firstFloorArea").value;
    let secondFloorAreas = document.getElementById("secondFloorArea").value;

    setplinthArea(plinthAreas);
    setopenArea(openAreas);
    //settotalArea(totalAreas);
    setfirstFloorArea(firstFloorAreas);
    setsecondFloorArea(secondFloorAreas);
    settotalArea(
      compute(plinthAreas, openAreas, firstFloorAreas, secondFloorAreas)
    );

    //alert(plinthAreas+" "+openAreas+" "+firstFloorAreas+" "+secondFloorAreas);
  };
  function compute(plinthAreas, openAreas, firstFloorAreas, secondFloorAreas) {
    return (
      parseInt(plinthAreas) +
      parseInt(openAreas) +
      parseInt(firstFloorAreas) +
      parseInt(secondFloorAreas)
    );
  }
  const[villageIDValue,setvillageIDValue]=React.useState('');
  const[villageCodeValue,setvillageCodeValue]=React.useState('');
  const handleChangeVillage = (event) => {
    setvillageValue(event.target.value);
    setvillageIDValue(event.target.value);
    villages.map((value,key)=>{
      if(villageIDValue==value.ID){
        setvillageCodeValue(value.Code);
      }

    })
  };

  const[talukIDValue,settalukIDValue]=React.useState('');
  const[talukCodeValue,settalukCodeValue]=React.useState('');

  const HandleChangetaluk = (event) => {
    settalukValue(event.target.value);
    setvillageenable(false);
    axios
      .get(Constant.url + "UKP/rest/endpoints/GetVillageByTaluk", {
        params: { TID: event.target.value },
      })
      .then((res) => {
        if (res.data.mVillageList.length > 0) {
         // alert("Data is present");
          console.log(+"Taluk-------------------->" + res.data.mDistList);
          setVillages(res.data.mVillageList);
        } else {
          //alert("No data is present");
        }
      })
      .catch((err) => {
        console.log(err);
      });

      settalukIDValue(event.target.value);
      taluks.map((value,key)=>{
        if(value.ID==talukIDValue){
          settalukCodeValue(value.Code);
          alert(districtCodeValue);
        }
      })

  };

  return (
    <React.Fragment>
      {React.useEffect(() => {
        axios
          .get(Constant.url + "UKP/rest/endpoints/GetAllDistrict")
          .then((res) => {
            console.log(res.data);
            setDistricts(res.data.mDistList);
          })
          .catch((err) => {
            console.log(err);
          });
      }, [])}
      {React.useEffect(() => {
        axios
          .get(Constant.url + "UKP/rest/endpoints/GetStrType")
          .then((res) => {
            setstrType(res.data.mDistList);
            // alert(res.data.mDistList[1].Name)
            strtype.map((value, index) => {
              console.log("TYPE------------------>" + value);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }, [])}
      {
        React.useEffect(() => {

axios.get(Constant.url+"UKP/rest/endpoints/GetDsr")
.then(res=>{
  setDSR(res.data.mDistList);

}).catch(err=>{
  alert("GetDsr Error"+err)

})

        }, [])

      }
      <CssBaseline />
      <Container fixed>
        <Typography
          component="div"
          style={{
            backgroundColor: "#cee2f0",
            height: "110vh",
            width: "80%",
            marginLeft: "120px",
          }}
        >
          <div class="row">
            <div class="col-1">
              <FormControl className={classes.formControl}>
                <InputLabel id="district-select-label">District</InputLabel>
                <Select
                  labelId="district-select-label"
                  id="district"
                  value={districtValue}
                  onChange={HandleChangeDistrict}
                >
                  {districts.map((test, key) => (
                    <MenuItem key={key} value={test.ID}>
                      {test.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div class="col-2">
              <FormControl
                className={classes.formControl}
                disabled={talukenable}
              >
                <InputLabel id="taluk-select-label">Taluk</InputLabel>
                <Select
                  labelId="taluk-select-label"
                  id="taluks1"
                  value={talukValue}
                  onChange={HandleChangetaluk}
                >
                  {taluks.map((test) => (
                    <MenuItem key={test.Code} value={test.ID}>
                      {test.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div class="col-3">
              <FormControl
                className={classes.formControl}
                disabled={villageenable}
              >
                <InputLabel id="village-select-label">Village</InputLabel>
                <Select
                  labelId="village-select-label"
                  id="villages"
                  value={villageValue}
                  onChange={handleChangeVillage}
                >
                  {villages.map((test) => (
                    <MenuItem key={test.Code} value={test.ID}>
                      {test.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>

          {/* ---------------------------------------- */}

          <div class="row">
            <div class="col-1">
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  id="referenceNumber"
                  label="Reference (VPC/UKP Number)"
                  variant="outlined"
                  size="small"
                  onChange={referenceNumber}
                  style={{ paddingTop: "7px" }}
                />
              </FormControl>
            </div>
            {/* //----------------------Date-------------------------- */}

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
            {/* //----------------------dsr-------------------------- */}
            <div class="col-3">
              <FormControl className={classes.formControl}>
                <InputLabel id="dsr-select-label">DSR Label</InputLabel>
                <Select
                  labelId="dsr-select-label"
                  id="dsrvalues"
                  value={dsrValue}
                  onChange={handleChangeDSR}>
                  {dsr.map((test,key) => (
                    <MenuItem key={key} value={test.Code}>
                      {test.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
          {/* //----------------------ownerName-------------------------- */}
          <div class="row">
            <div class="col-1">
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  id="ownerName"
                  label="Owner Name"
                  variant="outlined"
                  size="small"
                  style={{ width: "880px", paddingTop: "5px" }}
                />
              </FormControl>
            </div>
          </div>
          {/* //----------------------ageOfStructure-------------------------- */}
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
                  style={{ paddingTop: "8px" }}
                />
              </FormControl>
            </div>
            {/* //----------------------structureType-------------------------- */}
            <div class="col-2">
              <FormControl className={classes.formControl}>
                <InputLabel id="structure-type-select-label">
                  Structure Type
                </InputLabel>
                <Select
                  labelId="structure-type-select-label"
                  id="structureType"
                  value={StrType}
                  onChange={handleChangeType}
                >
                  {strtype.map((test, index) => (
                    <MenuItem key={index} value={test.Code}>
                      {test.Name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            {/* //----------------------structureCode-------------------------- */}
            <div class="col-3">
              <FormControl className={classes.formControl}>
                <TextField
                  required
                  id="structureCode"
                  label="Structure Code"
                  variant="outlined"
                  size="small"
                  value={structureCode}
                  disabled="true"
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  value={totalArea}
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  onChange={totalCaluclation}
                  style={{ paddingTop: "8px" }}
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
                  value={totalBuiltUpArea}
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  onChange={westlocation}
                  size="small"
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ paddingTop: "8px" }}
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
                  style={{ width: "880px" }}
                />
              </FormControl>
            </div>
          </div>
        </Typography>
      </Container>
      <ToastContainer/>
    </React.Fragment>
  );
}
