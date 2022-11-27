import { ThemeProvider } from "@suid/material";
import { createContext, createEffect, createSignal, JSXElement, useContext } from "solid-js";
import { createStore, Part, SetStoreFunction } from "solid-js/store";
import { Company } from "../../interfaces/company";
import { User } from "../../interfaces/user";
import { theme } from "../../styles/theme";
import { environment } from "../../utils/environment";
import persistentStore, { PersistentStoreUtils } from "../../utils/store";
import { ModalWithActions } from "../modal/ModalWithActions";
import { isStringDefined } from "../../utils/validators";

export const JWT_TOKEN_KEY = "jwtToken";
export const USER_KEY = "user";
export const COMPANIES_KEY = "companies";

const DATA_KEYS_TO_WATCH: Array<Part<AuthenticationStore, keyof AuthenticationStore>> = [
  JWT_TOKEN_KEY,
  USER_KEY,
  COMPANIES_KEY,
];

export interface IAuthContext {
  authInfo: AuthenticationStore;
  setAuthInfo: SetStoreFunction<AuthenticationStore>;
  promptLogoutConfirmation: any;
}

export interface AuthenticationStore {
  isLoggedIn: boolean;
  jwtToken: string;
  companies: Company[];
  user: User;
}

const AuthContext = createContext<IAuthContext>();

export const AuthenticationContext = (props: any): JSXElement => {
  const [authInfo, setAuthInfo] = createStore<AuthenticationStore>({
    isLoggedIn: false,
    jwtToken: localStorage.getItem(JWT_TOKEN_KEY) ?? "",
    companies: [],
    user: {} as unknown as User,
  });

  const [isLogoutModalOpen, setIsLogoutModalOpen] = createSignal(false);

  createEffect(() => fetchAuthInfoFromPersistentStoreWithToken(persistentStore[JWT_TOKEN_KEY]));

  /**
   * Update auth store info with local storage data every time it is updated
   * @param jwtToken
   */
  const fetchAuthInfoFromPersistentStoreWithToken = (jwtToken: string): void => {
    if (!isStringDefined(jwtToken)) {
      setAuthInfo({
        companies: [],
        isLoggedIn: false,
        jwtToken: "",
        user: {} as unknown as User,
      });
      return;
    }
    setAuthInfo({
      isLoggedIn: true,
      companies: PersistentStoreUtils.getItem(COMPANIES_KEY),
      jwtToken,
      user: PersistentStoreUtils.getItem(USER_KEY),
    });
  };

  const promptLogoutConfirmation = (): void => {
    setIsLogoutModalOpen(true);
  };

  const closeLogoutModal = (): void => {
    setIsLogoutModalOpen(false);
  };

  const logout = (): void => {
    DATA_KEYS_TO_WATCH.forEach((key) => PersistentStoreUtils.removeItem(key as string));
    closeLogoutModal();
  };

  return (
    <AuthContext.Provider value={{ authInfo, setAuthInfo, promptLogoutConfirmation }}>
      <ThemeProvider theme={theme}>
        <ModalWithActions
          description={"Êtes-vous sûr de vouloir vous deconnecter ?"}
          title={"Se déconnecter"}
          open={isLogoutModalOpen}
          setOpen={setIsLogoutModalOpen}
          onCancelClick={closeLogoutModal}
          onConfirmationClick={logout}
          img={`${environment.filePath}/exit.png`}
        />
        {props.children}
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

export const useAuth = (): IAuthContext => useContext(AuthContext) ?? ({ authInfo: {} } as unknown as IAuthContext);
