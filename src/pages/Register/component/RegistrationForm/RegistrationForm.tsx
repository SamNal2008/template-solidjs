import Button from "@suid/material/Button";
import Typography from "@suid/material/Typography";
import { useNavigate } from "solid-app-router";
import { createEffect, createRoot, createSignal, JSXElement, Show } from "solid-js";
import { Form, FormType } from "solid-js-form";
import * as Yup from "yup";
import { LoadingButton } from "../../../../shared/components/button/LoadingButton";
import { FormInput } from "../../../../shared/components/form/FormInput";
import InputError from "../../../../shared/components/form/InputError";
import { UserTheme } from "../../../../shared/enums/user";
import { AuthenticationService } from "../../../../shared/services/api/authentication";
import { numberRegex, specialCharacterRegex, upperCaseRegex } from "../../../../shared/utils/regex";
import "../../style/Register.css";
import { isDefined } from "../../../../shared/utils/validators";

interface IRegisterFields {
  username: string;
  password: string;
  email: string;
  passwordConfirmation: string;
}

export const RegistrationForm = (): JSXElement => {
  const [isFormLoading, setIsFormLoading] = createSignal(false);
  const [connectionError, setConnectionError] = createSignal<string | undefined>(undefined);

  const setErrorMessage = (errorCode?: string): void => {
    switch (errorCode) {
      case "409":
        setConnectionError("Votre adresse email existe déjà");
        break;
      default:
        setConnectionError("Une erreur est survenue, merci de réessayer");
        break;
    }
  };

  const navigate = useNavigate();

  const onValidateRegistrationForm = async (form: FormType.Context<IRegisterFields>): Promise<void> => {
    const values = form.values;
    if (!form.isSubmitting || !form.isValid) {
      return;
    }
    const [data] = AuthenticationService.signUp({
      email: values.email.toLowerCase(),
      password: values.password,
      theme: UserTheme.DARK,
      userName: values.username,
    });
    createRoot(() =>
      createEffect(() => {
        setIsFormLoading(data.loading);
        if (isDefined(data.error)) {
          setIsFormLoading(false);
          setErrorMessage(data?.error?.response?.data?.statusCode?.toString());
          return;
        }
        if (data.loading) return;
        navigate("/");
      })
    );
  };

  return (
    <Form
      initialValues={{
        email: "",
        password: "",
        passwordConfirmation: "",
        username: "",
      }}
      validation={{
        password: Yup.string()
          .required("Ce champs est obligatoire")
          .min(8, "Votre mot de passe doit faire 8 caractères minimum")
          .matches(upperCaseRegex, "Votre mot de passe doit contenir une majuscule")
          .matches(specialCharacterRegex, "Votre mot de passe doit contenir un caractère spécial")
          .matches(numberRegex, "Votre mot de passe doit contenir un chiffre"),
        email: Yup.string()
          .email("Vous devez entrer une adresse email valide")
          .required("Merci de renseigner votre adresse email"),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref("password"), null], "Les mots de passe ne sont pas identiques")
          .required("Ce champs est obligatoire"),
        username: Yup.string().required("Ce champs est obligatoire"),
      }}
      onSubmit={onValidateRegistrationForm}
    >
      <div class="register-container">
        <div class="register-form">
          <Typography variant="h5">Renseigner vos informations</Typography>
          <div class={"registration-fields"}>
            <FormInput name="username" label="Nom d'utilisateur" type="text" />
            <FormInput name="email" label="Adresse email" type="email" />
            <FormInput name="password" label="Mot de passe" type="password" />
            <FormInput name="passwordConfirmation" label="Confirmer votre mot de passe" type="password" />
            <Show keyed={false} when={connectionError()}>
              <InputError message={connectionError()} />
            </Show>
          </div>
          <div class="form-actions">
            <LoadingButton
              style={{
                "margin-top": "24px",
              }}
              type={"submit"}
              value={"submit"}
              isLoading={isFormLoading}
            >
              S'inscrire
            </LoadingButton>
            <span style={{ "padding-top": "16px" }}>
              Vous avez déjà un compte ?
              <Button color={"secondary"} href={"sign-in"}>
                Connectez-vous
              </Button>
            </span>
          </div>
        </div>
      </div>
    </Form>
  );
};
