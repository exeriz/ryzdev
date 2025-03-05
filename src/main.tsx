import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { Layout } from "@/components/Layout/Layout";
import { FilterProvider } from "@/context/FilterContent";
import { ThemeProvider } from "@/context/ThemeProvider";
import App from "@/page";

import "@/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <FilterProvider>
        <BrowserRouter>
          <Layout>
            <App />
          </Layout>
        </BrowserRouter>
      </FilterProvider>
    </ThemeProvider>
  </StrictMode>
);
