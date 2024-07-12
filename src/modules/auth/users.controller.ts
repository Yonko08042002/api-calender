import { db } from "@/lib/db";
import { Hono } from "hono";

export const router = new Hono();

router
  .get("/", async (c) => {
    const users = await db.user.findMany();
    return c.json(users);
  })

  .post("/login", async (c) => {
    const { email, password } = await c.req.json();
    if (email === "tin@gmail.com" && password === "123456") {
      return c.json({ message: "login success" });
    }
  });
