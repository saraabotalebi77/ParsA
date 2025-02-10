import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./presentation/App";
import "./assets/font/iconsmind-s/css/iconsminds.css";
import "./assets/font/simple-line-icons/css/simple-line-icons.css";
import "./css/global.css";
import "@/i18n/i18n";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
