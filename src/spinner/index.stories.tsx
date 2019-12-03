import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Spinner } from "../spinner";

const stories = storiesOf("UI Components/Spinner", module);

stories.add("default", () => <Spinner />);
