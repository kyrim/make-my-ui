import * as React from "react";
import { storiesOf } from "@storybook/react";

import { H1, H2, H3 } from "../typography";

const stories = storiesOf("Typography", module);

stories.add("H1", () => <H1>Header 1 size</H1>, { info: { inline: true } });

stories.add("H2", () => <H2>Header 2 size</H2>, { info: { inline: true } });

stories.add("H3", () => <H3>Header 3 size</H3>, { info: { inline: true } });
