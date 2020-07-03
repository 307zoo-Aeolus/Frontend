/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import MenuBookIcon from '@material-ui/icons/MenuBook';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

function toLink(e, href) {
  e.stopPropagation();
  window.location.href = href;
}

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Button
            onClick={(e) => toLink(e, "/interns")}
            color="transparent"
            target="_blank"
            className={classes.navLink}
          >
            <WorkIcon className={classes.icons} /> Interns
          </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={(e) => toLink(e, "/academic")}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <MenuBookIcon className={classes.icons} /> Academic
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          onClick={(e) => toLink(e, "/research")}
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <SchoolIcon className={classes.icons} /> Research
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Button
            onClick={(e) => toLink(e, "/profile-page")}
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <Tooltip title="Profile" aria-label="profile">
              <AccountBoxIcon className={classes.icons} />
            </Tooltip>
          </Button>
      </ListItem>
    </List>
  );
}
