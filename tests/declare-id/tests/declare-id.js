const anchor = require("@safely-project/anchor");
const splToken = require("@safecoin/safe-token");
const assert = require("assert");

describe("declare_id", () => {
  anchor.setProvider(anchor.Provider.local());
  const program = anchor.workspace.DeclareId;

  it("throws error!", async () => {
    try {
      await program.rpc.initialize();
      assert.ok(false);
    } catch (err) {
      assert.equal(err.code, 4100);
    }
  });
});
