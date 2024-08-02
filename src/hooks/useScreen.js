// useScreen.js
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "./breakpoints";

const useScreen = (breakpoint) => {
  return useMediaQuery({ query: breakpoints[breakpoint] });
};

export default useScreen;
