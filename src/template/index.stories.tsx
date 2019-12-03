import * as React from "react";
import { storiesOf } from "@storybook/react";

import { TemplateComponent } from "../template";

const stories = storiesOf("UI Components/TemplateComponent", module);

stories.add("default", () => <TemplateComponent />, { info: { inline: true } });
