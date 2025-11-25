import classNames from "classnames";
import type { PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface LabelProps {
  className?: string;
  hint?: string;
}

const Label = ({ children, className, hint }: PropsWithChildren<LabelProps>) => {
  return (
    <div className={classNames(styles.label, className)}>
      <span>{children}</span>
      {hint && <span className={styles.hint}>{hint}</span>}
    </div>
  );
};

export default Label;
