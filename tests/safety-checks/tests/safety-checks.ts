import * as anchor from "@safely-project/anchor";
import { Program } from "@safely-project/anchor";
import { SafetyChecks } from "../target/types/safety_checks";

describe("safety-checks", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.SafetyChecks as Program<SafetyChecks>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
