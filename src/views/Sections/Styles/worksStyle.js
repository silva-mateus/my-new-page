import { conatinerFluid } from "../../../Components/Styles/material-kit-react";

import imagesStyle from "../../../Components/Styles/imagesStyles.js";

const worksStyle = {
  section: {
    padding: "70px 0"
  },
  container: {
    ...conatinerFluid,
    textAlign: "center !important"
  },
  ...imagesStyle,
};

export default worksStyle;
