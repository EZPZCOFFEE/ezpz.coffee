"use client";

import { Image, ProductPrice } from "@shopify/hydrogen-react";
import classNames from "classnames";
import { motion } from "framer-motion";

import { Product } from "@/gql/graphql";

import styles from "./styles.module.scss";

interface Props {
  product: {
    title: Product["title"];
    availableForSale: Product["availableForSale"];
    featuredImage?: {
      url: string;
    } | null;
    priceRange: Product["priceRange"];
  };
  className?: string;
}

const Item: React.FC<Props> = ({ product, className }) => {
  const { title, featuredImage, availableForSale } = product;
  const src = featuredImage?.url;

  if (!src) return null;

  return (
    <motion.div className={classNames(styles["item-container"], className)} transition={{ duration: 0.5 }}>
      <Image
        src={src}
        alt={title}
        sizes="(max-width: 768px) 50vw, 100vw"
        className={classNames(styles.image, "lazyload", "lazyloaded", {
          [styles["image--not-available"]]: !availableForSale,
        })}
      />
      <div className={styles["info-container"]}>
        <p className={styles.title}>{title}</p>
        <ProductPrice data={product} />
      </div>
    </motion.div>
  );
};

export default Item;
