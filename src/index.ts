import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { router as authRouter } from "./modules/auth/users.controller";

const app = new Hono().basePath("/api");

app.use("*", logger());
app.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.route("/", authRouter);
app.route("/users", authRouter);
serve(app, () => {
  console.log("Server is running on http://localhost:3000");
});

export default app;
