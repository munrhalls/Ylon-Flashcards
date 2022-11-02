import CancelSharpIcon from "@mui/icons-material/CancelSharp";
import Button from "@mui/material/Button";
import React from "react";

export default function DiscardBtn({ text }) {
  return <Button startIcon={<CancelSharpIcon />}>{text}</Button>;
}
