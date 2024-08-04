// Auth
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function Auth() {
  return (
    <div className="container mt-4 max-w-2xl">
      <Alert variant="destructive">
        <ExclamationTriangleIcon className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          In order to view this page you must login.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default Auth;
