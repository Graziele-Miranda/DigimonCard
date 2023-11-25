import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { useState } from "react";

import "../styles/App.css";

import { FormHelperText, FormControl } from "@mui/material";

function Search(props) {
  const [error, setError] = useState("");

  const handleChange = (event) => {
    let regex = "^(0|[1-9][0-9]*)$";
    if (event.target.value === "") {
      setError("Insira algum valor para fazer a pesquisa.");
    } else if (event.target.value.match(regex)) {
      setError("Valores numéricos não são permitidos.");
      return;
    } else {
      setError(null);
    }
    props.setSearch(event.target.value);
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={4}>
        <FormControl fullWidth={true}>
          <TextField
            label="Search Digimon"
            variant="filled"
            value={props.search}
            onChange={handleChange}
            fullWidth
            style={{ backgroundColor: "white", borderRadius: "8px" }}
            InputProps={{
              disableUnderline: true,
            }}
          />
          <FormHelperText
            id="digimon-pesquisa"
            formhelpertextprops={{ className: "helperText" }}
            style={{ color: "red" }}
          ></FormHelperText>
        </FormControl>
        <div className="error-message" style={{ color: "red" }}>
          {error}
        </div>
      </Grid>
      <Grid item xs={12} sm={1.5}>
        <FormControl>
          <Select
            variant="outlined"
            label="Filter"
            value={props.searchField}
            onChange={(e) => props.setSearchField(e.target.value)}
            fullWidth
            style={{ backgroundColor: "white", borderRadius: "8px" }}
          >
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="level">Level</MenuItem>
          </Select>
          <FormHelperText>{error ? " " : null}</FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default Search;
