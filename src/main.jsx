import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Greeting from "./components/Greeting.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/greeting" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
