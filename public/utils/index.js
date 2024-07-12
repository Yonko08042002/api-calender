"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const hono_1 = require("hono");
const vercel_1 = require("hono/vercel");
const users_controller_1 = require("../modules/auth/users.controller");
exports.config = {
    runtime: "edge",
};
const app = new hono_1.Hono().basePath("/api");
app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});
app.route("/", users_controller_1.router);
exports.default = (0, vercel_1.handle)(app);
//# sourceMappingURL=index.js.map