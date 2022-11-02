import Button from "@mui/material/Button";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";

import React from "react";

export default function SaveBtn({ text }) {
  return <Button startIcon={<SaveSharpIcon></SaveSharpIcon>}>{text}</Button>;
}
