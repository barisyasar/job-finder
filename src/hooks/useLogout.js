import useZustand from "@/state/useZustand";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const { clearAuthData } = useZustand();
  const navigate = useNavigate();

  const logout = () => {
    clearAuthData();
    navigate("/");
  };

  return logout;
}

export default useLogout;
