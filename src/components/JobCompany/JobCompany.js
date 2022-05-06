import React from 'react'
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import CheckBox from "@mui/material/Checkbox";
import WorkIcon from "@mui/icons-material/Work";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import BadgeIcon from "@mui/icons-material/Badge";
import style from './JobCompany.module.css'

function JobCompany() {
  return (
    <React.Fragment>
      <div className={style.form} style={{ marginLeft: 220 }}>
        <div className={style.TextField}>
                  <TextField
            id="outlined-basic"
            placeholder="Job, company..."
          >Job, company</TextField>
        </div>

        <div className={style.filter}>
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              defaultValue={"Afghanistan"}
            >
              <FmdGoodRoundedIcon
                style={{
                  fontSize: "14px",
                  marginLeft: "6px",
                  color: "#02af74",
                }}
              />
              Afghanistan
            </InputLabel>
            <Select
              className={style.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Search by Location"
            >
              <MenuItem value={""}>none</MenuItem>
              <MenuItem value={"Liverpool"}>Liverpool</MenuItem>
              <MenuItem value={"Manchester"}>Manchester</MenuItem>
              <MenuItem value={"Norwich"}>Norwich</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className={style.filter} style={{ marginRight: 520 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              <BadgeIcon
                style={{
                  marginRight: "2px",
                  fontSize: "14px",
                  marginLeft: "6px",
                  color: "#02af74",
                }}
              />
              Accounting
            </InputLabel>
            <Select
              className={style.select}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Search by Location"
            >
              <MenuItem value={""}>none</MenuItem>
              <MenuItem value={"Liverpool"}>Liverpool</MenuItem>
              <MenuItem value={"Manchester"}>Manchester</MenuItem>
              <MenuItem value={"Norwich"}>Norwich</MenuItem>
            </Select>
          </FormControl>
              </div>
              
      </div>
    </React.Fragment>
  );
}

export default JobCompany