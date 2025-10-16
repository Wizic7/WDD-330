import productList from "./productList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

productList("tents", document.querySelector(".product-list"));