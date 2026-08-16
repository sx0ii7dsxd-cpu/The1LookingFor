import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Auth from "./pages/Auth.jsx";

function Root() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (path === "/join" || path === "/signin") {
    return <Auth />;
  }

  return <App />;
}

ReactDOM.createRoot(document.getElementById("box")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);