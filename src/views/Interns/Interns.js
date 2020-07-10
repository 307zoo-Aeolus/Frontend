import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import papa from 'papaparse';
import Pagination from '@material-ui/lab/Pagination';
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import InternSection from "./Sections/InternSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Interns(props) {
  const classes = useStyles();
  const [interns, setInterns] = React.useState([]);
  const [current, setCurrent] = React.useState([]);
  useEffect(() => {
    const parFile = require('../../assets/files/internship.csv')
    papa.parse(parFile, {
      download: true,
      header: true,
      complete: function (results) {
        setInterns(results.data)
        setCurrent(results.data.slice(0, 9))
      }
    })
  }, [])
  const fetchCurr = (e, page) => {
    e.stopPropagation();
    e.preventDefault();
    if (interns) {
      setCurrent(interns.slice((page - 1) * 9, page * 9))
    }
  }
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Aeolus"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/about-bg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Internships</h1>
              <h4>
                Find Your Satisfied Internships during COVID-19
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <GridContainer justify="center">
              {current.map(intern => (
                <InternSection city={intern.city} company_name={intern.company_name} duration={intern.duration}
                  frequency={intern.frequency} job={intern.job} job_link={intern.job_link} salary={intern.salary} />
              ))}
            </GridContainer>
          </div>
        </div>
        <div className={classes.container} style={{ marginTop: '20px' }}>
          <div className={classes.section}>
            <GridContainer justify="center" >
              <Pagination count={86} color="primary" onChange={(e, page) => fetchCurr(e, page)} />
            </GridContainer>
          </div>
        </div>
        <p style={{ height: '20px' }}/>
      </div>
      <Footer />
    </div >
  )
}
