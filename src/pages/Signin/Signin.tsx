import Button from "@suid/material/Button";
import Typography from "@suid/material/Typography";
import { useNavigate } from "solid-app-router";
import { createEffect, createRoot, createSignal, JSXElement, Show } from "solid-js";
import { Form, FormType } from "solid-js-form";
import * as Yup from "yup";
import { LoadingButton } from "../../shared/components/button/LoadingButton";
import { FormInput } from "../../shared/components/form/FormInput";
import InputError from "../../shared/components/form/InputError";
import { SignInDto } from "../../shared/dto/authentication";
import { AuthenticationService } from "../../shared/services/api/authentication";
import "./style/Signin.css";
import { isDefined } from "../../shared/utils/validators";

export const Signin = (): JSXElement => {
  document.title = "Connexion";

  const [connectionError, setConnectionError] = createSignal<string | undefined>(undefined);
  const [isLoading, setIsLoading] = createSignal(false);

  const setErrorMessage = (errorCode?: string): void => {
    switch (errorCode) {
      case "401":
        setConnectionError("Votre mot de passe est incorrect");
        break;
      case "404":
        setConnectionError("Cette adresse email n'existe pas");
        break;
      default:
        setConnectionError("Une erreur est survenue merci de réessayer");
        break;
    }
  };

  const navigate = useNavigate();

  const validateSigninForm = async (form: FormType.Context<SignInDto>): Promise<void> => {
    if (!form.isValid || !form.isSubmitting) return;
    setConnectionError(undefined);
    const [data] = AuthenticationService.signIn({
      email: form.values.email.toLowerCase(),
      password: form.values.password,
    });
    createRoot(() =>
      createEffect(() => {
        setIsLoading(data.loading);
        if (isDefined(data.error)) {
          setIsLoading(false);
          setErrorMessage(data?.error?.response?.data?.statusCode?.toString());
          return;
        }
        if (data.loading) {
          return;
        }
        navigate("/");
      })
    );
  };

  return (
    <>
      <Form
        initialValues={{
          email: "",
          password: "",
        }}
        validation={{
          email: Yup.string()
            .required("Ce champs est obligatoire")
            .email("Merci de renseigner une adresse email valide"),
          password: Yup.string().required("Ce champs est obligatoire"),
        }}
        onSubmit={validateSigninForm}
      >
        <Typography
          variant="h2"
          component="div"
          style={{ "padding-top": "64px", "padding-bottom": "24px" }}
          gutterBottom
        >
          Welcome back ! 👋
        </Typography>
        <div class={"signin-form"}>
          <FormInput name="email" label="Adresse email" type="email" style={{ width: "30%" }} />
          <FormInput name="password" label="Mot de passe" type="password" style={{ width: "30%" }} />
          <Show when={connectionError()}>
            <InputError message={connectionError()} />
          </Show>

          <LoadingButton
            style={{ "margin-top": "24px", width: "30%" }}
            type={"submit"}
            value={"submit"}
            isLoading={isLoading}
          >
            CONNEXION
          </LoadingButton>
        </div>
      </Form>
      <div class="sigin-secondary-container">
        <div class="sigin-secondary-actions">
          <span>
            Mot de passe oublié ?
            <Button color={"secondary"} href={"sign-in"}>
              Reinitialisez-le
            </Button>
          </span>
          <span>
            Pas encore de compte ?
            <Button color={"secondary"} href={"/register"}>
              Inscrivez-vous !
            </Button>
          </span>
        </div>
      </div>
    </>
  );
};
