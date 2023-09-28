import supertest from "supertest";

import app from "./../src/app";

const api = supertest(app);

describe("API test", () => {
  it("should return 200 when ask /health", async () => {
    const { status, text } = await api.get("/health");
    expect(status).toBe(200);
    expect(text).toBe("OK!");
  })
  it("should give me fibonacci sequences",async () => {
    const result = await api.get("/fibonacci?elements=2");
    expect(result.body).toHaveLength(2);
  })
})