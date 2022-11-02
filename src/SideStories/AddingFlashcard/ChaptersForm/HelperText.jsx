import FormHelperText from "@mui/material/FormHelperText";
import { useFormControl } from "@mui/material/FormControl";
import React from "react";

export function HelperText({ normal, focusTxt }) {
  const { focused } = useFormControl() || {};
  const helperText = React.useMemo(() => {
    if (focused) {
      return focusTxt;
    }
    return normal;
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}
