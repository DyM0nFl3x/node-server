import * as path from "path";
import * as fs from "fs";
import { clg } from "../utility/reFunction";
const filePath = path.join(
  process.cwd(),
  "../node-server/src/data/product.json",
);
const product = fs.readFileSync(filePath, "utf-8");
// clg(product)
export const readProduct = () => JSON.parse(product);