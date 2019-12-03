import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Skeleton } from "../skeleton";

const stories = storiesOf("UI Components/Skeleton", module);

stories.add("default", () => <Skeleton />, { info: { inline: true } });
