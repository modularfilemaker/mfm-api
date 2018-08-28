import assert from "assert";

describe("Search", () => {
  it("works", () => {
    return rp({
      url: "/search",
      method: "GET",
      json: true
    }).then(r => {
      assert.deepEqual(Array.isArray(r), true);

      const firstRecordData = r[0];

      assert.deepEqual(typeof firstRecordData === "object", true);
    });
  });
});

describe("version", () => {
  it("works", () => {
    return rp({
      url: "/version/3488FFD3-754F-41F3-93C9-4431878EE745",
      method: "GET",
      json: true
    }).then(r => {
      return assert.deepEqual(r.Id, "3488FFD3-754F-41F3-93C9-4431878EE745");
    });
  });
});
