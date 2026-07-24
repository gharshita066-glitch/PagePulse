const request = require("supertest");
const app = require("../server");

describe("Page Pulse API", () => {

    test("GET / should return success message", async () => {
        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);
        expect(res.text).toContain("Page Pulse Backend");
    });

    test("POST /audit without URL should return 400", async () => {
        const res = await request(app)
            .post("/audit")
            .send({});

        expect(res.statusCode).toBe(400);
        expect(res.body.error).toBe("Please provide a URL");
    });

});
test("POST /audit with invalid URL should return an error", async () => {
    const res = await request(app)
        .post("/audit")
        .send({
            url: "invalid-url"
        });

    expect(res.statusCode).toBe(500);
    expect(res.body.error).toBeDefined();
});