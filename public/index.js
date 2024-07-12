"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const logger_1 = require("hono/logger");
const cors_1 = require("hono/cors");
const users_controller_1 = require("./modules/auth/users.controller");
const app = new hono_1.Hono().basePath("/api");
app.use("*", (0, logger_1.logger)());
app.use("*", (0, cors_1.cors)({
    origin: [
        "http://localhost:5173",
        "https://airbnb-clone-nu-rouge.vercel.app",
    ],
    credentials: true,
}));
app.get("/", (c) => {
    return c.json({ message: "Hello Hono!" });
});
app.route("/", users_controller_1.router);
exports.default = app;
//# sourceMappingURL=index.js.map