import Image from "next/image";

import styles from "./styles.module.scss";

const PageLoader = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/logo.svg"
        alt="EZPZ Coffee"
        width={1518}
        height={1227}
        unoptimized
        priority
        className={styles.logo}
        style={{ width: "auto" }}
      />
    </div>
  );
};

export default PageLoader;
