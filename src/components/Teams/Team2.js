import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Team2(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

Team2.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Program" {...a11yProps(0)} />
          <Tab label="Stands" {...a11yProps(1)} />
          <Tab label="Results" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Team2 value={value} index={0}>
      <table>
          <tbody>
            <tr>
              <th>Time</th>
              <th>Home</th>
              <th>Away</th>
              <th>Field</th>
            </tr>
            <tr>
              <td className="firstTable">09:30</td>
              <td className="tournamentProgress2">TEAM 1</td>
              <td className="tournamentProgress2">TEAM 2</td>
              <td className="firstTable">9</td>
            </tr>
            <tr>
              <td className="firstTable">09:45</td>
              <td className="tournamentProgress2">TEAM 3</td>
              <td className="tournamentProgress2">TEAM 4</td>
              <td className="firstTable">6</td>
            </tr>
            <tr>
              <td className="firstTable">10:00</td>
              <td className="tournamentProgress2">TEAM 5</td>
              <td className="tournamentProgress2">TEAM 6</td>
              <td className="firstTable">3</td>
            </tr>
            <tr>
              <td className="firstTable">10:15</td>
              <td className="tournamentProgress2">TEAM 7</td>
              <td className="tournamentProgress2">TEAM 8</td>
              <td className="firstTable">0</td>
            </tr>
          </tbody>
        </table>
      </Team2>
      <Team2 value={value} index={1}>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Team</th>
              <th>G</th>
              <th>P</th>
              <th>DPV</th>
              <th>DPT</th>
              <th>T</th>
            </tr>
            <tr>
              <td className="firstTable">1.</td>
              <td className="firstTableTeamName1">TEAM 1</td>
              <td className="firstTableG">3</td>
              <td className="firstTableP">9</td>
              <td className="firstTableDPV">12</td>
              <td className="firstTableDPT">2</td>
              <td className="firstTableT">+10</td>
            </tr>
            <tr>
              <td className="firstTable">2.</td>
              <td className="firstTableTeamName2">TEAM 2</td>
              <td className="firstTableG">3</td>
              <td className="firstTableP">6</td>
              <td className="firstTableDPV">20</td>
              <td className="firstTableDPT">8</td>
              <td className="firstTableT">+12</td>
            </tr>
            <tr>
              <td className="firstTable">3.</td>
              <td className="firstTableTeamName">TEAM 3</td>
              <td className="firstTableG">3</td>
              <td className="firstTableP">3</td>
              <td className="firstTableDPV">4</td>
              <td className="firstTableDPT">10</td>
              <td className="firstTableT">-6</td>
            </tr>
            <tr>
              <td className="firstTable">4.</td>
              <td className="firstTableTeamName">TEAM 4</td>
              <td className="firstTableG">3</td>
              <td className="firstTableP">0</td>
              <td className="firstTableDPV">5</td>
              <td className="firstTableDPT">21</td>
              <td className="firstTableT">-16</td>
            </tr>
          </tbody>
        </table>
      </Team2>
      <Team2 value={value} index={2}>
      <table>
          <tbody>
            <tr>
              <th className="tournamentProgress1">Home</th>
              <th className="tournamentProgress2">Away</th>
              <th className="tournamentProgress3">Result</th>
            </tr>
            <tr>
              <td className="tournamentProgressTEAMNAME">TEAMNAME-A</td>
              <td className="tournamentProgressTEAMNAME">TEAMNAME-B</td>
              <td className="tournamentProgress3">2-0</td>
            </tr>
            <tr>
              <td className="tournamentProgressItalic">C.Ronaldo 1-0,</td>
              <td className="tournamentProgressItalic">C.Ronaldo 2-0</td>
            </tr>
          </tbody>
        </table>
      </Team2>
    </Box>
  );
}
