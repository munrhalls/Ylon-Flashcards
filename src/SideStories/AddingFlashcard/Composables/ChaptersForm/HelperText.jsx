import FormHelperText from "@mui/material/FormHelperText";
import React from "react";

import { useFormControl } from "@mui/material/FormControl";

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
