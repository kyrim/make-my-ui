import * as React from "react";
import { storiesOf } from "@storybook/react";

import { Panel } from "../panel";
import styled from "styled-components";

const stories = storiesOf("Panel", module);

const PanelContainer = styled.div`
  width: 200px;
  height: 200px;
`;

stories.add("default", () => (
  <PanelContainer>
    <Panel />
  </PanelContainer>
));
