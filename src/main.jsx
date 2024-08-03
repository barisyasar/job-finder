import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import App from "./App.jsx";
import queryClient from "./config/queryClient.config.js";
import "./styles/index.css";
import ThemeWrapper from "./components/ThemeWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ThemeWrapper>
      <App />
    </ThemeWrapper>
  </QueryClientProvider>
);
