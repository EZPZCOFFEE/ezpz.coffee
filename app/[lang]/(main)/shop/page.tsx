import Image from "next/image";
import Link from "next/link";
import { getLocale } from "next-intl/server";

import { DEMO_PRODUCTS } from "@/lib/data/demo-products";

import styles from "./styles.module.scss";

const ShopPage = async () => {
  const locale = await getLocale();

  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Shop</h1>
        <div className={styles.grid}>
          {DEMO_PRODUCTS.map((product) => (
            <Link
              key={product.handle}
              href={`/${locale}/product/${product.handle}`}
              className={styles.cardLink}
            >
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.badge}>{product.badge}</span>
                  <h2 className={styles.productName}>{product.name}</h2>
                  <p className={styles.description}>{product.description}</p>
                </div>
                <div className={styles.cardFooter}>
                  <span className={styles.price}>{product.price} / {product.weight}</span>
                  <span className={styles.btn}>Order now</span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ShopPage;
