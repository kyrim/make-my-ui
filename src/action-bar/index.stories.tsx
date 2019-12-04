import * as React from "react";
import { storiesOf } from "@storybook/react";

import { ActionBar } from "../action-bar";
import { Link } from "../link";

const stories = storiesOf("ActionPanel", module);

stories.add(
  "default",
  () => (
    <ActionBar>
      <div>1</div>
      <Link ariaLabel="This is a link for 2">2</Link>
      <div>3</div>
    </ActionBar>
  ),
  { info: { inline: true } }
);
