import { createResourceWrapper, Method, Prefix } from "../../utils/request";
import { Persist } from "../../utils/store";
import { ResourceReturn } from "solid-js";

abstract class ExampleService {
  private static readonly PREFIX = Prefix.DEFAULT;
  private static readonly END_POINTS = {
    example: "example-endpoint",
  };

  private constructor() {}

  @Persist("KEY_TO_PERSIST", "path", "to", "value")
  public static signUp(paramToSend: any): ResourceReturn<any, undefined> {
    return createResourceWrapper<any>({
      method: Method.POST,
      prefix: ExampleService.PREFIX,
      endpoint: ExampleService.END_POINTS.example,
      body: paramToSend,
    });
  }
}
