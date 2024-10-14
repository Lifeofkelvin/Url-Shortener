import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <ColorModeScript initialColorMode="light" />
    <ChakraProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ChakraProvider>
  </>
);
