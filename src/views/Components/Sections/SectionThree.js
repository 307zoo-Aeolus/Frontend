import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "@material-ui/core/Card";

import MenuBookIcon from "@material-ui/icons/MenuBook";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionThree() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <Link to="interns" className={classes.link}>
              <Card style={{ width: "70%", marginLeft: "80px" }}>
                <p />
                <WorkIcon fontSize="large" />
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  Internships
                </h3>
                <p />
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Organization: Post vacancy and other recruitment info during
                  COVID-19
                </h5>
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Students: Choose internships and contact orgs
                </h5>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to="academic" className={classes.link}>
              <Card style={{ width: "70%", marginLeft: "60px" }}>
                <p />
                <MenuBookIcon fontSize="large" />
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  Academic
                </h3>
                <p />
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Professors & Labs: Post vacant positions and forums info
                </h5>
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Those Who Are Interested: Contact professors and subscribe
                  forums notifications
                </h5>
              </Card>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Link to="research" className={classes.link}>
              <Card style={{ width: "70%", marginLeft: "40px" }}>
                <p />
                <SchoolIcon fontSize="large" />
                <h3
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  Research
                </h3>
                <p />
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Researchers: Post opensource research results, share datasets
                </h5>
                <h5
                  style={{
                    width: "80%",
                    textAlign: "left",
                    marginLeft: "30px",
                  }}
                >
                  Those Who Are Interested: Use results to conduct their own
                  research and give feedback
                </h5>
              </Card>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
