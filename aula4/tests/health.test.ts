import { app } from "index"
import supertest from "supertest"

describe("/health", () => {
    it("health Checks?", async () => { 
       const result = await supertest(app).get("/health");
       const status = result.status;
        expect(status).toEqual(200)
    });
})