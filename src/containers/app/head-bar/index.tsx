import * as React from "react";
import styles from "./style.module.less";

export interface IHeadBarProps {
}

export function HeadBar(props: IHeadBarProps) {
  return (
    <div className={styles.dd} >
      <div className={styles["top-power-bar"]}>fabric-ui-starter</div>
      <div className={styles["top-power-bar-profile"]}>profile</div>
    </div>
  );
}
