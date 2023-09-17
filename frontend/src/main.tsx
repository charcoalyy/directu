import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@styles/global.css";
import { LoadingProvider } from "@context/loadingContext.tsx";
import { MantineProvider } from "@mantine/core";
import { theme } from "@styles/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoadingProvider>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </LoadingProvider>
  </React.StrictMode>
);
