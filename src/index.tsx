import { ErrorBoundary } from "solid-js";
/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "solid-app-router";

import "./index.css";
import App from "./App";
import { AuthenticationContext } from "./shared/context/AuthenticationContext";
import { Error } from "./pages/Error/Error";

render(
  () => (
    <ErrorBoundary fallback={(err) => <Error message={err} />}>
      <AuthenticationContext>
        <Router>
          <App />
        </Router>
      </AuthenticationContext>
    </ErrorBoundary>
  ),
  document.getElementById("root") as HTMLElement
);
