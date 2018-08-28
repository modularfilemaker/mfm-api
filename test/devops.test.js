import assert from "assert";

describe("Devops Route", () => {
  it("responds with 'pong'", () => {
    return rp({
      url: "/devops/ping"
    }).then(r => {
      console.log(r);
      assert.deepEqual(r, "pong");
    });
  });
});