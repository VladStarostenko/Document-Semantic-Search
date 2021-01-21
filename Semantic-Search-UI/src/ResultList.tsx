import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import {Link} from "@material-ui/core";

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
  })
);


export default ({result}:{result: Array<any>}) => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h6" className={classes.title}>
        {result.length > 0 ? `${result.length} Results` : "Enter something ..."}
      </Typography>
      <div className={classes.demo}>
        <List>
          {result.map((element: any) => (
            <ListItem>
              <Link href={element.link} rel={"noopener noreferrer"} target={"_blank"} >
                {element.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </>
  );
};
