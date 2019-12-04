import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Image } from "../image";

const stories = storiesOf("Image", module);

stories.add("default", () => <Image alt="Default image" />, {
  info: { inline: true }
});
