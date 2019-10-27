import * as React from "react";
import styles from "./style.module.less";

export interface ILeftNavBarProps {
}

export function LeftNavBar(props: ILeftNavBarProps) {
  return (
    <div className={styles.dd}>
      <ul>
        <li>
          <button>btn</button>
        </li>
        <li>
          <button className={styles["sel"]}>btn</button>
        </li>
        <li className={styles["spacer"]} />
        <li>
          <button>btn</button>
        </li>
      </ul>
    </div>
  );
}
