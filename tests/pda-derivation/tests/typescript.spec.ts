import * as anchor from "@safely-project/anchor";
import BN from "bn.js";
import { Keypair } from "@safecoin/web3.js";

describe("typescript", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.PdaDerivation;
  const base = Keypair.generate();
  const dataKey = Keypair.generate();
  const data = new BN(1);
  const seedA = 4;

  it("Inits the base account", async () => {
    await program.methods
      .initBase(data, dataKey.publicKey)
      .accounts({
        base: base.publicKey,
      })
      .signers([base])
      .rpc();
  });

  it("Inits the derived accounts", async () => {
    await program.methods
      .initMyAccount(seedA)
      .accounts({
        base: base.publicKey,
        base2: base.publicKey,
      })
      .rpc();
  });
});
