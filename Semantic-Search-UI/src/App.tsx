import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import ResultList from "./ResultList";

export default function CustomizedInputBase() {
  const [value, setValue] = useState("");
  return (
    <>
      <SearchBar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={() => alert(value)}
      />
      <ResultList />
    </>
  );
}
