// Logout Button
import { Button } from "../ui/button";
import useLogout from "@/hooks/useLogout";

function LogoutButton() {
  const logout = useLogout();
  return (
    <Button variant="link" onClick={logout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
