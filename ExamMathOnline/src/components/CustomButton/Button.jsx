import React from "react";
import Button from "@material-ui/core/Button";
import makeStyles from "@material-ui/core/styles/makeStyles";

const styles = makeStyles({
  root: {
    background: (props) => props.background || "white",
    border: (props) => props.border || 0,
    color: (props) => props.color || "white",
    height: (props) => props.height || 48,
    width: (props) => props.width,
    padding: (props) => props.padding || "10px 30px",
    boxShadow: (props) => props.boxShadow,
    textTransform: (props) => props.texttransform || "uppercase",
    borderRadius: (props) => props.borderradius || 5,
    margin: (props) => props.margin || "5px auto",
    transition: "all 0.5s",
    display: "block",
    "&:hover": {
      backgroundColor: (props) => props.backgroundhover || "#ffa726",
      color: (props) => props.colorhover || "white",
    },
  },
});

export default function ButtonV2(props) {
  const { children, ...other } = props;
  const classes = styles({
    children,
    ...other,
  });
  return (
    <Button className={classes.root} {...other}>
      {children || "Button Custom"}
    </Button>
  );
}
