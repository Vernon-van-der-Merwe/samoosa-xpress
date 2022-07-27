import { Product } from "../../../core/models/product";

const COLLECTION_NAME = "products";

export async function get(db: any, id: string): Promise<Product | Product[]> {
  let result;
  console.log(id)
  if (id) {
    result = await getOne(db, id);
  } else {
    result = await getAll(db);
  }

  return result;
}

export const create = async (db: any, product: Product) => {
  const docRef = await db.collection(COLLECTION_NAME).add(product);

  return {
    id: docRef.id,
    ...product,
  } as Product;
};

export const update = async (
  db: any,
  product: Product
): Promise<Product> => {
  let id = product.id;
  delete product.id

  await db.collection(COLLECTION_NAME).doc(id).update(product);
  return {
    id: id,
    ...product,
  } as Product;
};

export async function remove(db: any, id: string) {
  await db.collection(COLLECTION_NAME).doc(id).delete();
}

async function getAll(db: any) {
  console.log("getAll")

  const snapshot = await db.collection(COLLECTION_NAME).get();
  let data: any = [];

  snapshot.docs.map((_data: any) => {
    data.push({
      id: _data.id,
      ..._data.data(),
    });
  });

  return data;
}

async function getOne(db: any, id: string) {
  const snapshot = await db.collection(COLLECTION_NAME).get();
  let data: any = [];

  snapshot.docs.map((_data: any) => {
    if (id == _data.id) {
      data.push({
        id: _data.id,
        ..._data.data(),
      });
    }
  });

  return data;
}