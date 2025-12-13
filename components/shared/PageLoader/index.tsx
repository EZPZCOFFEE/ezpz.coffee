import Image from "next/image";

import styles from "./styles.module.scss";

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <Image src="/logo.svg" alt="EZPZ Coffee" width={80} height={65} priority className={styles.logo} />
    </div>
  );
};

export default PageLoader;
