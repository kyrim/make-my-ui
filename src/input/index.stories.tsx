import * as React from "react";
import { storiesOf } from "@storybook/react";
import { IoIosMail } from "react-icons/io";

import { Input } from "../input";

const stories = storiesOf("Input", module);

stories.add("default", () => <Input label="Username" />, {
  info: { inline: true }
});

stories.add(
  "default disabled",
  () => <Input label="Username" state="disabled" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default loading",
  () => <Input label="Username" state="loading" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default valid",
  () => <Input label="Username" validationState="valid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid",
  () => <Input label="Username" validationState="invalid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "default invalid with error",
  () => <Input label="Username" validationState="invalid" message="Message" />,
  {
    info: { inline: true }
  }
);

stories.add("With mail icon", () => <Input label="Email" icon={IoIosMail} />, {
  info: { inline: true }
});

stories.add(
  "With mail icon disabled",
  () => <Input label="Email" icon={IoIosMail} state="disabled" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "With mail icon valid",
  () => <Input label="Email" icon={IoIosMail} validationState="valid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "With mail icon invalid",
  () => <Input label="Email" icon={IoIosMail} validationState="invalid" />,
  {
    info: { inline: true }
  }
);

stories.add(
  "With mail icon invalid message",
  () => (
    <Input
      label="Email"
      icon={IoIosMail}
      validationState="invalid"
      message="This mail aint no good homie!"
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add("password type", () => <Input label="Password" type="password" />, {
  info: { inline: true }
});
