import { Program } from "../index.js";
import { program as tokenProgram, SafeToken } from "./token.js";

export { SafeToken } from "./token.js";

export class Spl {
  public static token(): Program<SafeToken> {
    return tokenProgram();
  }
}
