import * as React from "react";
import { storiesOf } from "@storybook/react";
import { withState } from "@dump247/storybook-state";
import { IoIosSearch } from "react-icons/io";
import debounce from "debounce";

import { Autocomplete, AutocompleteItem } from "../autocomplete";

interface State {
  items: AutocompleteItem[];
  isLoading: boolean;
}

const initialState: State = {
  items: [
    {
      value: "Item 1",
      data: "Item 1 data"
    },
    {
      value: "Item 2",
      data: "Item 2 data"
    },
    {
      value: "Item 3",
      data: "Item 3 data"
    }
  ],
  isLoading: false
};

const stories = storiesOf("Autocomplete", module);

stories.add(
  "default",
  () => (
    <Autocomplete
      label="Search for..."
      items={initialState.items}
      onSelect={() => console.log("yeh!")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "default loading",
  () => (
    <Autocomplete
      label="Search for..."
      items={initialState.items}
      onSelect={() => console.log("yeh!")}
      isLoading
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "icon primary",
  () => (
    <Autocomplete
      icon={IoIosSearch}
      label="Search for..."
      items={initialState.items}
      onSelect={() => console.log("yeh!")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "icon",
  () => (
    <Autocomplete
      icon={IoIosSearch}
      color="#000000"
      label="Search for..."
      items={initialState.items}
      onSelect={() => console.log("yeh!")}
    />
  ),
  {
    info: { inline: true }
  }
);

stories.add(
  "async",
  withState(initialState)(({ store }) => (
    <Autocomplete
      icon={IoIosSearch}
      color="#000000"
      label="Search for..."
      items={store.state.items}
      isLoading={store.state.isLoading}
      onInputChange={debounce((val: string) => {
        store.set({ isLoading: true });
        setTimeout(
          () =>
            store.set({
              isLoading: false,
              items: initialState.items.filter(item => item.value.includes(val))
            }),
          1000
        );
      }, 200)}
      onSelect={() => console.log("yeh!")}
    />
  )),
  {
    info: { inline: true }
  }
);
