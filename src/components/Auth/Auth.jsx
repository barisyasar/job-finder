// Auth
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import LoginDialog from "../LoginDialog";

function Auth() {
  return (
    <div className="container mt-4 max-w-2xl">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          In order to view this page you must be logged in.
        </AlertDescription>
      </Alert>
      <div className="mt-3 flex justify-center">
        <LoginDialog />
      </div>
    </div>
  );
}

export default Auth;
