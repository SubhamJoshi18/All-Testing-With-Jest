import app from "../src/app";
import supertest from "supertest";
import mongoose from "mongoose";

describe("Mongoose Testing", () => {
  beforeEach(async () => {
    await mongoose.connect("mongodb://localhost:27017/testing_jest");
  });

  afterEach(async () => {
    await mongoose.connection.close();
  });

  describe("Get all users", () => {
    it("should return all users", async () => {
      const resposne = await supertest(app).get("/api/user");
      expect(resposne.statusCode).toBe(200);
      expect(resposne.body.length).toBeGreaterThan(0);
    });

    it("should return  an empty array if there is no data", async () => {
      const resposne = await supertest(app).get("/api/user");
      expect(resposne.body.length).toBe(0);
    });
  });

  describe("get user by id", () => {
    it("should return by the given id", async () => {
      const mockData = { id: 1, name: "subham" };
      const response = await supertest(app).get("/api/user/1");
      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual(mockData);
      expect(response.body.name).toBe(mockData.name);
    });

    it("should return 404 if there is no id", async () => {
      const response = await supertest(app).get(`/api/user/1`);
      expect(response.statusCode).toBe(404);
      expect(response.body.length).toBeLessThan(1);
    });
  });

  describe("post user", () => {
    it("shoudl post user in the database", async () => {
      const mockdata = { id: 3, name: "amit" };
      const response = await supertest(app).post("/api/user").send(mockdata);
      expect(response.statusCode).toBe(200);
      expect(response.body.name).toBe(mockdata.name);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it("should return undefined if there occur an error during post", async () => {
      const mockdata = { id: 3, name: "amit" };
      const response = await supertest(app).post("/api/user").send(mockdata);
      expect(response.body.name).toBeUndefined();
    });
  });

  describe("update user", () => {
    it("should update the given user by id", async () => {
      const mockdata = { id: 3, name: "subu" };
      const response = await supertest(app).put("/api/user/3").send(mockdata);
      expect(response.body.length).toBeGreaterThan(0);
      expect(response.body.name).toBe(mockdata.name);
      expect(response.statusCode).toBe(200);
    });
    it("should return undefined if there occur an error duriing updating", async () => {
      const mockdata = { id: 3, name: "subu" };
      const response = await supertest(app).put("/api/user/3").send(mockdata);
      expect(response.body.name).not.toBe(mockdata.name);
      expect(response.body.name).toBeUndefined();
    });
  });

  describe("delete User", () => {
    it("should delete the given user with its id", async () => {
      const response = await supertest(app).delete(`/api/user/3`);
      expect(response.body.message).toBe("Deleted");
      expect(response.statusCode).toBe(200);
    });
    it("should return undefined if ihe message is undefined", async () => {
      const response = await supertest(app).delete("api/user/3");
      expect(response.body.message).toBeUndefined();
    });
  });
});
