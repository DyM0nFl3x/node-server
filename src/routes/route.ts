import type { IncomingMessage, ServerResponse } from "http";
import { checkIf, clg, giveResponse } from "../utility/reFunction";
import { productController } from "../controller/product.controller";

export const route = (req: IncomingMessage, res: ServerResponse) => {
  // root route
  if (checkIf(req, "/", "GET")) {
    giveResponse(res, 200, "application/json", { message: "this is root" });
    // product route
  } else if (req.url?.startsWith("/products")) {
    productController(req, res);
  } else {
    giveResponse(res, 404, "application/json", { message: "No data found!" });
  }
};
