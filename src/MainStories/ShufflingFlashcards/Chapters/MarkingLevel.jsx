import React from "react";
import { Button, Hidden } from "@material-ui/core";
import MouseIcon from "@mui/icons-material/Mouse";
import { useStyles } from "./MarkingLevelStyle";

export default function MarkingDifficultyLevel() {
  const classes = useStyles();

  return (
    <div className={classes.difficultyButtons}>
      <Button
        endIcon={
          <Hidden xsDown>
            <MouseIcon />
          </Hidden>
        }
        variant="contained"
        size="large"
        className={classes.hard}
      >
        Hard
      </Button>
      <Button
        endIcon={
          <Hidden xsDown>
            <MouseIcon />
          </Hidden>
        }
        variant="contained"
        size="large"
        className={classes.medium}
      >
        Medium
      </Button>
      <Button
        endIcon={
          <Hidden xsDown>
            <MouseIcon />
          </Hidden>
        }
        variant="contained"
        size="large"
        className={classes.easy}
      >
        Easy
      </Button>
      <Button
        endIcon={
          <Hidden xsDown>
            <MouseIcon />
          </Hidden>
        }
        variant="contained"
        size="large"
        className={classes.pass}
      >
        Pass
      </Button>
    </div>
  );
}
