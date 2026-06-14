import type { IncomingMessage, ServerResponse } from "http";
import { checkIf, clg, giveResponse } from "../utility/reFunction";
import { readProduct } from "../service/product.service";
import type { ISingleProduct } from "../types/product.types";
import { bodyParser } from "../utility/bodyParser";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;
  const urlPars = url?.split("/");
  const id = urlPars && urlPars[1] === "products" ? Number(urlPars[2]) : null;
  // clg({id,url,urlPars})
  // all products
  if (checkIf(req, "/products", "GET")) {
    const product = readProduct();
    giveResponse(res, 200, "application/json", {
      message: "found!",
      data: product,
    });
    //single product
  } else if (req.method === "GET" && id !== null) {
    const product = readProduct().find((i: ISingleProduct) => i.id == id);
    giveResponse(res, 200, "application/json", {
      message: "found!",
      data: product,
    });
  } else if (method === "POST" && url === "/products") {
    const body = await bodyParser(req);
    const data = {
      id: Date.now(),
      ...body,
    };
    clg(data);
    giveResponse(res, 200, "application/json", {
      message: "will write!",
    });
  } else {
    giveResponse(res, 404, "application/json", {
      message: "Not found!",
    });
  }
};
