import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

//import FieldMeasurementsPanel from './FieldMeasurementsTabPanel';
import FieldMeasurementsPanel from './FieldMeasurementsTabPanel';
import TextEntryPanel from './TextEntryTabPanel';

export default function GIAdditionalInfoTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Field Measurements" value="1" />
            <Tab label="Text Entry" value="2" />
          </TabList>
        </Box>
              <TabPanel value="1"><FieldMeasurementsPanel /></TabPanel>
              <TabPanel value="2"><TextEntryPanel /></TabPanel>
      </TabContext>
    </Box>
  );
}