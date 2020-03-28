import React, { Component, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Button from "@material-ui/core/Button";
import { Avatar, IconButton, CardMedia } from "@material-ui/core";



const useStyles = makeStyles(theme => ({
  root: {
    width: 440,
    position: "relative",
    top: 60,
    minHeight: 420,
    marginBottom: 20,
    marginRight: 20,
    display: "inline-block",

  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    color: " #3c3d47",
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#3cc1fa"
  }
}));

export default function BookCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState("#3c3d47");
  const [count, setCount] = useState(0);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.category=== "children" ? "DZ" : "R"}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.data.title}
        subheader={props.data.author}
      />
      <CardMedia
        className={classes.media}
        image={props.data.imageURL}
        title={props.data.title}
      />
      <CardContent>
        <Typography color="textSecondary" component="p">
          {props.descriptions.descriptionBasic}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
            <p>counter:{count}</p>
        <IconButton
   
          aria-label="add to favorites"
          style={{ color: like }}
          onClick={() => {
            setLike("#fda8c9");
            setCount(count + 1);
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share" style={{ color: " #3c3d47" }}>
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph></Typography>
          <Typography paragraph>
            {props.descriptions.descriptionExtended}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
