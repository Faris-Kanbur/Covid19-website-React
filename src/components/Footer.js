import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Server Monks
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  main: {
    width:'100%',
    position: 'fixed',
    bottom: 0,
    marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(2),
    textAlign:'center'

  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[800]
        : theme.palette.grey[200],
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div id="footer" className = {classes.main}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Address Baveria, Germany.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}