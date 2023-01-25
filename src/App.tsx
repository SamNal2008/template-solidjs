import { Route, Routes } from "solid-app-router";
import {
  createComputed,
  createSignal,
  JSXElement,
  onCleanup,
  Show,
  Suspense,
} from "solid-js";
import styles from "./App.module.css";
import {
  IAuthContext,
  useAuth,
} from "src/shared/context/AuthenticationContext";
import { StoreProvider } from "src/shared/context/StoreContext";
import { UiProvider } from "src/shared/context/UiContext";
import Footer from "src/shared/components/footer/Footer";
import { Navbar } from "src/shared/components/navbar/Navbar";
import DrawerMenu from "src/shared/components/side-menu/DrawerMenu";
import { NotFound } from "src/pages/NotFound/NotFound";
import { Playground } from "src/pages/Playground/Playground";
import { PersistentStoreUtils } from "src/shared/utils/store";
import { isStringDefined } from "src/shared/utils/validators";
import CircularProgress from "@suid/material/CircularProgress";

const App = (): JSXElement => {
  document.title = "SolidJS app";

  const { authInfo }: Partial<IAuthContext> = useAuth();
  const [appLoaded, setAppLoaded] = createSignal(false);

  if (!isStringDefined(authInfo?.jwtToken)) {
    setAppLoaded(true);
  } else {
    PersistentStoreUtils.init();
    createComputed(
      () => isStringDefined(authInfo?.jwtToken) && setAppLoaded(true)
    );
  }

  onCleanup(() => PersistentStoreUtils.clear());

  return (
    <Show when={appLoaded()} keyed={false} fallback={<CircularProgress />}>
      <UiProvider>
        <Suspense fallback={<div class="container">Loading...</div>}>
          <div class={styles.App}>
            <StoreProvider>
              <DrawerMenu />
              <Navbar />
              <div class={styles.Body}>
                <Routes>
                  <Route path="/test" component={Playground} />
                  <Route path="/*" component={NotFound} />
                </Routes>
              </div>
              <Footer />
            </StoreProvider>
          </div>
        </Suspense>
      </UiProvider>
    </Show>
  );
};

export default App;
