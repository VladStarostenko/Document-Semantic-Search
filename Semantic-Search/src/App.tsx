import SearchBar from "material-ui-search-bar";
import React, { useState } from "react";
import ResultList from "./ResultList";
import { searchInWiki, getKeyPhrases } from "./api";
import { createStyles, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: 16,
    },
    title: {
      textAlign: "center",
      marginBottom: 32,
      marginTop: 32,
    },
  })
);

export default function CustomizedInputBase() {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState(0);
  const [result, setResult] = useState<Array<any>>([]);
  const classes = useStyles();

  const saveResults = async () => {
    const data = await getKeyPhrases(value);
    const newValue = data.documents[0].keyPhrases.join(" ");
    const resultFromWiki: any = await searchInWiki(newValue);
    setTotal(resultFromWiki.total);
    setResult(resultFromWiki.list);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        Wikipedia semantic search
      </Typography>

      <SearchBar
        value={value}
        placeholder={"Enter something ..."}
        onChange={(newValue) => setValue(newValue)}
        onRequestSearch={saveResults}
        onCancelSearch={() => setResult([])}
      />
      <ResultList result={result} total={total} />
    </div>
  );
}
