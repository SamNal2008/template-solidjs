import { toCamel } from "./text";

const currentModeEnvironment = import.meta.env.MODE; // => Define the current environment
const environmentVariables = import.meta.env;

console.log(currentModeEnvironment);

const loadEnvironment = (): { [key: string]: string } => {
  const toEnvironmentKey = (s: string): string => toCamel(s.replace("VITE_", "").toLowerCase());

  const env: { [key: string]: any } = {};

  Object.keys(environmentVariables)
    .filter((key: string) => key.startsWith("VITE_"))
    .forEach((key) => (env[toEnvironmentKey(key)] = environmentVariables[key]));

  return env;
};

export const environment = loadEnvironment();
