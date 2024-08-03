// useScreen.js
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "../config/breakPoints";

const useScreen = (breakpoint) => {
  return useMediaQuery({ query: breakpoints[breakpoint] });
};

export default useScreen;
