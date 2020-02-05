import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";

// @material-ui/icons
import TextsmsOutlinedIcon from "@material-ui/icons/TextsmsOutlined";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
import MailIcon from "@material-ui/icons/Mail";
import ListIcon from "@material-ui/icons/List";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

// core components
import GridContainer from "../../Components/Grid/GridContainer.js";
import GridItem from "../../Components/Grid/GridItem.js";
import Button from "../../Components/CustomButtons/Button.js";
import NavPills from "../../Components/NavPills/NavPills";

import Card from "../../Components/Card/Card.js";
import CardBody from "../../Components/Card/CardBody.js";
import CardHeader from "../../Components/Card/CardHeader.js";
import CardFooter from "../../Components/Card/CardFooter.js";
import CustomInput from "../../Components/CustomInput/CustomInput.js";

import styles from "./Styles/contactMeStyle.js";

const useStyles = makeStyles(styles);

export default function SectionContact(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function() {
    setCardAnimation("");
  }, 700);
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4}>
            <NavPills
              alignCenter
              color="blue"
              tabs={[
                {
                  tabButton: "Mail",
                  tabIcon: MailIcon,
                  tabContent: (
                    <Card className={classes[cardAnimaton]}>
                      <form
                        className={classes.form}
                        action="mailto:contato@thi.hero2012@gmail.com?subject=Contato pelo Site"
                        method="post"
                        enctype="text/plain"
                      >
                        <CardHeader color="blue" className={classes.cardHeader}>
                          <h4>ENTRE EM CONTATO</h4>
                        </CardHeader>
                        <CardBody>
                          <CustomInput
                            labelText="Nome"
                            id="float"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              name: "Nome",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Email"
                            id="fload"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "email",
                              name: "Email",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <Email className={classes.inputIconsColor} />
                                </InputAdornment>
                              )
                            }}
                          />
                          <CustomInput
                            labelText="Menssagem"
                            id="float"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "message",
                              name: "Menssagem",
                              endAdornment: (
                                <InputAdornment position="end">
                                  <TextsmsOutlinedIcon
                                    className={classes.inputIconsColor}
                                  />
                                </InputAdornment>
                              ),
                              autoComplete: "off"
                            }}
                          />
                        </CardBody>
                        <CardFooter className={classes.cardFooter}>
                          <Button simple color="blue" size="lg" type="submit">
                            Enviar
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  )
                },
                {
                  tabButton: "Others",
                  tabIcon: ListIcon,
                  tabContent: (
                    <GridContainer justify="center">
                      <Button
                        href="https://www.linkedin.com/in/mhassilvamat/"
                        target="_blank"
                        color="blue"
                        size="lg"
                      >
                        <LinkedInIcon className={classes.icons} /> /mhassilvamat
                      </Button>
                      <Button
                        href="https://www.facebook.com/ti.fisica.mateus"
                        target="_blank"
                        color="blue"
                        size="lg"
                      >
                        <FacebookIcon className={classes.icons} />{" "}
                        /ti.fisica.mateus
                      </Button>
                      <Button
                        href="https://www.instagram.com/thihero/"
                        target="_blank"
                        color="blue"
                        size="lg"
                      >
                        <InstagramIcon className={classes.icons} /> /thihero
                      </Button>
                      <Button
                        href="mailto:thi.hero2012@gmail.com"
                        target="_blank"
                        color="blue"
                        size="lg"
                      >
                        <Email className={classes.icons} /> thi.hero2012@gmail.com
                      </Button>
                    </GridContainer>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
