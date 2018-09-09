/* global describe it */

import { expect } from "chai";
import { app } from "../src/app";
import request from "supertest";

describe("Module Search API", () => {
  describe("List Endpoint", () =>
    it("responds with an array of modules", done => {
      request(app)
        .get("/search")
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("array");
          res.body.map(module => {
            expect(module).to.be.an("object");
            expect(module).to.have.keys(
              "id",
              "authorId",
              "short",
              "description",
              "hasXML",
              "author",
              "lastUpdate",
              "currentVersionId"
            );
          });
          if (err) return done(err);
          done();
        });
    }));
});
