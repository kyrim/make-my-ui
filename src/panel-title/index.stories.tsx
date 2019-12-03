import * as React from "react";
import { storiesOf } from "@storybook/react";

import { PanelTitle } from "../panel-title";
import { IoMdFunnel } from "react-icons/io";

const stories = storiesOf("Modules/Panel Title", module);

stories.add("default", () => <PanelTitle>Highest Value Assets</PanelTitle>, {
  info: { inline: true }
});

stories.add(
  "default with icon",
  () => (
    <PanelTitle>
      <IoMdFunnel /> Highest Value Assets
    </PanelTitle>
  ),
  {
    info: { inline: true }
  }
);
