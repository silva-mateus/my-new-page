import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Button from "../Components/CustomButtons/Button";
import HeaderLinks from "../Components/Header/HeaderLinks";
import Parallax from "../Components/Parallax/Parallax";
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";

import profile from "../assets/img/mateus.png";

import SectionWorks from "./Sections/SectionWorks";
import SectionContact from "./Sections/SectionContact";

import styles from "../Components/Styles/profilePageStyle.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  return (
    <div>
      <Header
        brand="Mateus Silva"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />

      <Parallax small image={require("../assets/img/bg-img.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Mateus Silva</h3>
                    <h6>DESENVOLVEDOR</h6>
                    <Button
                      href="https://www.linkedin.com/in/mhassilvamat/"
                      target="_blank"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-linkedin"} />
                    </Button>

                    <Button
                      href="https://www.facebook.com/ti.fisica.mateus"
                      target="_blank"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>

                    <Button
                      href="https://www.instagram.com/thihero/"
                      target="_blank"
                      justIcon
                      link
                      className={classes.margin5}
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
                Sou um desenvolvedor de softwares, web designer. Formado em
                Física, gosto muito de cosmologia, e também de ouvir/tocar
                música. Sempre gostei também de "mexer" no computador e isso me
                levou a gostar muito do que faço.
              </p>
            </div>



            <SectionWorks />
            <SectionContact />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
