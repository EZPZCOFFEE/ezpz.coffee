import { flattenConnection } from "@shopify/hydrogen-react";
import classNames from "classnames";
import Link from "next/link";

import { shopifyQuery } from "@/lib/interfaces/shopify";
import Item from "@components/Item";
import { GET_COLLECTION, type ShopifyCollectionOperation } from "@utils/queries/get-collection";

import styles from "./styles.module.scss";

const ShopPage = async () => {
  const data = await shopifyQuery<
    ShopifyCollectionOperation["data"],
    ShopifyCollectionOperation["variables"]
  >(GET_COLLECTION, {
    collectionHandle: "shop-all",
  });

  const collection = data.collection;

  if (!collection?.products) {
    return <></>;
  }

  const products = flattenConnection(collection.products);

  return (
    <div className={classNames(styles.products)}>
      {products.map((product) => (
        <Link href={`/product/${product.handle}`} key={product.handle}>
          <Item product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ShopPage;
