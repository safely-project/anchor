import { Idl } from "../../idl.js";
import { Coder } from "../index.js";
import { SafeTokenInstructionCoder } from "./instruction.js";
import { SafeTokenStateCoder } from "./state.js";
import { SafeTokenAccountsCoder } from "./accounts.js";
import { SafeTokenEventsCoder } from "./events.js";

/**
 * Coder for the SPL token program.
 */
export class SafeTokenCoder implements Coder {
  readonly instruction: SafeTokenInstructionCoder;
  readonly accounts: SafeTokenAccountsCoder;
  readonly state: SafeTokenStateCoder;
  readonly events: SafeTokenEventsCoder;

  constructor(idl: Idl) {
    this.instruction = new SafeTokenInstructionCoder(idl);
    this.accounts = new SafeTokenAccountsCoder(idl);
    this.events = new SafeTokenEventsCoder(idl);
    this.state = new SafeTokenStateCoder(idl);
  }
}
