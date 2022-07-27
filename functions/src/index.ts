const functions = require("firebase-functions");
import { ctx } from "./core/ctx";
import * as service from "./service/product/index";

ctx.app.post("/", async (req: any, res: any) => {
  const body = req.body;
  const result = await service.create(ctx, body);
  res.send(result);
});

ctx.app.get("/", async (req: any, res: any) => {
  const body = req.body.id;
  const result = await service.get(ctx, body);
  res.send(result);
});

ctx.app.put("/", async (req: any, res: any) => {
  const body = req.body;
  const result = await service.update(ctx, body);
  res.send(result);
});

ctx.app.delete("/", async (req: any, res: any) => {
  const body = req.body.id;
  const result = await service.remove(ctx, body);
  res.send(result);
});

exports.product = functions.https.onRequest(ctx.app);
