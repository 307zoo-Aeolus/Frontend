import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ResearchSection(props) {
  const classes = useStyles();
  const { Name,	URL, Applications } = props;
  return (
    <GridItem xs={12} sm={12} md={6}>
      <Card className={classes.root} style={{ marginTop: "20px", height: "200px" }}>
        <CardContent>
          <Typography variant="h5" component="h2">
             {Name}
          </Typography>
          <p />
          <Typography variant="body2" component="p" gutterottom>
            {Applications}
          </Typography>
        </CardContent>
        <CardActions>
          <div style={{ top: '-15px', position: 'relative' }}><Button href={URL} color="primary">Learn More</Button></div>
        </CardActions>
      </Card>
    </GridItem>
  );
}
