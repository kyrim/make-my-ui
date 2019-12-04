import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";

const initialState: { file?: UploadedFile } = {};

import { Upload, UploadedFile } from "../upload";

const stories = storiesOf("Upload", module);

stories.add(
  "Upload Image",
  withState(initialState)(({ store }) => (
    <Upload
      onDrop={file =>
        store.set({
          file: { url: URL.createObjectURL(file), name: file.name }
        })
      }
      file={store.state.file}
    />
  )),
  {
    info: { inline: true }
  }
);

stories.add(
  "Upload PDF",
  withState(initialState)(({ store }) => (
    <Upload
      onDrop={file =>
        store.set({
          file: { url: URL.createObjectURL(file), name: file.name }
        })
      }
      file={store.state.file}
      accept=".pdf"
      shouldShowPreview={false}
    />
  )),
  {
    info: { inline: true }
  }
);

stories.add(
  "Upload PDF - Loading",
  withState(initialState)(({ store }) => (
    <Upload
      onDrop={file =>
        store.set({
          file: { url: URL.createObjectURL(file), name: file.name }
        })
      }
      file={store.state.file}
      isLoading={true}
      accept=".pdf"
      shouldShowPreview={false}
    />
  )),
  {
    info: { inline: true }
  }
);
