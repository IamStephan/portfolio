import { match } from "node-match-path";

export const matchURL = (pattern: string | Array<string>, path: string) => {
  if (typeof pattern === "string") {
    return match(pattern, path).matches;
  }

  if (Array.isArray(pattern)) {
    return pattern.some((v) => {
      return match(v, path).matches;
    });
  }

  return false;
};
