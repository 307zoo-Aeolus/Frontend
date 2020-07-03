import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionIntro() {
  const classes = useStyles();
  return (
    <div className={classes.section} style={{ marginBottom: "-80px" }}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              width: "100%",
              color: "black",
            }}
          >
            Welcome to Aeolus
          </h2>
          <p />
          <h5 style={{ textAlign: "center", width: "70%" }}>
            This is Aeolus, a platform providing information on interns
            recruitment, academic forums and research results on COVID-19 during
            the outbreak of pandemics. Wish you and your loved ones all the best
            during this tough time.
          </h5>
        </GridContainer>
      </div>
    </div>
  );
}
