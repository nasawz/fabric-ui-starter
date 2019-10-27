import * as React from "react";
import { HeadBar } from "./head-bar";
import { Wrapper } from "./wrapper";

export interface IMainProps {
}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
      <>
        <HeadBar />
        <Wrapper />
      </>
    );
  }
}
