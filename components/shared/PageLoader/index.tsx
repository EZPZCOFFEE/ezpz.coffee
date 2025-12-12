import Image from "next/image";

import styles from "./styles.module.scss";

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <Image src="/logo.svg" alt="EZPZ Coffee" width={120} height={97} priority className={styles.logo} />
        <div className={styles.shimmer} />
      </div>
    </div>
  );
};

export default PageLoader;
