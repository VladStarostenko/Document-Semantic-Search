import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import ResultList from "./ResultList";
import {searchInWiki} from "./api";
import {createStyles, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: 16
    }
  })
);

export default function CustomizedInputBase() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Array<any>>([]);
  const classes = useStyles();

  const saveResults = async () => {
      const resultFromWiki: Array<any> = await searchInWiki(value)
      setResult(resultFromWiki);
  }

  return (
    <div className={classes.container}>
      <SearchBar
        value={value}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={saveResults}
      />
      <ResultList result={result} />
    </div>
  );
}
