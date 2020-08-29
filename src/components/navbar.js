import React, { useState } from "react";
import MobilRightMenuSlider from "@material-ui/core/Drawer";
import { Link } from "react-router-dom";

import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  ArrowBack,
  Menu,
  Home,
  Apps,
  AssignmentInd,
  ContactMail,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import girl from "../girl.png";
const useStyles = makeStyles({
  menu: {
    width: 250,
    background: "#511",
    height: "100%",
  },
  avatar: {
    display: "block",
    marginLeft: "83px",
    height: "83px",
    width: "83px",
    marginTop: "20px",
  },
  menulist: {
    padding: 30,
    color: "tan",
  },
});
const MenuList = [
  {
    icon: <Home />,
    iconText: "Home",
    itemPath: "/",
  },
  {
    icon: <AssignmentInd />,
    iconText: "Resume",
    itemPath: "/resume",
  },
  {
    icon: <ContactMail />,
    iconText: "Contact",
    itemPath: "/contacts",
  },
];

const NavBar = () => {
  const classes = useStyles();
  const [isSliderVisble, setSliderVisibility] = useState(false);
  const toggleSlider = () => setSliderVisibility(!isSliderVisble);


  const sideList = () => (
    <Box className={classes.menu} component="div" onClick={toggleSlider}>
      <Avatar className={classes.avatar} src={girl} alt="Aswathy" />
      <List>
        {MenuList.map((menu, key) => (
          <ListItem button key={key} component={Link} to={menu.itemPath}>
            <ListItemIcon className={classes.menulist}>
              {menu.icon}
            </ListItemIcon>
            <ListItemText
              className={classes.menulist}
              primary={menu.iconText}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <>
      <Box component="nav">
        <AppBar position="static" style={{ background: "#222" }}>
          <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
            <IconButton component={Link} to="/">
              <ArrowBack style={{ color: "#fff" }} />
            </IconButton>
            <IconButton onClick={toggleSlider}>
              <Menu style={{ color: "#fff"}} />
            </IconButton>

            {/* <Typography variant="h4" style={{ color: "tan" }}>
              {" "}
              Portfolio
            </Typography> */}
            <MobilRightMenuSlider open={isSliderVisble} anchor="right">
              {sideList()}
            </MobilRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};
export default NavBar;