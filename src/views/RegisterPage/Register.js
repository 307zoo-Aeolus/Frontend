import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/home-bg-art.jpg";

const useStyles = makeStyles(styles);

function jumpTo(e, href) {
  e.stopPropagation();
  window.location.href = href;
}

export default function RegisterPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const str1 = "Please login to your email account to complete your registration";
  const [str2, setStr2] = React.useState("Failed to register");
  const [open1, setOpen1] = React.useState(false);
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClick1 = () => {
    setOpen1(true);
  };
  const [open2, setOpen2] = React.useState(false);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleClick2 = () => {
    setOpen2(true);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const values = {
      username: name,
      email: email,
      password1: password1,
      password2: password2,
      authority: "user",
    };
    fetch('http://127.0.0.1:8000/user/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    }).then(res => res.json())
      .then(data => {
        if (data && data.status && data.status === 'ok') {
          handleClick1();
          //window.location.href = '/login-page'
        }
        else {
          setStr2(data.type);
          handleClick2();
        }
      })
  }
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        onClick={(e) => jumpTo(e, "/")}
        absolute
        color="transparent"
        brand="Aeolus"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage: "url(" + image + ")",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card className={classes[cardAnimaton]}>
                <form
                  className={classes.form}
                  onSubmit={handleSubmit}
                >
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Register</h4>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="password1"
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                    <CustomInput
                      labelText="Ensure Password"
                      id="password2"
                      formControlProps={{
                        fullWidth: true,
                        required: true,
                      }}
                      inputProps={{
                        type: "password",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        ),
                        autoComplete: "off",
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button color="primary" fullWidth type="submit">
                      Register
                    </Button>
                  </CardFooter>
                  <CardFooter
                    className={classes.cardFooter}
                    style={{ marginTop: "-15px" }}
                  >
                    <Button simple style={{ color: "grey" }} href="login-page">
                      Go to login
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open1}
          autoHideDuration={6000}
          onClose={() => handleClose1()}
          message={"Succeeded! " + str1}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => handleClose1()}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open2}
          autoHideDuration={6000}
          onClose={() => handleClose2()}
          message={"Failed to register. " + str2}
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={() => handleClose2()}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
        <Footer whiteFont />
      </div>
    </div>
  );
}
