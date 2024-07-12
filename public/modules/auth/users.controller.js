"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const hono_1 = require("hono");
exports.router = new hono_1.Hono();
exports.router
    .get("/", async (c) => {
    return c.json({ message: "Hello anh Tin" });
})
    .post("/login", async (c) => {
    const { email, password } = await c.req.json();
    if (email === "tin@gmail.com" && password === "123456") {
        return c.json({ message: "login success" });
    }
});
//# sourceMappingURL=users.controller.js.map