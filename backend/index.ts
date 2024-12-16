import cors from "@koa/cors";
import Router from "@koa/router";
import Koa from "koa";
import serveStatic from "koa-static";
import {bodyParser} from "@koa/bodyparser";

import esamiRoutes from "./routes/routes_esami"

const app = new Koa();
const router = new Router();

app.use(cors());
app.use(bodyParser())
app.use(serveStatic(`./public`, {}));

app.use(async (ctx, next) => {
    console.log("Incoming HTTP request");
    await next();
});

router.get("/", async (ctx) => {
    ctx.body = "<p>Home page</p>";
});

app.use(router.routes()).use(router.allowedMethods());
app.use(esamiRoutes.routes()).use(esamiRoutes.allowedMethods());

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});