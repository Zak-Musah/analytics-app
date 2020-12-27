import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DashboardIcon style={{ color: "white" }} />
        <ListItemText style={{ color: "white" }} primary="Dash" />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <RoomOutlinedIcon style={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText style={{ color: "white" }} primary="Map" />
    </ListItem>
  </div>
);
