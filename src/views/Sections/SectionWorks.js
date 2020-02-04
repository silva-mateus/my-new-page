import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import Button from "../../Components/CustomButtons/Button.js";

import landing from "../../assets/img/leticiavalentemakeup.png";
import profile from "../../assets/img/profile.png";


import worksStyle from "./Styles/worksStyle.js";

const useStyles = makeStyles(worksStyle);

export default function SectionWorks() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            
              <img
                src={landing}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button href="https://www.leticiavalentemakeup.com/" target="_blank" color="transparent" size="lg">
                View landing page
              </Button>
             
            
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link  className={classes.link}>
              <img
                src={profile}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button href="https://silva-mateus.github.io/newcv/" color="primary" size="lg" simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
