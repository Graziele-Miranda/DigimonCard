import React from "react";
import TextField from "@mui/material/TextField";

function CustomTextField(props) {
    <TextField
        label={props.label}
        variant={props.variant}
        value={props.value}
        onChange={() => props.onChange()}
        fullWidth
    />
}

export default CustomTextField;