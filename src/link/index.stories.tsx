import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Link } from "../link";
import { IoMdSettings } from "react-icons/io";

const stories = storiesOf("UI Components/Link", module);

stories.add(
  "default",
  () => <Link ariaLabel="this is a link" text="This is a link" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default with icon",
  () => (
    <Link
      ariaLabel="This is a link"
      icon={IoMdSettings}
      text="This is a link"
    />
  ),
  { info: { inline: true } }
);
