import { JWT_TOKEN_KEY, USER_KEY } from "../../components/context/AuthenticationContext";
import { LoginDto, SignInDto, SignUpFormDto } from "../../dto/authentication";
import { createResourceWrapper, Method, Prefix } from "../../utils/request";
import { Persist } from "../../utils/store";
import { ApiService } from "./api";
import { ResourceReturn } from "solid-js";

export abstract class AuthenticationService extends ApiService {
  static readonly PREFIX = Prefix.AUTH;
  static readonly END_POINTS = {
    signUp: "sign-up",
    signIn: "sign-in",
    sendEmailToResetPassword: "send-email-to-reset-password",
  };

  @Persist(JWT_TOKEN_KEY, "access_token")
  @Persist(USER_KEY, "user")
  public static signUp(signUpFormDto: SignUpFormDto): ResourceReturn<LoginDto, undefined> {
    return createResourceWrapper<LoginDto>({
      method: Method.POST,
      prefix: AuthenticationService.PREFIX,
      endpoint: AuthenticationService.END_POINTS.signUp,
      body: signUpFormDto,
    });
  }

  @Persist(JWT_TOKEN_KEY, "access_token")
  @Persist(USER_KEY, "user")
  public static signIn(signInDto: SignInDto): ResourceReturn<LoginDto, undefined> {
    return createResourceWrapper<LoginDto>({
      method: Method.POST,
      prefix: AuthenticationService.PREFIX,
      endpoint: AuthenticationService.END_POINTS.signIn,
      body: signInDto,
    });
  }

  public static readonly sendEmailToResetPassword = (email: string): ResourceReturn<never, undefined> =>
    createResourceWrapper<never>({
      method: Method.POST,
      prefix: AuthenticationService.PREFIX,
      endpoint: AuthenticationService.END_POINTS.sendEmailToResetPassword,
    });
}
