import * as React from "react";
import { storiesOf } from "@storybook/react";

import { TextArea } from "../textarea";

const stories = storiesOf("TextArea", module);

stories.add("default", () => <TextArea label="Username" />, {
  info: { inline: true }
});

stories.add(
  "default disabled",
  () => <TextArea label="Description" state="disabled" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default loading",
  () => <TextArea label="Description" state="loading" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default valid",
  () => <TextArea label="Description" validationState="valid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid",
  () => <TextArea label="Description" validationState="invalid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid with error",
  () => (
    <TextArea label="Description" validationState="invalid" message="Message" />
  ),
  {
    info: { inline: true }
  }
);
