import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ViewListIcon from "@mui/icons-material/ViewList";
import StyleIcon from "@mui/icons-material/Style";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import { useStyles } from "./DecksStyle";
import { useSelector, useDispatch } from "react-redux";
import React from "react";

export default function Decks() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const decks = useSelector((state) => state.app.decks);

  return (
    <div className={classes.container}>
      <div className={classes.decksCell}>
        <CardHeader
          className={classes.decksHeader}
          title="DECKS LIST"
          subheader="Select & Edit"
        >
          DECKS LIST
        </CardHeader>
        <Box className={classes.listContainer}>
          <List>
            {decks.map((deck) => {
              return (
                <ListItem className={classes.listItem}>
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={deck?.title} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </div>
    </div>
  );
}
