import React, { useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import papa from 'papaparse';
import Pagination from '@material-ui/lab/Pagination';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
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
import RaSection from "./Sections/RaSection.js";
import ForumSection from "./Sections/ForumSection.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

export default function Academic(props) {
  const classes = useStyles();
  const [forums, setForums] = React.useState([]);
  const [ras, setRas] = React.useState([]);
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    e.stopPropagation();
    setValue(newValue);
  };
  const forumsRender = () => (
    <GridContainer justify="center">
      {forums.map(forum => (
        <ForumSection Title={forum.Title} Location={forum.Location} Venue={forum.Venue}
        Begin={forum.Begin} End={forum.End} Synopsis={forum.Synopsis} Link={forum.Link} />
      ))}
    </GridContainer>
  )
  const rasRender = () => (
    <GridContainer justify="center">
      {ras.map(ra => (
        <RaSection Title={ra.Title} Location={ra.Location} Company={ra.Company}
        Synopsis={ra.Synopsis} Link={ra.Link}/>
      ))}
    </GridContainer>
  )
  useEffect(() => {
    const forums = require('../../assets/files/conference.csv')
    const ras = require('../../assets/files/ra.csv')
    papa.parse(forums, {
      download: true,
      header: true,
      complete: function (results) {
        setForums(results.data)
      }
    })
    papa.parse(ras, {
      download: true,
      header: true,
      complete: function (results) {
        setRas(results.data)
      }
    })
  }, [])
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
              <h1 className={classes.title}>Academic</h1>
              <h4>
                Get Info on Updated Online Forums & Labs’ Positions
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classes.section}>
            <br/>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Forums"/>
              <Tab label="RAs"/>
            </Tabs>
            <TabPanel value={value} index={0}>
              {forumsRender()}
            </TabPanel>
            <TabPanel value={value} index={1}>
              {rasRender()}
            </TabPanel>
          </div>
        </div>
        <p style={{ height: '20px' }} />
      </div>
      <Footer />
    </div >
  )
}
