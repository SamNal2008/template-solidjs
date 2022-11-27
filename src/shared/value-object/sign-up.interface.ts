import { isStringDefined } from "src/shared/utils/validators";

class Email {
  private readonly _value: string;

  public get value(): string {
    return this._value;
  }

  private constructor(value: string) {
    if (!isStringDefined(value))
      throw new TypeError("Invalid email definition with value : " + value);
    this._value = value;
  }

  of(emailValue: string): Email {
    return new Email(emailValue);
  }
}

class Password {
  private readonly _value: string;

  public get value(): string {
    return this._value;
  }

  private constructor(value: string) {
    if (!isStringDefined(value))
      throw new TypeError("Invalid email definition with value : " + value);
    this._value = value;
  }

  of(value: string): Password {
    return new Password(value);
  }
}

class UserName {
  private readonly _value: string;

  public get value(): string {
    return this._value;
  }

  private constructor(value: string) {
    if (!isStringDefined(value))
      throw new TypeError("Invalid email definition with value : " + value);
    this._value = value;
  }

  of(value: string): UserName {
    return new UserName(value);
  }
}

export default interface ISignUpInfo {
  email: Email;
  userName: UserName;
  password: Password;
}
