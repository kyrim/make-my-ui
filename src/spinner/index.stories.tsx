import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Spinner } from "../spinner";

const stories = storiesOf("Spinner", module);

stories.add("default", () => <Spinner />);
