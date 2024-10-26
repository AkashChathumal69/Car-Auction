import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; // Make sure to add the .js extension here
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.js";

// Use createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
