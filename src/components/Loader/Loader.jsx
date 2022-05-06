
import { css } from "@emotion/core";
import FadeLoader from "react-spinners/FadeLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;`;

function Loader() {
  return (
       <FadeLoader color={"#4a4a4a"} loading={true} css={override} size={150} />
  );
}

export default Loader;