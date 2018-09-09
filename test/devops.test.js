/* global describe it */

import { expect } from "chai";
import { app } from "../src/app";
import request from "supertest";

describe("Server Information API", () => {
  describe("Uptime Endpoint", () =>
    it("responds with a message", done => {
      request(app)
        .get("/devops/ping")
        .end((err, res) => {
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an("object");
          expect(res.text).to.be.a("string");
          if (err) return done(err);
          done();
        });
    }));
});
