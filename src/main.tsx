import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Design from "./pages/design";
import App from "./pages/app";
import "./index.css";

const Main = () => {
  const [page, setPage] = useState("app");

  return (
    <div>
      <div className="container mx-auto px-4 mt-10">
        <button
          className={`border-2 bg-green-600 px-6 py-2 rounded-md active:opacity-70 ${
            page === "app" ? "border-white" : "border-green-600"
          }`}
          onClick={() => setPage("app")}
        >
          App
        </button>
        <button
          className={`border-2 bg-green-600 px-6 py-2 rounded-md ml-4 active:opacity-70 ${
            page === "design" ? "border-white" : "border-green-600"
          }`}
          onClick={() => setPage("design")}
        >
          Design
        </button>
      </div>

      {page === "app" ? <App /> : page === "design" ? <Design /> : null}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
