import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import MoneyIcon from '@material-ui/icons/Money';
import TimerIcon from '@material-ui/icons/Timer';
import LaunchIcon from '@material-ui/icons/Launch';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import WorkIcon from '@material-ui/icons/Work';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function InternSection(props) {
  const classes = useStyles();
  const { city, company_name, duration, frequency, job, job_link, salary } = props;
  return (
    <GridItem xs={12} sm={12} md={4}>
      <Card className={classes.root} style={{ height: "320px", marginTop: "20px" }}>
        <div style={{ top: '-25px', position: 'relative' }}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><BusinessIcon color="primary" /></div> {company_name}
          </Typography>
          <Typography variant="h5" component="h2">
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><WorkIcon color="primary" /></div> {job}
          </Typography>
          <p />
          <Typography className={classes.pos} color="textSecondary">
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><LocationOnIcon color="primary" /></div>{city}
          </Typography>
          <p />
          <Typography variant="body2" component="p" gutterottom>
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><TimerIcon /></div> {duration}
            <br />
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><EventNoteIcon /></div> {frequency}
            <br />
            <div style={{ display: 'inline', top: '5px', position: 'relative' }}><MoneyIcon /></div> {salary}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{ top: '-15px', position: 'relative' }}><Button href={job_link} color="primary">Learn More</Button></div>
        </CardActions>
        </div>
      </Card>
    </GridItem>
  );
}
