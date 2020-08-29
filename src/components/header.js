import React from "react";
import { Box, Avatar, Grid, Typography } from "@material-ui/core";
import girl from "../girl.png";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";

function Header() {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      margin: theme.spacing(1),
      height: theme.spacing(15),
      width: theme.spacing(15),
    },
    heading: {
      color: "blue",
    },
    description: {
      color: "tan",
    },
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      textAlign: "center",
      zIndex: 1,
      transform: "translate(-50%,-50%)",
    },
  }));
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justify="center">
        <Avatar src={girl} alt="Aswathy" className={classes.avatar} />
      </Grid>

      <Typography variant="h4" className={classes.heading}>
        <Typed strings={["Aswathy Rajeev"]} typeSpeed={30} />
      </Typography>
      <Typography variant="h5" className={classes.description}>
        <Typed
          strings={["UI Developer", "Envestnet Asset Management"]}
          typeSpeed={30}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
}

export default Header;