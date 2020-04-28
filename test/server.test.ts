import app from "../server";
import database from "../src/database";
import request from "supertest";
import { expect } from "chai";

describe("CRUD tags", () => {

    before(done => {
        database.connect()
            .then(() => {
                done()
            })
            .catch(err => {
                done(err)
            });
    })

    after(done => {
        database.close()
            .then(() => {
                done()
            })
            .catch(err => {
                done(err)
            });
    })

    it("GET /tags, should get five tags", done => {
        request(app)
            .get("/api/tags")
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body).to.be.an("array");
                expect(res.body).to.eql([]);
                done();
            });
    });

    it("POST /tags, should create a tag", done => {
        request(app)
            .post("/api/tags")
            .send({})
            .expect(200)
            .expect("Content-Type", /json/)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body).to.deep.equal(Object);
                expect(res.body).to.equal({});
                done();
            });
    });
});
