import * as React from "react";
import classNames from "classnames";
import styles from "./style.module.less";
import { LeftNavBar } from "../left-nav-bar";

export interface IWrapperProps {
}

// TODO:
// https://teams.microsoft.com/_?tenantId=cb73138e-6a40-422c-85db-ec6c63c1901d#/apps/5a0e35f9-d3c8-45b6-9dd9-983ab47f1b83/sections/help

export function Wrapper(props: IWrapperProps) {
  return (
    <div className={styles.dd}>
      <LeftNavBar />
      <div className={styles["page-content-wrapper"]}>
        <div className={styles["flex-fill"]}>
          <div className={classNames(styles["messages-header"], styles["flex-fill"], styles["section-divider"])}>
            <div className={styles["title-bar"]}>
              <div className={styles["information"]}>
                <div className={styles["text-info"]}>
                  <div className={styles["title-bar-icon"]}>
                    <div className={styles["icon"]} />
                  </div>
                  <h2>fabric-ui-starter</h2>
                </div>
              </div>
            </div>
            <div className={styles["tab-bar-wrapper"]}>
              <ul className={styles["tabs"]}>
                <li>
                  <div className={styles["btn-item"]}>
                    <a className={classNames(styles["btn"], styles["btn-select"])} href="void(0)">
                      btn
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles["btn-item"]} >
                    <a className={styles["btn"]} href="void(0)">
                      btn
                    </a>
                  </div>
                </li>
                <li>
                  <div className={styles["btn-item"]}>
                    <a className={styles["btn"]} href="void(0)">
                      btn
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["base-tab"]}>
            <div className={styles["subCont"]}>subCont</div></div>
        </div>
      </div>
    </div>
  );
}
