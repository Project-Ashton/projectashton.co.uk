import React from "react";
import comingsoon from '../coming-soon5-1.png';

import { Container, Paper, Typography, Divider } from "@material-ui/core";

import {
  Theme,
  useTheme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      width: "100%",
      padding: theme.spacing(3),
      margin: theme.spacing(3),
    },
    banner: {
      width: "100%",
    },
    header: {
      margin: theme.spacing(3),
    },
    divider: {
      margin: theme.spacing(2),
    },
    body: {
      margin: theme.spacing(3),
    },
  })
);

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Paper className={classes.paper}>
        <img src={comingsoon} className={classes.banner} alt="comingsoon" />
      </Paper>
    </Container>
  );
};

export default Home;
