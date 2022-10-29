export const isDefined = (valueToTest?: any): boolean => Boolean(valueToTest);

export const isArrayDefined = (arrayToTest?: any[]): boolean =>
  isDefined(arrayToTest) && (arrayToTest as any[]).length > 0;

export const isStringDefined = (stringToTest?: string | null): boolean =>
  isDefined(stringToTest) && stringToTest !== "";
