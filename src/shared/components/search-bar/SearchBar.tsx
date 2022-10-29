import ClearIcon from "@suid/icons-material/Clear";
import Chip from "@suid/material/Chip";
import IconButton from "@suid/material/IconButton";
import Stack from "@suid/material/Stack";
import TextField from "@suid/material/TextField";
import { createEffect, createRoot, createSignal, For, JSXElement, ResourceReturn, splitProps } from "solid-js";
import { PaginateQuery } from "src/shared/utils/request";
import { Paginated } from "src/shared/utils/paginated";
import SearchIcon from "@suid/icons-material/Search";
import { isStringDefined } from "../../utils/validators";

type SearchBarProps<T> = {
  fetchFunction: (options: PaginateQuery) => ResourceReturn<Paginated<T>, undefined>;
} & any;

type KeyPressed = KeyboardEvent & {
  currentTarget: HTMLDivElement;
  target: HTMLTextAreaElement;
};

export const SearchBar = <T,>(props: SearchBarProps<T>): JSXElement => {
  const placeholder = { data: [{ name: "" }] } as unknown as Paginated<any>;

  const [paginatedEntities, setPaginatedEntities] = createSignal<Array<Paginated<T>>>([placeholder]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [lastSearchedElement, setLastSearchedElement] = createSignal("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = createSignal(false);
  const [currentResearch, setCurrentResearch] = createSignal("");
  const [searchedElements, setSearchedElement] = createSignal<string[]>([]);

  createEffect(() => {
    const lastElementIndex = searchedElements().length - 1;
    if (lastElementIndex < 0) setLastSearchedElement("");
    setLastSearchedElement(searchedElements()[lastElementIndex]);
  });

  const fetchOnEntry = (): void =>
    createRoot(() => {
      const [data] = props.fetchFunction({ search: "", path: "" });
      createEffect(() => {
        setIsLoading(data.loading);
        setPaginatedEntities([...paginatedEntities(), data.latest] ?? placeholder);
      });
    });

  const onKeyPress = (e: KeyPressed): void => {
    if (e.key === "Enter") {
      if (searchedElements().findIndex((elt) => elt === currentResearch()) < 0) {
        setSearchedElement([...searchedElements(), currentResearch()]);
      }
      setCurrentResearch("");
      fetchOnEntry();
    }
  };

  const deleteChip = (input: string): void => {
    let copy = [...searchedElements()];
    copy = copy.filter((item) => item !== input);
    setSearchedElement(copy);
  };

  const [local, rest] = splitProps(props, ["style"]);

  return (
    <div
      style={{
        display: "flex",
        "flex-direction": "column",
        gap: "16px",
        ...local.style,
      }}
      {...rest}
    >
      <TextField
        value={currentResearch()}
        onChange={(e) => setCurrentResearch(e.target.value)}
        onKeyDown={(e) => onKeyPress(e as KeyPressed)}
        InputProps={{
          startAdornment: () => <SearchIcon style={{ "margin-right": "8px" }} />,
          endAdornment: () => (
            <IconButton
              style={isStringDefined(currentResearch()) ? {} : { display: "none" }}
              aria-label="clear"
              color="primary"
              onClick={() => setCurrentResearch("")}
            >
              <ClearIcon />
            </IconButton>
          ),
        }}
      />
      <Stack direction={"row"} spacing={2} style={{ overflow: "scroll" }}>
        <For each={searchedElements()}>
          {(input) => <Chip label={input} variant="outlined" onDelete={() => deleteChip(input)} />}
        </For>
      </Stack>
    </div>
  );
};
