import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { DurationProvider } from "./context/DurationContext.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <DurationProvider>
        <Provider store={store} >
          <App />
        </Provider>
      </DurationProvider>
    </ThemeProvider>
  </BrowserRouter>
);
