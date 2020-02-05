import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import ListIcon from "@material-ui/icons/List";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import Button from "../../Components/CustomButtons/Button.js";

import landing from "../../assets/img/leticiavalentemakeup.png";
import profile from "../../assets/img/profile.png";
import tindog from "../../assets/img/tindog.png";
import fylo from "../../assets/img/fylo.png";

import worksStyle from "./Styles/worksStyle.js";

const useStyles = makeStyles(worksStyle);

export default function SectionWorks() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.title}>
        <h3>
          Minhas Páginas
          <br />
          <small>
            Essas são páginas que fiz a partir de desafios ou cursos de web
            design.
          </small>
        </h3>
      </div>
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

            <Button
              href="https://www.leticiavalentemakeup.com/"
              target="_blank"
              color="github"
              round
            >
              <ListIcon className={classes.icons} /> View Page
            </Button>
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>

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
              <Button
                href="https://silva-mateus.github.io/newcv/"
                target="_blank"
                color="github"
                round
              >
                <ListIcon className={classes.icons} /> View Page
              </Button>

          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
  
              <img
                src={tindog}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button
                href="https://silva-mateus.github.io/TinDog/"
                target="_blank"
                color="github"
                round
              >
                <ListIcon className={classes.icons} /> View Page
              </Button>

          </GridItem>

          <GridItem xs={12} sm={12} md={6}>

              <img
                src={fylo}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button
                href="https://silva-mateus.github.io/Fylo-Beta-Landing-Page/"
                target="_blank"
                color="github"
                round
              >
                <ListIcon className={classes.icons} /> View Page
              </Button>

          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
