import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/todos";
import { UserProvider } from "./context/User-context";
import { GoogleOAuthProvider } from "@react-oauth/google";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <GoogleOAuthProvider clientId="89157473197-l17rek976eg035cem0eq66ko71662bp0.apps.googleusercontent.com">
    <React.StrictMode>
      <UserProvider>
        <Provider>
          <App />
        </Provider>
      </UserProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
