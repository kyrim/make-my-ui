import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Checkbox } from "../checkbox";

const stories = storiesOf("UI Components/Checkbox", module);

stories.add("default", () => <Checkbox label="Username" />, {
  info: { inline: true }
});

stories.add(
  "default disabled",
  () => <Checkbox label="Description" state="disabled" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default loading",
  () => <Checkbox label="Description" state="loading" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default valid",
  () => <Checkbox label="Description" validationState="valid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid",
  () => <Checkbox label="Description" validationState="invalid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid with error",
  () => (
    <Checkbox label="Description" validationState="invalid" message="Message" />
  ),
  {
    info: { inline: true }
  }
);
