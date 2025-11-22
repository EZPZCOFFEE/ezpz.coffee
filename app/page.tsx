import styles from "./styles.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.panel}>
        <h1 className={styles.panelTitle}>Customize</h1>
      </div>
      <div className={styles.display}>
        <h2 className={styles.displayHeader}>
          Preview <span className={styles.productTitle}>225g bag</span>
        </h2>
        <div className={styles.displayContent}>Display</div>
        <div className={styles.displayFooter}>
          <span>Selected option: Bottom</span>
          <span>Works best for pictures with high details</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
