import { Product } from "../../core/models/product";
import * as fire from "./fireBase/index"

export async function create(ctx: any, product: Product) {
    const result = fire.create(ctx.db, product)
    return result;
}

export async function get(ctx: any, id: string) {
    const result = fire.get(ctx.db, id)
    return result;
}

export async function update(ctx: any, product: Product) {
    if (!product.id) {
        throw new Error("Product ID needed");
    }
    const result = fire.update(ctx.db, product)
    return result;
}

export async function remove(ctx: any, id: string) {
    const result = fire.remove(ctx.db, id)
    return result;
}