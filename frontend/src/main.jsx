import React from "react";
import ReactDOM from "react-dom/client";
import { BlogProvider } from "./context/BlogProvider";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);
