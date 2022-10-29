import { Form } from "solid-js-form";
import { useAuth } from "../../shared/components/context/AuthenticationContext";
import "./style/Profile.css";
import { JSXElement } from "solid-js";

/* interface ProfileForm {
  email: string;
  oldPassword: string;
  newPassword: string;
  newPasswordConfirmation: string;
} */

export const Profile = (): JSXElement => {
  const { authInfo } = useAuth();
  const user = authInfo.user;

  return (
    <div class="profile-container">
      <h1>Votre profil : {user.userName}</h1>
      <Form
        initialValues={{
          email: "",
          oldPassword: "",
          newPassword: "",
          newPasswordConfirmation: "",
        }}
        onSubmit={async (e): Promise<void> => console.log(e)}
      >
        <div class="profile-form">
          <div class="div1">Div 1</div>
          <div class="div2">Div 2</div>
          <div class="div3">DIV 3</div>
        </div>
      </Form>
    </div>
  );
};
