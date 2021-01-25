import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { Link } from "@material-ui/core";
import "./index.css";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    searchmatch: {
      color: "red",
    },
  })
);

export default ({ result, total }: { result: Array<any>; total: number }) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {result.length > 0
          ? `Top ${result.length} results out of ${total}`
          : "No results"}
      </Typography>
      <div className={classes.demo}>
        <List>
          {result.map((element: any) => (
            <ListItem style={{ flexDirection: "column" }} key={element.id}>
              <Link
                href={element.link}
                rel={"noopener noreferrer"}
                target={"_blank"}
              >
                <h4>{element.name}</h4>
              </Link>
              <div
                dangerouslySetInnerHTML={{
                  __html: element.snippet
                    .replace(/<span class="searchmatch">/g, "<b>")
                    .replace(/<\/span>/g, "</b>"),
                }}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
