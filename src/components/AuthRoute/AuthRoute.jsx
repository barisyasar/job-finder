// Auth Route

import useZustand from "@/state/useZustand";
import Auth from "../Auth/Auth";

function AuthRoute({ children }) {
  const { user } = useZustand();
  return user ? children : <Auth />;
}

export default AuthRoute;
